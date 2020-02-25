import React, { useState, useEffect } from 'react';

import gsap from 'gsap';
import {
  Container,
  MainNav,
  NavList,
  NavItem,
  StyledLink,
  Hero,
  HeroClipped,
  HeroTextBox,
  HamburgerMenu,
} from './styles';

export default function Home() {
  const [visible, setVisible] = useState(true);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    gsap.fromTo('.hero-clipped', { scaleX: 0 }, { duration: 1, scaleX: 1 });
    gsap.fromTo(
      '.logo',
      { x: -200, opacity: 0 },
      { duration: 1, delay: 0.5, x: 0, opacity: 1 }
    );
    gsap.fromTo(
      '.hamburger-menu',
      { x: 200, opacity: 0 },
      { duration: 1, delay: 0.5, x: 0, opacity: 1 }
    );
    gsap.fromTo(
      '.hero-textbox',
      { yPercent: 40, opacity: 0 },
      { duration: 1, delay: 1.3, yPercent: -50, opacity: 1 }
    );
  }, []);

  return (
    <Container>
      <header>
        <MainNav className={visible ? 'main-nav' : 'main-nav open'}>
          <div className="logo">
            <a href="/">AGERBA</a>
          </div>
          <HamburgerMenu
            className="hamburger-menu"
            onClick={handleToggleVisible}
          >
            <span className="bar" />
          </HamburgerMenu>
          <NavList visible={!visible}>
            <NavItem className="nav-item">
              <StyledLink href="#" className="nav-link">
                Home
              </StyledLink>
            </NavItem>
            <NavItem className="nav-item">
              <StyledLink href="#" className="nav-link">
                Tours
              </StyledLink>
            </NavItem>
            <NavItem className="nav-item">
              <StyledLink href="#" className="nav-link">
                Pricing
              </StyledLink>
            </NavItem>
            <NavItem className="nav-item">
              <StyledLink href="#" className="nav-link">
                Locations
              </StyledLink>
            </NavItem>
            <NavItem className="nav-item">
              <StyledLink href="#" className="nav-link">
                About
              </StyledLink>
            </NavItem>
          </NavList>
        </MainNav>
      </header>

      <Hero className="hero">
        <HeroClipped className="hero-clipped">
          <HeroTextBox className="hero-textbox">
            <h1 className="main-heading">AGERBA</h1>
            <h2 className="sub-heading">
              Learn about our awesome tourist attractions
            </h2>
            <StyledLink href="#" className="cta-btn">
              Learn more
            </StyledLink>
          </HeroTextBox>
        </HeroClipped>
      </Hero>
    </Container>
  );
}
