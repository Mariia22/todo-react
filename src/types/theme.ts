enum Color {
  VeryLightBlueGrey = 'hsl(236, 33%, 92%)',
  LightGrey = 'hsl(0, 0%, 98%)',
  VeryDarkGreyBlue = 'hsl(235, 19%, 35%)',
  FontColor = 'black'
}
enum Image {
  BackgroundMobileHeaderLight = 'url("../../images/bg-mobile-light.jpg") no - repeat hsl(0, 0%, 98%)',
  BackgroundMobileSwitchMoon = 'url("../../images/icon-moon.svg") no - repeat transparent center',
  BackgroundDesktopLight = 'url("../../images/bg-desktop-light.jpg")',
  BackgroundMobileHeaderDark = 'url("../../images/bg-mobile-dark.jpg") no-repeat hsl(0, 0%, 98%)',
  BackgroundMobileSwitchSun = 'url("../../images/icon-sun.svg") no-repeat transparent center',
  BackgroundDesktopDark = 'url("../../images/bg-desktop-dark.jpg") no-repeat hsl(0, 0%, 98%)'
}
export type ThemeType = 'light' | 'dark'

export interface Theme {
  '--background': Color
  '--list': Color
}

export const ThemeDescribe: Record<ThemeType, Theme> = {
  light: {
    '--background': Color.LightGrey,
    '--list': Color.VeryLightBlueGrey
  },
  dark: {
    '--background': Color.FontColor,
    '--list': Color.VeryDarkGreyBlue
  }
}
