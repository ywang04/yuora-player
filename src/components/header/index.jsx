/*
 * @Author: Yang 
 * @Date: 2018-03-12 15:32:03 
 * @Last Modified by: Yang
 * @Last Modified time: 2018-03-13 16:54:49
 */

import React from 'react'
import './index.less'

class Header extends React.Component {
  render() {
    return (
      <div className="components-header row">
        <img src="/static/images/logo.png" width="40" alt="" className="-col-auto" />
        <h1 className="caption">Music Player</h1>
      </div>
    )
  }
}

export default Header