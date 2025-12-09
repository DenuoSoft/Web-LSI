import {
	HeaderBlock,
	HeaderContact,
	HeaderContainer,
	HeaderLink,
	HeaderLogo,
	HeaderNav,
	MobileMenuButton,
	MobileOverlay,
} from './Header.styled';
//import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import {useState} from 'react';

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
				<HeaderLogo src={logo} />
				<HeaderContact>
					Unit No. 31–44, <br />
					Central Park Towers,
					<br /> DIFC Dubai, United Arab Emirates
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
					<HeaderLink to="/articles" onClick={closeMobileMenu}>
						Articles
					</HeaderLink>
					<HeaderLink to="/alerts" onClick={closeMobileMenu}>
						Alerts
					</HeaderLink>
				</HeaderNav>
				
				<MobileMenuButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
					{isMobileMenuOpen ? '✕' : '☰'}
				</MobileMenuButton>
			</HeaderContainer>
			<MobileOverlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
		</HeaderBlock>
	);
};
