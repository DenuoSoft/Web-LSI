import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import image from '../../assets/img/dubai-2.webp';

export const HomeBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	height: 100%;
	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
	}
`;
export const HomeTextBlock = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
    gap: 2.4rem;
    @media (max-width: ${breakpoints.lg}) {
		width: 100%;
		
	}
    
`;
export const HomeLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
	width: 26rem;
	padding: 0.4rem 0.8rem;
    background-color: rgba(85, 90, 105, 0.2);
    border-radius: 0.4rem;
    font-size: 1.2rem;
    color: #555a69;
`;
export const StarsBlock = styled.div`
    display:flex;
    align-items: center;
    gap: 0.4rem;     
`
export const Stars = styled.img`
    width: 1.2rem;
    height: 1.2rem;

`
export const LabelText = styled.div`
    display: flex;
    align-items: center;
`
export const HomeText = styled.p`
	text-align: justify;
	font-size: clamp(1.6rem, 2vw + 0.5rem, 2.4rem);
	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
		font-size: clamp(1.2rem, 3vw + 0.5rem, 1.8rem);
	}
`;
export const ImgBlock = styled.div`
	width: 50%;
	height: 50%;
	background-image: url(${image});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	position: relative;
	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
		height: 300px;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
export const HomeImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
