import { memo } from 'react';
import {
	ContactLink,
	ContentBlock,
	FooterBlock,
	//	FooterContact,
	FooterLink,
	FooterWrap,
	ItemsBlock,
	ItemsLinks,
	//	ItemsText,
	ItemsTitle,
	LinksBlock,
	WhatsAppIcon,
	//RightsBlock,
} from './Footer.styled';

export const Footer = memo(() => {
	return (
		<FooterBlock>
			<FooterWrap>
				<ContentBlock>
					<ItemsBlock>
						<ItemsTitle>© 2026 Denuo</ItemsTitle>
						<ItemsLinks>
							<ItemsTitle>Legal notices</ItemsTitle>
							<ItemsTitle>Contact us</ItemsTitle>
						</ItemsLinks>
					</ItemsBlock>
					<ItemsBlock>
						<ContactLink>
							<WhatsAppIcon />
							<div>+975 123 45 67</div>
						</ContactLink>
					</ItemsBlock>
					<ItemsBlock>
						<LinksBlock>
							<FooterLink to="/">LinkedIn</FooterLink>
						</LinksBlock>
					</ItemsBlock>
				</ContentBlock>
			</FooterWrap>
		</FooterBlock>
	);
});
