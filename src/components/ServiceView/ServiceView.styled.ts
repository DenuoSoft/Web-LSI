import styled from "styled-components";
import { fadeInX} from "../../styles/animation";

export const ServiceBlock = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  animation: ${fadeInX} 0.5s ease-in;
`

export const NavBack = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`
export const NavBackText = styled.span`
  color: #555a69;
  font-size: clamp(1.4rem, 0.388vw + 1.654rem, 1.8rem);
`
