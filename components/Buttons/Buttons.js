import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-regular-svg-icons'

library.add(faAngleDown, faAngleUp)

const gridStyles = (reverse) => {
  const styles = {
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `center`,
    alignItems: `center`,
  }

  return styles
}

export const DefaultButton = ({ type, icon, text, color, reverse, onClick }) => {
  return (
    <button
      type={type ?? `button`}
      className={`px-4 py-2 rounded bg-${color}-200 hover:bg-${color}-300 border border-solid border-${color}-300 hover:border-${color}-400 text-xs leading-none`}
      style={gridStyles(reverse)}
      onClick={onClick}
    >
      {icon ? (
        <span style={{ gridArea: `icon` }} className={`m${reverse ? `l` : `r`}-2`}>
          <FontAwesomeIcon icon={[`far`, icon]} className={`fill-current text-${color}-700`} />
        </span>
      ) : null}

      <span style={{ gridArea: `text` }}>{text}</span>
    </button>
  )
}

export const OtherButton = null
