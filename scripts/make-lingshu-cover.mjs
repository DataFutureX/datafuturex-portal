/**
 * 为灵枢生成默认封面（开发中占位图）→ full / medium / thumbs WebP
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const dst = path.resolve('public/works/lingshu-market')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900" viewBox="0 0 1440 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="900" fill="url(#bg)"/>
  <circle cx="1180" cy="180" r="260" fill="#475569" fill-opacity="0.07"/>
  <circle cx="260" cy="760" r="220" fill="#475569" fill-opacity="0.05"/>
  <g transform="translate(720 390)">
    <circle r="88" fill="#475569" fill-opacity="0.1"/>
    <circle r="56" fill="#FFFFFF" stroke="#475569" stroke-width="3"/>
    <circle r="16" fill="#475569"/>
    <rect x="-92" y="-92" width="28" height="28" rx="6" fill="#475569"/>
    <rect x="64" y="-92" width="28" height="28" rx="6" fill="#475569" fill-opacity="0.75"/>
    <rect x="-92" y="64" width="28" height="28" rx="6" fill="#475569" fill-opacity="0.75"/>
    <rect x="64" y="64" width="28" height="28" rx="6" fill="#475569" fill-opacity="0.55"/>
  </g>
  <text x="720" y="560" text-anchor="middle" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="36" font-weight="600" fill="#334155">灵枢行业应用市场</text>
  <text x="720" y="610" text-anchor="middle" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="20" fill="#475569" fill-opacity="0.65">正在开发中</text>
</svg>`

async function main() {
  await fs.mkdir(path.join(dst, 'medium'), { recursive: true })
  await fs.mkdir(path.join(dst, 'thumbs'), { recursive: true })
  await fs.writeFile(path.join(dst, '00-cover.svg'), svg)

  const buf = Buffer.from(svg)
  await sharp(buf).webp({ quality: 92, effort: 5 }).toFile(path.join(dst, '00-cover.webp'))
  await sharp(buf)
    .resize({ width: 960, height: 960, fit: 'inside' })
    .webp({ quality: 90, effort: 5 })
    .toFile(path.join(dst, 'medium', '00-cover.webp'))
  await sharp(buf)
    .resize({ width: 480, height: 480, fit: 'inside' })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(dst, 'thumbs', '00-cover.webp'))

  console.log('done →', dst)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
