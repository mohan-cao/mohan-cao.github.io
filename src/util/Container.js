import React from 'react'
import './Container.scss'

const Container = ({ children, style }) => {
  return <div className="Container" style={style} >{children}</div>
}
export default Container