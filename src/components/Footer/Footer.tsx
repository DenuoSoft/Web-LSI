import {
	ContentBlock,
	FooterBlock,
	FooterLink,
	FooterWrap,
	ItemsBlock,
	ItemsText,
	ItemsTitle,
	LinksBlock,
	RightsBlock,
} from './Footer.styled';

export const Footer = () => {
	return (
		<FooterBlock>
			<FooterWrap>
				<ContentBlock>
					<ItemsBlock>
						<ItemsTitle>Contact:</ItemsTitle>
						<ItemsText>
							Unit No. 31–44, <br />
							Central Park Towers,
							<br /> DIFC Dubai, United Arab Emirates
						</ItemsText>
					</ItemsBlock>
					<ItemsBlock>
						<ItemsTitle>Quick links:</ItemsTitle>
						<LinksBlock>
							<FooterLink to="/services">Services</FooterLink>
							<FooterLink to="/people">People</FooterLink>
							<FooterLink to="/artcles">Artiles</FooterLink>
							<FooterLink to="/alerts">Alerts</FooterLink>
						</LinksBlock>
					</ItemsBlock>
					<ItemsBlock>
						<ItemsTitle>Legal:</ItemsTitle>
						<FooterLink to="/policy">Privacy Policy</FooterLink>
						<FooterLink to="/terms">Terms & Conditions</FooterLink>
						<FooterLink to="/cookie">Cookie Policy</FooterLink>
						<FooterLink to="/legal">Legal Notice</FooterLink>
					</ItemsBlock>
				</ContentBlock>

				<RightsBlock>
					© 2025 Legal Services International. All rights reserved.
				</RightsBlock>
			</FooterWrap>
		</FooterBlock>
	);
};
