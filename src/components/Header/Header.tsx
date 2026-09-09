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
import { useState, useEffect } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Logo } from '../../shared/logo';

interface NavLinkWithActiveProps extends LinkProps {
	children: React.ReactNode;
	$isHomePage?: boolean;
	onClick?: () => void;
}

const NavLinkWithActive = ({
	to,
	children,
	$isHomePage,
	onClick,
	...props
}: NavLinkWithActiveProps) => {
	const match = useMatch(typeof to === 'string' ? to : '');
	const isActive = !!match;

	return (
		<HeaderLink
			to={to}
			$isActive={isActive}
			$isHomePage={$isHomePage}
			onClick={onClick}
			{...props}
		>
			{children}
		</HeaderLink>
	);
};

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	const isHomePage = location.pathname === '/';

	// Обработчик скролла
	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = 50; // Порог в пикселях
			setIsScrolled(window.scrollY > scrollThreshold);
		};

		// Оптимизация с requestAnimationFrame
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', throttledScroll);
		};
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const navLinks = [
		{ to: '/about', label: 'About us' },
		{ to: '/services', label: 'Services' },
		{ to: '/people', label: 'People' },
		{ to: '/insights', label: 'Insights' },
	];

	return (
		<HeaderBlock $isScrolled={isScrolled}>
			<HeaderContainer 
				$isHomePage={isHomePage}
				$isScrolled={isScrolled}
			>
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
					{navLinks.map((link) => (
						<NavLinkWithActive
							key={link.to}
							to={link.to}
							onClick={closeMobileMenu}
							$isHomePage={isHomePage}
						>
							{link.label}
						</NavLinkWithActive>
					))}
				</HeaderNav>

				<MobileMenuButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
					{isMobileMenuOpen ? '✕' : '☰'}
				</MobileMenuButton>
			</HeaderContainer>
			<MobileOverlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
		</HeaderBlock>
	);
};