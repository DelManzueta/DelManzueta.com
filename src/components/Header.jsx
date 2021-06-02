import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { withRouter, Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'menu'
  })
  // State of our button
  const [disabled, setDisabled] = useState(false) 

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: 'menu' })
    })
  }, [history])

  // Toggle menu
  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'close'
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'menu'
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'close'
      })
    }
  }

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <header>
      <div className='container'>
          <div className='top-menu'>
            <div className='logo'>
            </div>
            <div className='menu'>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      <Hamburger state={state} />
    </header>
  )
}

export default withRouter(Header)
