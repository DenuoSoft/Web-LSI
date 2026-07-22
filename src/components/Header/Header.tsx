import {
	ContactLink,
	// ContactLink,
	HeaderBlock,
	HeaderContact,
	HeaderContainer,
	HeaderLink,
	HeaderLogo,
	HeaderNav,
	MobileMenuButton,
	MobileOverlay,
} from './Header.styled';
import logo from '../../assets/img/logo.svg';
import {useState} from 'react';
import { IconWhatsapp } from '../../shared/whatsapp';

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};
	return (
		<HeaderBlock>
			<HeaderContainer>
				<HeaderContact to="/">
					<HeaderLogo src={logo} />
		    	</HeaderContact>
				<HeaderNav $isOpen={isMobileMenuOpen}>
					<HeaderLink to="/" onClick={closeMobileMenu}>
						Home
					</HeaderLink>
					<HeaderLink to="/services" onClick={closeMobileMenu}>
						Services
					</HeaderLink>
					<HeaderLink to="/people" onClick={closeMobileMenu}>
						People
					</HeaderLink>
					<HeaderLink to="/insights" onClick={closeMobileMenu}>
						Insights
					</HeaderLink>
					
				</HeaderNav>
				 <ContactLink>
					<IconWhatsapp width={40} height={40} />
					<div>+975 123 45 67</div>
					</ContactLink>
					
				<MobileMenuButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
					{isMobileMenuOpen ? '✕' : '☰'}
				</MobileMenuButton>
			</HeaderContainer>
			<MobileOverlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
		</HeaderBlock>
	);
};
