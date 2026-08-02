/**
 * 从 datafuturex-iot 导入截图并生成 WebP（full / medium / thumbs）。
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const FULL_MAX = 1440
const MEDIUM_MAX = 960
const THUMB_MAX = 480
const FULL_QUALITY = 95
const MEDIUM_QUALITY = 92
const THUMB_QUALITY = 82

const srcDir = 'D:/DataFutureX-Code/datafuturex-iot/docs/screenshots'
const logoSrc = 'D:/DataFutureX-Code/datafuturex-iot/frontend/src/assets/logo.svg'
const dst = path.resolve('public/works/smart-iot-ai')

const files = [
  { src: path.join(srcDir, '01-login.png'), base: '01-login' },
  { src: path.join(srcDir, '02-dashboard.png'), base: '02-dashboard' },
  { src: path.join(srcDir, '03-app-center.png'), base: '03-app-center' },
  { src: path.join(srcDir, '04-device-product.png'), base: '04-device-product' },
  { src: path.join(srcDir, '05-device-list.png'), base: '05-device-list' },
  { src: path.join(srcDir, '09-data-realtime.png'), base: '06-data-realtime' },
  { src: path.join(srcDir, '10-rule-list.png'), base: '07-rule-list' },
  { src: path.join(srcDir, '06-platform-user.png'), base: '08-platform-user' },
  { src: path.join(srcDir, '07-platform-menu.png'), base: '09-platform-menu' },
  { src: path.join(srcDir, '08-system-config.png'), base: '10-system-config' },
]

const webpOpts = (quality) => ({
  quality,
  smartSubsample: false,
  effort: 5,
})

async function encodePng(pngPath, base) {
  const mediumDir = path.join(dst, 'medium')
  const thumbDir = path.join(dst, 'thumbs')
  await fs.mkdir(mediumDir, { recursive: true })
  await fs.mkdir(thumbDir, { recursive: true })

  await sharp(pngPath)
    .rotate()
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(FULL_QUALITY))
    .toFile(path.join(dst, `${base}.webp`))

  await sharp(pngPath)
    .rotate()
    .resize({ width: MEDIUM_MAX, height: MEDIUM_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(MEDIUM_QUALITY))
    .toFile(path.join(mediumDir, `${base}.webp`))

  await sharp(pngPath)
    .rotate()
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(THUMB_QUALITY))
    .toFile(path.join(thumbDir, `${base}.webp`))

  console.log('ok', base)
}

async function main() {
  await fs.mkdir(dst, { recursive: true })
  await fs.copyFile(logoSrc, path.join(dst, 'logo.svg'))
  for (const file of files) {
    await encodePng(file.src, file.base)
  }
  console.log('done →', dst)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
