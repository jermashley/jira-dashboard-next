import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faClipboardListCheck,
  faServer,
  faRocketLaunch,
  faSignOut,
} from '@fortawesome/pro-duotone-svg-icons'
import { DefaultButton } from '../Buttons/Buttons'
import {
  NavbarWrapper,
  MobileNavbarContentWrapper,
  NavbarLinkGroup,
  NavbarLink,
} from './NavbarStyles'

library.add(faClipboardListCheck, faServer, faRocketLaunch, faSignOut)

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
  const [navbarToggle, setNavbarToggle] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  const [dimensions, setDimensions] = useState({
    height: process.browser ? window.innerHeight : null,
    width: process.browser ? window.innerWidth : null,
  })

  useEffect(() => {
    setIsDesktop(dimensions.width > parseFloat(themeContext.screens.lg))

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: process.browser ? window.innerHeight : null,
        width: process.browser ? window.innerWidth : null,
      })
    }, 250)

    if (process.browser) {
      window.addEventListener(`resize`, debouncedHandleResize)
    }

    return (_) => {
      if (process.browser) {
        window.removeEventListener(`resize`, debouncedHandleResize)
      }
    }
  })

  const navbarHeight = () => {
    const navbarDefaultdHeight = isDesktop ? null : 64

    const mobileNavbarLinkGroupHeight = process.browser
      ? document.getElementById(`navbarLinks`).clientHeight
      : 0

    const mobileNavbarToggledHeight = navbarDefaultdHeight + mobileNavbarLinkGroupHeight

    const mobileNavbarHeight = navbarToggle ? mobileNavbarToggledHeight : navbarDefaultdHeight

    if (isDesktop) {
      return navbarDefaultdHeight
    }

    return mobileNavbarHeight
  }

  return (
    <NavbarWrapper
      style={{
        height: navbarHeight(),
        transition: `all 300ms cubic-bezier(0.395, 0.705, 0.240, 1.000)`,
      }}
    >
      {dimensions.width <= parseFloat(themeContext.screens.lg) ? (
        <MobileNavbarContentWrapper>
          <div className="flex flex-col items-start justify-start leading-none">
            <span className="font-semibold text-gray-800" style={{ fontSize: `0.8125rem` }}>
              Prologue Technology
            </span>
            <span className="font-semibold text-gray-700" style={{ fontSize: `0.625rem` }}>
              Development Dashboard
            </span>
          </div>

          <DefaultButton
            icon={navbarToggle ? `angle-down` : `angle-up`}
            text="Menu"
            color="gray"
            onClick={() => setNavbarToggle(!navbarToggle)}
          />
        </MobileNavbarContentWrapper>
      ) : null}

      <div
        id="navbarLinks"
        className="flex flex-col items-start justify-between"
        style={{
          width: isDesktop ? null : `100%`,
          height: isDesktop ? `100%` : `auto`,
          padding: isDesktop ? 0 : `1.5rem 0`,
        }}
      >
        <NavbarLinkGroup fullWidth={!isDesktop}>
          <NavbarLink isActive>
            <FontAwesomeIcon icon={[`fad`, `clipboard-list-check`]} fixedWidth />
            <span>Tickets</span>
          </NavbarLink>

          <NavbarLink>
            <FontAwesomeIcon icon={[`fad`, `server`]} fixedWidth />
            <span>Servers</span>
          </NavbarLink>

          <NavbarLink>
            <FontAwesomeIcon icon={[`fad`, `rocket-launch`]} fixedWidth />
            <span>Deployments</span>
          </NavbarLink>
        </NavbarLinkGroup>

        {!isDesktop ? <hr className="w-full my-4 border-gray-300" /> : null}

        <NavbarLinkGroup fullWidth={!isDesktop}>
          <NavbarLink isSignOut>
            <FontAwesomeIcon icon={[`fad`, `sign-out`]} fixedWidth />
            <span>Log off</span>
          </NavbarLink>
        </NavbarLinkGroup>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
