import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Carrers</FooterLink>
                <FooterLink to='/'>Investor</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
