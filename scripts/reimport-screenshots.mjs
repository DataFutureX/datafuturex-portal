/**
 * Re-copy source PNGs → WebP (full / medium / thumbs).
 * full: 1440 @ q95（详情大图）
 * medium: 960 @ q92（列表封面，兼顾清晰与体积）
 * thumbs: 480 @ q82（图集小图）
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

const yunqiSrc = 'E:/workspace-qoder/yunqi-admin/screenshot'
const yunqiDst = path.resolve('public/works/yunqi-admin')
const yunqiFiles = [
  '02-login.png',
  '03-dashboard.png',
  '04-user.png',
  '05-unit.png',
  '06-role.png',
  '07-menu.png',
  '08-system-config.png',
  '09-announcement.png',
  '10-operation-log.png',
  '11-monitor.png',
  '12-api-docs.png',
  '13-profile.png',
  '14-change-password.png',
]

const smartIotSrc = 'D:/DataFutureX-Code/datafuturex-iot/docs/screenshots'
const smartIotDst = path.resolve('public/works/smart-iot-ai')
const smartIotFiles = [
  { src: path.join(smartIotSrc, '01-login.png'), base: '01-login' },
  { src: path.join(smartIotSrc, '02-dashboard.png'), base: '02-dashboard' },
  { src: path.join(smartIotSrc, '03-app-center.png'), base: '03-app-center' },
  { src: path.join(smartIotSrc, '04-device-product.png'), base: '04-device-product' },
  { src: path.join(smartIotSrc, '05-device-list.png'), base: '05-device-list' },
  { src: path.join(smartIotSrc, '09-data-realtime.png'), base: '06-data-realtime' },
  { src: path.join(smartIotSrc, '10-rule-list.png'), base: '07-rule-list' },
  { src: path.join(smartIotSrc, '06-platform-user.png'), base: '08-platform-user' },
  { src: path.join(smartIotSrc, '07-platform-menu.png'), base: '09-platform-menu' },
  { src: path.join(smartIotSrc, '08-system-config.png'), base: '10-system-config' },
]

const wanxiangSrc =
  'E:/workspace-qoder/wanxiang-monitor-platform/frontend/screenshots'
const wanxiangDst = path.resolve('public/works/wanxiang-hydro')
const wanxiangAscii = [
  'login',
  'portal',
  'home-dashboard',
  'ai-chat',
  'ai-documents',
  'ai-document-qa',
  'map-overview-2d',
  'map-overview-3d',
  'data-realtime',
  'data-alerts',
  'data-video-monitor',
  'terminal-list',
  'terminal-video-station',
  'terminal-element-config',
  'project-ledger-manage',
  'project-ledger-view',
  'system-user',
  'system-role',
  'system-menu',
  'system-unit',
  'system-config',
  'system-monitor',
  'system-operation-log',
  'system-announcement',
  'profile-info',
  'profile-password',
  'video-monitor-live',
  'devtools-backend-api',
]

const webpOpts = (quality) => ({
  quality,
  smartSubsample: false,
  effort: 5,
})

async function encodePng(pngPath, outDir, base) {
  const outFull = path.join(outDir, `${base}.webp`)
  const mediumDir = path.join(outDir, 'medium')
  const thumbDir = path.join(outDir, 'thumbs')
  const outMedium = path.join(mediumDir, `${base}.webp`)
  const outThumb = path.join(thumbDir, `${base}.webp`)
  await fs.mkdir(mediumDir, { recursive: true })
  await fs.mkdir(thumbDir, { recursive: true })

  await sharp(pngPath)
    .rotate()
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(FULL_QUALITY))
    .toFile(outFull)

  await sharp(pngPath)
    .rotate()
    .resize({ width: MEDIUM_MAX, height: MEDIUM_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(MEDIUM_QUALITY))
    .toFile(outMedium)

  await sharp(pngPath)
    .rotate()
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(THUMB_QUALITY))
    .toFile(outThumb)

  const st = await fs.stat(outFull)
  const sm = await fs.stat(outMedium)
  console.log(
    'ok',
    base,
    `full ${Math.round(st.size / 1024)}KB`,
    `mid ${Math.round(sm.size / 1024)}KB`,
  )
}

async function importYunqi() {
  for (const name of yunqiFiles) {
    const base = name.replace(/\.png$/i, '')
    await encodePng(path.join(yunqiSrc, name), yunqiDst, base)
  }
}

async function importSmartIot() {
  for (const file of smartIotFiles) {
    await encodePng(file.src, smartIotDst, file.base)
  }
}

async function importWanxiang() {
  const entries = await fs.readdir(wanxiangSrc)
  for (const ascii of wanxiangAscii) {
    const match = entries.find((f) => f.endsWith(`__${ascii}.png`) || f === `${ascii}.png`)
    if (!match) {
      console.warn('missing wanxiang', ascii)
      continue
    }
    await encodePng(path.join(wanxiangSrc, match), wanxiangDst, ascii)
  }
}

async function main() {
  const only = process.argv[2]
  if (!only || only === 'all') {
    await importYunqi()
    await importSmartIot()
    await importWanxiang()
  } else if (only === 'wanxiang') {
    await importWanxiang()
  } else if (only === 'yunqi') {
    await importYunqi()
  } else if (only === 'smart-iot') {
    await importSmartIot()
  } else {
    console.error(`unknown target: ${only} (use wanxiang|yunqi|smart-iot|all)`)
    process.exit(1)
  }

  console.log('done')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
