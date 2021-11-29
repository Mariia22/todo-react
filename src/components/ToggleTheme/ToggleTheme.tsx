import { ThemeType } from "../../types/theme"
import style from './ToggleTheme.module.scss'

interface ButtonProps {
  themeType: ThemeType,
  onClick: () => void
}
export const ToggleTheme: React.FC<ButtonProps> = ({ themeType, onClick, children }) => {
  const className = themeType === 'light' ? style.buttonLight : style.buttonDark;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

