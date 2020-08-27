import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import tw from 'twin.macro'
import Navbar from '../components/Navbar/Navbar'

const DefaultLayoutWrapper = styled.main`
  ${tw`w-full h-full max-w-full max-h-full min-w-full min-h-full overflow-hidden`}
  display: grid;
  grid-template-columns: 4.625rem minmax(auto, 64rem) auto;
  grid-gap: 2rem;
  min-height: -webkit-fill-available;

  @media screen and (max-width: ${(props) => props.theme.screens.lg}),
    (max-width: ${(props) => props.theme.screens.lg}) and (hover: none) and (pointer: coarse) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const DefaultLayout = ({ children }) => (
  <Div100vh>
    <DefaultLayoutWrapper>
      <Navbar />
      {children}
    </DefaultLayoutWrapper>
  </Div100vh>
)

export default DefaultLayout
