import React, { useState } from 'react'
import style from './Filter.module.scss'

interface Props {
  activeProperty: boolean
  name: string
}
export const Filter: React.VFC<Props> = ({ name, activeProperty }) => {

  return (
    <button className={`${activeProperty === false ? style.todo_total_sort_item : style.todo_total_sort_item_active}`}>
      {name}
    </button>
  )
}


