import styled from "styled-components";
import { fadeInX} from "../../styles/animation";
import { fluidTypography } from "../../styles/fluidTypography";


export const ServiceBlock = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  animation: ${fadeInX} 0.5s ease-in;
  z-index: 1;
`

export const NavBack = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`
export const NavBackText = styled.span`
  color: #555a69;
  ${fluidTypography({ max: 18, min: 14 })}
  &:hover {
  color: #8237FF;
}
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
export const ServiceListBlock = styled.div`

`
export const ServiceList = styled.ul`
display: flex;
flex-direction: column;
gap: 0.5rem;

${fluidTypography({max: 18, min: 14})}
`