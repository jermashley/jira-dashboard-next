/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarWrapper = styled.nav`
  ${tw`px-4 py-6 my-2 bg-gray-100 border border-gray-300 rounded`}

  box-shadow: 0px 0.815184px 3.44189px rgba(0, 0, 0, 0.0174206),
    0px 2.25388px 9.51638px rgba(0, 0, 0, 0.025), 0px 5.42647px 22.9118px rgba(0, 0, 0, 0.0325794),
    0px 18px 76px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: ${(props) => props.theme.screens.lg}),
    (hover: none) and (pointer: coarse) {
    ${tw`p-4 m-0 my-0 border-t border-gray-300 border-solid rounded-none`}

    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: none;
  }

  @media screen and (max-width: ${(props) => props.theme.screens.lg}) {
    ${tw`w-screen`}
  }
`

export const MobileNavbarContentWrapper = styled.section`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.screens.lg}),
    (hover: none) and (pointer: coarse) {
    ${tw`flex flex-row items-center justify-between w-full`}
  }
`

export const NavbarLinkGroup = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;

  ${(props) => (props.fullWidth ? `width: 100%;` : null)}
`

export const NavbarLink = styled.a`
  ${tw`relative flex flex-row items-center justify-start text-xs rounded`}
  width: min-content;
  padding: 0.625rem;
  transition: all 300ms cubic-bezier(0.395, 0.705, 0.240, 1.000);

  color: ${(props) =>
    props.isActive
      ? props.theme.colors.white
      : props.isSignOut
      ? props.theme.colors.red[`600`]
      : props.theme.colors.brand.primary};

  background-color: ${(props) =>
    props.isActive
      ? props.isSignOut
        ? props.theme.colors.red[`500`]
        : props.theme.colors.brand.light
      : `transparent`};

  @media screen and (max-width: ${(props) => props.theme.screens.lg}),
    (hover: none) and (pointer: coarse) {
    width: 100%;
  }

  svg {
    ${tw`text-base`}
  }

  span {
    ${tw`ml-2 text-xs font-semibold leading-none`}
    display: none;
    position: absolute;
    left: 1.875rem;
    white-space: nowrap;
    opacity: 0;

    @media screen and (max-width: ${(props) => props.theme.screens.lg}),
    (hover: none) and (pointer: coarse) {
      display: inline;
      opacity: 1;
    }
  }

  &:hover {
    ${tw`text-white cursor-pointer`}
    background-color: ${(props) =>
      props.isSignOut ? props.theme.colors.red[`500`] : props.theme.colors.brand.primary}
  }

  &:hover {
    > span {
      display: inline;
      opacity: 1;
      position: static;
    }
  }
`
