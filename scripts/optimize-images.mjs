/**
 * Convert public PNG/JPEG screenshots to WebP (full + thumbs).
 * Usage: npm run optimize:images
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('public')
const FULL_MAX = 1440
const THUMB_MAX = 320
const QUALITY = 78
const THUMB_QUALITY = 72

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'thumbs') continue
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
  const thumbDir = path.join(dir, 'thumbs')
  const outThumb = path.join(thumbDir, `${base}.webp`)

  await fs.mkdir(thumbDir, { recursive: true })

  await sharp(file)
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outFull)

  await sharp(file)
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
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
