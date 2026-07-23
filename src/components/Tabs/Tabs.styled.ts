import styled from 'styled-components';
import {Theme} from '../../models/theme';

export const TabsWrap = styled.div`
   display: flex;
   gap: 3rem;
`

export const TabsBlock = styled.div<{theme: Theme}>`
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
    gap: 1rem;
    width: 20rem;
	/* border-right: 1px solid ${({theme}) => theme.colors.borderColor}; */
`;
export const TabsItem = styled.div<{ theme: Theme, $isActive: boolean}>`
	display: flex;
	justify-content: center;
	padding: 1.5rem 0;
	font-size: var(--text-size-14px);
	cursor: pointer;
	color: ${({$isActive, theme}) =>
		$isActive ? theme.colors.accentColor : theme.colors.textColor};
	text-transform: uppercase;
    background-color: ${({$isActive, theme}) =>
    $isActive ? theme.colors.activeColor : ''};
            
	
	&:hover {
		color: ${({theme}) => theme.colors.accentColor};
		background-color:  ${({ theme }) => theme.colors.activeColor};
        
	}
	
`;

export const TabContent = styled.div`
	display: flex;
    flex: 1;
    justify-content: center;
	align-items: flex-start;
`;
