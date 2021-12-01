enum Color {
  VeryLightBlueGrey = 'hsl(0, 0%, 98%)',
  Grey = 'hsl(236, 33%, 92%)',
  VeryDarkGreyBlue = 'hsl(235, 24%, 19%)',
  BlackColor = 'hsl(235, 24%, 19%)',
  DarkFontColor = 'hsl(233, 11%, 84%)',
  LightFontColor = 'hsl(235, 19%, 35%)'
}
export type ThemeType = 'light' | 'dark'

export interface Theme {
  '--background-color': Color
  '--list': Color
  '--font': Color
}

export const ThemeDescribe: Record<ThemeType, Theme> = {
  light: {
    '--background-color': Color.Grey,
    '--list': Color.VeryLightBlueGrey,
    '--font': Color.LightFontColor
  },
  dark: {
    '--background-color': Color.BlackColor,
    '--list': Color.VeryDarkGreyBlue,
    '--font': Color.DarkFontColor
  }
}
