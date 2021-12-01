import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Wrapper.module.scss';

export const Wrapper: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.app_content} >
      {children}
    </div>
  )
}