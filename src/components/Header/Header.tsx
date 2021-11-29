import { FC } from 'react'
import { useTheme } from '../../hooks/Theme.context'
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import style from './Header.module.scss'

export const Header: FC = () => {
  const { themeType, setCurrentTheme } = useTheme();
  const className = themeType === 'light' ? style.headerLight : style.headerDark;
  return (
    <div className={className}>
      <div className={style.header_headers}>
        <h1>TODO</h1>
        <ToggleTheme themeType={themeType} onClick={() => setCurrentTheme(themeType === 'dark' ? 'light' : 'dark')} />
      </div>
      <form>
        <input type="text" placeholder='Create a new todo...' />
      </form>
    </div>
  )
}
