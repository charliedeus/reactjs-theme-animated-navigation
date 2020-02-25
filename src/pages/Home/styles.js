import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import bgImage from '~/assets/images/bike.jpg';

export const Container = styled.div`
  header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    .main-nav {
      width: 100%;
      height: 10rem;
      padding: 0 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo a {
      font-family: 'Lato', sans-serif;
      font-size: 1.6rem;
      color: #eee;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      outline: 2px solid #eee;
      padding: 1rem 2rem;

      @media screen and (max-width: 1400px) {
        color: #333;
        outline-color: #333;
      }
    }

    .hamburger-menu {
      height: 5rem;
      width: 5rem;
      background-color: #eee;
      border-radius: 0.4rem;
      box-shadow: 0.5rem 0.5rem 1rem #cacaca, -0.5rem -0.5rem 1rem #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        box-shadow: inset 0.5rem 0.5rem 1rem #cacaca,
          inset -0.5rem -0.5rem 1rem #fff;
      }
    }

    .bar {
      width: 3rem;
      height: 2px;
      background-color: #333;
      display: inline-block;
      position: relative;
      transition: background-color .5s;

      /* display: ${props => (props.visible ? 'inline-block' : 'none')}; */


      &::before {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: #333;
        transition: all .5s;
      }

      &::after {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: #333;
        transition: all .5s;
      }

      &::before {
        top: -0.8rem;
      }
      &::after {
        top: 0.8rem;
      }
    }

    .open .bar {
      background-color: transparent;

      &::before {
        top: 0;
        transform: rotate(135deg);
      }

      &::after {
        top: 0;
        transform: rotate(-135deg);
      }
    }

  }
`;

export const HamburgerMenu = styled.div`
  z-index: 2000;
`;

export const MainNav = styled.nav``;

export const NavList = styled.ul`
  width: 50rem;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #eee;
  transform: translateX(55rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: -0.5rem 0 1rem rgba(0, 0, 0, 0.1);
  z-index: 1500;
  transition: transform 0.5s;

  ${props =>
    props.visible &&
    css`
      transform: translateX(0);
    `}

  @media screen and (max-width: 768px) {
    width: 30rem;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  border-bottom: 2px solid crimson;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #333;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem;
  transition: color 0.5s;

  &:hover {
    color: crimson;
  }
`;

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${bgImage}) center no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroClipped = styled.div`
  width: 60%;
  height: inherit;
  background-color: #eee;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  transform-origin: right;
  z-index: 10;

  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 75vh;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);
  }
`;

export const HeroTextBox = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.5;
  color: #333;
  padding: 1rem;
  z-index: 20;

  .main-heading {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 2.5rem;
    }
  }

  .sub-heading {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }

  .cta-btn {
    display: inline-block;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-decoration: none;
    color: #fff;
    background-color: crimson;
    padding: 1rem 4rem;
    margin-top: 5rem;
    border-radius: 0.4rem;
    box-shadow: 3px 3px 1rem rgba(0, 0, 0, 0.3);
    position: relative;

    @media screen and (max-width: 768px) {
      padding: 1rem 2.5rem;
    }

    @media screen and (max-width: 550px) {
      margin-top: 3rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%:
      height: 100%;
      background-color: inherit;
      border-radius: inherit;
      z-index: -1;
    }

    &:hover {
      transform: scaleX(1.2) scaleY(1.4);
      opacity: 0;
      transition: all .5s;
    }
  }
`;
