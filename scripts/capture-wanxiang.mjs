import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(__dirname, '../public/works/wanxiang-hydro')
const base = 'https://wanxiang.datafuturex.cn'

const shots = [
  { name: '01-portal.png', path: '/portal', wait: 2000 },
  { name: '02-login.png', path: '/login', wait: 1500 },
]

async function main() {
  await mkdir(outDir, { recursive: true })
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })

  for (const shot of shots) {
    const url = `${base}${shot.path}`
    console.log('capture', url)
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(shot.wait)
    await page.screenshot({
      path: path.join(outDir, shot.name),
      fullPage: false,
    })
    console.log('saved', shot.name)
  }

  // Try demo login for inner pages
  try {
    await page.goto(`${base}/login`, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(1000)

    const user = page.locator('input[type="text"], input[placeholder*="账号"], input[placeholder*="用户"]').first()
    const pass = page.locator('input[type="password"]').first()
    if (await user.count()) {
      await user.fill('demo')
      await pass.fill('demo123')
      // click captcha / login if present — best effort
      const loginBtn = page.getByRole('button', { name: /登录|登陆|Login/i }).first()
      if (await loginBtn.count()) {
        await loginBtn.click()
        await page.waitForTimeout(2500)
      }
    }

    const afterLogin = [
      { name: '03-dashboard.png', path: '/home/dashboard' },
      { name: '04-map.png', path: '/map/2d' },
      { name: '05-realtime.png', path: '/data/realtime' },
    ]

    for (const shot of afterLogin) {
      try {
        await page.goto(`${base}${shot.path}`, {
          waitUntil: 'networkidle',
          timeout: 45000,
        })
        await page.waitForTimeout(2000)
        // if redirected to login, skip
        if (page.url().includes('/login')) {
          console.log('skip (login required)', shot.name)
          continue
        }
        await page.screenshot({
          path: path.join(outDir, shot.name),
          fullPage: false,
        })
        console.log('saved', shot.name)
      } catch (err) {
        console.log('fail', shot.name, String(err))
      }
    }
  } catch (err) {
    console.log('login flow skipped', String(err))
  }

  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
