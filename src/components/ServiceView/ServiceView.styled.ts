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
  color: #555a69;
`
export const ServiceListBlock = styled.div`
color: #555a69;
`
export const ServiceList = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;
list-style: none;
  padding: 0;
  margin: 0;
${fluidTypography({max: 18, min: 14})}
`
export const ServiceListItem = styled.li`
  position: relative;
  padding-left: 24px;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: #555a69; 
  }
`