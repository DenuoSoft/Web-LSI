import styled from "styled-components";
import { fadeInX} from "../../styles/animation";
import { fluidTypography } from "../../styles/fluidTypography";


export const ServiceBlock = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
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
  ${fluidTypography({max: 18, min: 14})}
`
export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  font-size: 1.6rem;
`
