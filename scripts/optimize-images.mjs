/**
 * Convert public PNG/JPEG screenshots to WebP (full + medium + thumbs).
 * Usage: npm run optimize:images
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('public')
const FULL_MAX = 1920
const MEDIUM_MAX = 1280
const THUMB_MAX = 640
const FULL_QUALITY = 92
const MEDIUM_QUALITY = 90
const THUMB_QUALITY = 86

const webpOpts = (quality) => ({
  quality,
  smartSubsample: false,
  effort: 6,
})

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'thumbs' || e.name === 'medium') continue
      yield* walk(full)
    } else if (/\.(png|jpe?g)$/i.test(e.name)) {
      yield full
    }
  }
}

async function convert(file) {
  const dir = path.dirname(file)
  const base = path.basename(file).replace(/\.(png|jpe?g)$/i, '')
  const outFull = path.join(dir, `${base}.webp`)
  const mediumDir = path.join(dir, 'medium')
  const thumbDir = path.join(dir, 'thumbs')
  const outMedium = path.join(mediumDir, `${base}.webp`)
  const outThumb = path.join(thumbDir, `${base}.webp`)

  await fs.mkdir(mediumDir, { recursive: true })
  await fs.mkdir(thumbDir, { recursive: true })

  await sharp(file)
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(FULL_QUALITY))
    .toFile(outFull)

  await sharp(file)
    .resize({ width: MEDIUM_MAX, height: MEDIUM_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(MEDIUM_QUALITY))
    .toFile(outMedium)

  await sharp(file)
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .webp(webpOpts(THUMB_QUALITY))
    .toFile(outThumb)

  await fs.unlink(file)
  console.log('ok', path.relative(ROOT, file), '→', path.relative(ROOT, outFull))
}

let n = 0
for await (const file of walk(ROOT)) {
  await convert(file)
  n++
}
console.log(n ? `Converted ${n} image(s).` : 'No PNG/JPEG left under public/.')
