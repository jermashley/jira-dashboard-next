import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavbarWrapper, MobileNavbarContentWrapper } from './NavbarStyles'

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const Navbar = () => {
  const themeContext = useContext(ThemeContext)

  const [dimensions, setDimensions] = useState({
    height: process.browser ? window.innerHeight : null,
    width: process.browser ? window.innerWidth : null,
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: process.browser ? window.innerHeight : null,
        width: process.browser ? window.innerWidth : null,
      })
    }, 1000)

    if (process.browser) {
      window.addEventListener(`resize`, debouncedHandleResize)

      return (_) => {
        window.removeEventListener(`resize`, debouncedHandleResize)
      }
    }
  })

  return (
    <NavbarWrapper>
      {dimensions.width <= parseFloat(themeContext.screens.md) ? (
        <MobileNavbarContentWrapper>
          <div className="flex flex-col items-start justify-start">
            <span className="font-semibold text-gray-800" style={{ fontSize: `0.8125rem` }}>
              Prologue Technology
            </span>
            <span className="font-semibold text-gray-700" style={{ fontSize: `0.625rem` }}>
              Development Dashboard
            </span>
          </div>

          <button type="button">Menu</button>
        </MobileNavbarContentWrapper>
      ) : null}
    </NavbarWrapper>
  )
}

export default Navbar
