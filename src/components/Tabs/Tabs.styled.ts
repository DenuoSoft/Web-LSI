import styled from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';
import { breakpoints } from '../../styles/breakpoints';

export const TabsWrap = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 3rem;
   z-index: 1;
`

export const TabsBlock = styled.div`
	display: flex;
    gap: 5rem;
    width: 100%;
	@media (max-width: ${breakpoints.sm}) {
		 width: 18rem;
		}
`;
export const TabsItem = styled.div<{$isActive: boolean}>`
	display: flex;
	width: calc(100% / );
	justify-content: flex-start;
	padding-bottom: 0.5rem;
	${fluidTypography({max: 20, min: 16})};
	cursor: pointer;
	color: ${({$isActive}) =>
		$isActive ? '#d7ff23' : '#c8d2e6'};
	//text-transform: uppercase;
    border-bottom: ${({$isActive}) =>
    $isActive ? '3px solid #d7ff23' : ''};
    font-weight: ${({$isActive}) =>
		$isActive ? 'bold' : 'normal'};        
	
	&:hover {
		color: #d7ff23;
		border-bottom: 1px solid #d7ff23;
	}
`;

export const TabContent = styled.div`
	display: flex;
    flex: 1;
    justify-content: flex-start;
	align-items: flex-start;
`;
