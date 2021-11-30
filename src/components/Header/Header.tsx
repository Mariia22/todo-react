import { useTheme } from '../../hooks/Theme.context'
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import { FormComponent } from '../Form/Form';
import style from './Header.module.scss'

export const Header: React.FC = () => {
  const { themeType, setCurrentTheme } = useTheme();
  const className = themeType === 'light' ? style.headerLight : style.headerDark;
  return (
    <div className={className}>
      <div className={style.header_headers}>
        <h1 className={style.header_name}>TODO</h1>
        <ToggleTheme themeType={themeType} onClick={() => setCurrentTheme(themeType === 'dark' ? 'light' : 'dark')} />
      </div>
      <FormComponent />
    </div>
  )
}
