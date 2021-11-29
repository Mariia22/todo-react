enum Color {
  VeryLightBlueGrey = 'hsl(236, 33%, 92%)',
  LightGrey = 'hsl(0, 0%, 98%)',
  VeryDarkGreyBlue = 'hsl(235, 19%, 35%)',
  FontColor = 'black'
}
export type ThemeType = 'light' | 'dark'

export interface Theme {
  '--background-color': Color
  '--list': Color
}

export const ThemeDescribe: Record<ThemeType, Theme> = {
  light: {
    '--background-color': Color.LightGrey,
    '--list': Color.VeryLightBlueGrey,
  },
  dark: {
    '--background-color': Color.FontColor,
    '--list': Color.VeryDarkGreyBlue,
  }
}
