enum Color {
  VeryLightBlueGrey = 'hsl(0, 0%, 98%)',
  Grey = 'hsl(236, 33%, 92%)',
  VeryDarkGreyBlue = 'hsl(235, 24%, 19%)',
  FontColor = 'black'
}
export type ThemeType = 'light' | 'dark'

export interface Theme {
  '--background-color': Color
  '--list': Color
}

export const ThemeDescribe: Record<ThemeType, Theme> = {
  light: {
    '--background-color': Color.Grey,
    '--list': Color.VeryLightBlueGrey,
  },
  dark: {
    '--background-color': Color.FontColor,
    '--list': Color.VeryDarkGreyBlue,
  }
}
