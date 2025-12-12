import {
	ContentBlock,
	FooterBlock,
	FooterContact,
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
							<FooterContact
								href="https://maps.app.goo.gl/igdU3UxCed96Yu9s6"
								target="_blank"
							>
								Unit No. 31–44, <br />
								Central Park Towers,
								<br /> DIFC Dubai, United Arab Emirates
							</FooterContact>
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
						<LinksBlock>
							<FooterLink to="/policy">Privacy Policy</FooterLink>
							<FooterLink to="/terms">Terms & Conditions</FooterLink>
							<FooterLink to="/cookie">Cookie Policy</FooterLink>
							<FooterLink to="/legal">Legal Notice</FooterLink>
						</LinksBlock>
					</ItemsBlock>
				</ContentBlock>

				<RightsBlock>
					© 2025 Legal Services International. All rights reserved.
				</RightsBlock>
			</FooterWrap>
		</FooterBlock>
	);
};
