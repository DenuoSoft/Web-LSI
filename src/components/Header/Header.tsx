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
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IconWhatsapp } from '../../shared/whatsapp';
import Logo from '../../shared/logo';

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const isHomePage = location.pathname === '/';

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};
	return (
		<HeaderBlock $isHomePage={isHomePage}>
			<HeaderContainer $isHomePage={isHomePage}>
				<HeaderContact to="/">
					<HeaderLogo>
						<Logo
							width="100%"
							height="100%"
							preserveAspectRatio="xMidYMid meet"
							$isHomePage={isHomePage}
						/>
					</HeaderLogo>
		    	</HeaderContact>
				<HeaderNav $isOpen={isMobileMenuOpen}>
					<HeaderLink to="/" onClick={closeMobileMenu} $isHomePage={isHomePage}>
						Home
					</HeaderLink>
					<HeaderLink to="/services" onClick={closeMobileMenu} $isHomePage={isHomePage}>
						Services
					</HeaderLink>
					<HeaderLink to="/people" onClick={closeMobileMenu} $isHomePage={isHomePage}>
						People
					</HeaderLink>
					<HeaderLink to="/insights" onClick={closeMobileMenu} $isHomePage={isHomePage}>
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
