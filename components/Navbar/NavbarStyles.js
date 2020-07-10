import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarWrapper = styled.nav`
  ${tw`my-2 bg-gray-100 border border-gray-300 rounded`}

  box-shadow: 0px 0.815184px 3.44189px rgba(0, 0, 0, 0.0174206),
    0px 2.25388px 9.51638px rgba(0, 0, 0, 0.025), 0px 5.42647px 22.9118px rgba(0, 0, 0, 0.0325794),
    0px 18px 76px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: ${(props) => props.theme.screens.md}) {
    ${tw`p-4 m-0 my-0 border-t border-gray-300 border-solid rounded-none`}

    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 4rem;
    box-shadow: none;
  }
`

export const MobileNavbarContentWrapper = styled.section`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.screens.md}) {
    ${tw`flex flex-row items-center justify-between w-full`}
  }
`

export const LinkGroup = styled.section`
  ${tw`flex flex-col`}
`
