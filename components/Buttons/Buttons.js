import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-regular-svg-icons'

library.add(faAngleDown, faAngleUp)

const gridStyles = (reverse) => {
  const styles = {
    display: `grid`,
    gridAutoColumns: `min-content`,
    gridTemplateAreas: !reverse ? `'icon text'` : `'text icon'`,
    gridGap: `0.5rem`,
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
      <span style={{ gridArea: `icon` }}>
        <FontAwesomeIcon icon={[`far`, icon]} className={`fill-current text-${color}-700`} />
      </span>

      <span style={{ gridArea: `text` }}>{text}</span>
    </button>
  )
}

export const OtherButton = null
