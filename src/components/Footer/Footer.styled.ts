import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {breakpoints} from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';
import { IconWhatsapp } from '../../shared/whatsapp';


export const FooterBlock = styled.footer`
	grid-area: footer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	color: #555a69;
	z-index: 5;
	height 100%;
`;
export const FooterWrap = styled.div`
	max-width: 180rem;
	display: flex;
	align-items: center;
	flex: 1;
	padding: 2rem 0;
`;
export const FooterContact = styled.a`
	cursor: pointer;
`
export const ContentBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const ItemsBlock = styled.div`
	display: flex;
	gap: 16rem;
	padding: 0 2rem;
	
	@media (max-width: ${breakpoints.xl}) {
	
	}
	@media (max-width: ${breakpoints.md}) {
	
	}
	@media (max-width: ${breakpoints.xs}) {
		padding: 0 1rem;
		gap: 0.8rem;
	}
`;
export const ItemsLinks = styled.div`
	display: flex;
	gap: 3rem;
`
export const ItemsTitle = styled.h2`
	font-weight: 300;
	${fluidTypography({max: 20, min: 14})}
`;
export const ItemsText = styled.p`
	${fluidTypography({max: 16, min: 12})}
`;

export const RightsBlock = styled.div`
	margin-top: 3.2rem;
	width: 100%;
	display: flex;
	justify-content: center;
	${fluidTypography({max: 14, min: 12})}
	color: #555a69;
	@media (max-width: ${breakpoints.md}) {
		margin-top: 1.2rem;
	}
`;
export const LinksBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (max-width: ${breakpoints.md}) {
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		gap: 1rem;
	}
`;
export const FooterLink = styled(NavLink)`
	text-decoration: none;
	color: #555a69;
	border: none;
	outline: none;
	cursor: pointer;
	${fluidTypography({max: 16, min: 12})}
	font-weight: 300;
	@media (max-width: ${breakpoints.md}) {
		font-size: 1.4rem;
	}
	@media (max-width: ${breakpoints.sm}) {
		font-size: 1.2rem;
	}
`;
export const ContactLink = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
color: #555a69;
gap: 1rem;
${fluidTypography({max: 20, min: 14})}
padding-right: 2rem;
`;
export const WhatsAppIcon = styled(IconWhatsapp)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  transition: width 0.2s ease, height 0.2s ease;

  @media (max-width: ${breakpoints.md}) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 28px;
    height: 28px;
  }
`