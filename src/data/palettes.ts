/** 门户与作品配色单一数据源 */

export type PaletteId =
  | 'future-purple'
  | 'minimal-white'
  | 'tech-blue'
  | 'industrial-cyan'
  | 'lingshu-slate'

export type Palette = {
  id: PaletteId
  label: string
  hex: string
  rgb: string
}

export const brandPalette = {
  id: 'future-purple',
  label: '未来紫',
  hex: '#5B21B6',
  rgb: '91, 33, 182',
} as const satisfies Palette

export const workPalettes = {
  'minimal-white': {
    id: 'minimal-white',
    label: '极简白',
    hex: '#171717',
    rgb: '23, 23, 23',
  },
  'tech-blue': {
    id: 'tech-blue',
    label: '科技蓝',
    hex: '#2563EB',
    rgb: '37, 99, 235',
  },
  'industrial-cyan': {
    id: 'industrial-cyan',
    label: '工业青',
    hex: '#0F766E',
    rgb: '15, 118, 110',
  },
  'lingshu-slate': {
    id: 'lingshu-slate',
    label: '石板灰',
    hex: '#475569',
    rgb: '71, 85, 105',
  },
} as const satisfies Record<string, Palette>

export type WorkPaletteId = keyof typeof workPalettes

/** 作品主题 CSS 变量 */
export function paletteThemeVars(palette: Pick<Palette, 'hex' | 'rgb'>): Record<string, string> {
  return {
    '--work-accent': palette.hex,
    '--work-accent-rgb': palette.rgb,
  }
}
