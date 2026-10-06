import type { ButtonProps } from '../../models/button-model';
import {ButtonBlock, ButtonText} from './RoundButton.styled';

export const RoundButton = ({children, onClick, variant}: ButtonProps) => {
	return (
		<ButtonBlock onClick={onClick} $variant={variant}>
			<ButtonText>{children}</ButtonText>
		</ButtonBlock>
	);
};
