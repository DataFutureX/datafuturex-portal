/** 门户与作品配色单一数据源 */

export type PaletteId =
  | 'primer-blue'
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
  id: 'primer-blue',
  label: 'Primer 蓝',
  hex: '#0969DA',
  rgb: '9, 105, 218',
} as const satisfies Palette

export const workPalettes = {
  'minimal-white': {
    id: 'minimal-white',
    label: '极简白',
    hex: '#1F2328',
    rgb: '31, 35, 40',
  },
  'tech-blue': {
    id: 'tech-blue',
    label: '科技蓝',
    hex: '#0969DA',
    rgb: '9, 105, 218',
  },
  'industrial-cyan': {
    id: 'industrial-cyan',
    label: '工业青',
    hex: '#1B7C83',
    rgb: '27, 124, 131',
  },
  'lingshu-slate': {
    id: 'lingshu-slate',
    label: '石板灰',
    hex: '#636C76',
    rgb: '99, 108, 118',
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
