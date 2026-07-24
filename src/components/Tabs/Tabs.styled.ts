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
    width: 20rem;
	@media (max-width: ${breakpoints.sm}) {
		 width: 18rem;
		}
`;
export const TabsItem = styled.div<{$isActive: boolean}>`
	display: flex;
	width: calc(100% / 2);
	justify-content: flex-start;
	padding-bottom: 0.5rem;
	${fluidTypography({max: 20, min: 16})};
	cursor: pointer;
	color: ${({$isActive}) =>
		$isActive ? '#8237FF' : '#555a69'};
	//text-transform: uppercase;
    border-bottom: ${({$isActive}) =>
    $isActive ? '3px solid #8237FF' : ''};
    font-weight: ${({$isActive}) =>
		$isActive ? 'bold' : 'normal'};        
	
	&:hover {
		color: #8237FF;
		border-bottom: 1px solid #8237FF;
	}
`;

export const TabContent = styled.div`
	display: flex;
    flex: 1;
    justify-content: flex-start;
	align-items: flex-start;
`;
