import type {ReactNode} from 'react';
import {ButtonBlock, ButtonText} from './RoundButton.styled';

interface RoundButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const RoundButton = ({children, onClick}: RoundButtonProps) => {
	return (
		<ButtonBlock onClick={onClick}>
			<ButtonText>{children}</ButtonText>
		</ButtonBlock>
	);
};
