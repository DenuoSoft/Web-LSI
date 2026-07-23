// В файле с Logo компонентом
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';
import { useState } from 'react';
import type { LogoProps } from '../models/logo-model';

const LogoWrapper = styled.div<{ $isHomePage: boolean }>`
    display: inline-block;
    height: 100%;
    width: auto;
  
    --logo-main-color: ${props => props.$isHomePage ? '#c8d2e6' : '#555A69'};
    --logo-accent-color: ${props => props.$isHomePage ? '#c8d2e6' : '#8237FF'};
    --logo-hover-color: #8237FF;
    
    @media (max-width: ${breakpoints.lg}) {
        --logo-main-color: #555A69;
        --logo-accent-color: #8237FF;
    }
    
    svg {
        display: block;
        height: 100%;
        width: auto;
    }
    
    .logo-main-color {
        fill: var(--logo-main-color);
        transition: fill 0.3s ease;
    }
    
    .logo-accent-color {
        fill: var(--logo-accent-color);
        transition: fill 0.3s ease;
    }
    
    .logo-accent-color-hover {
        fill: var(--logo-hover-color);
        transition: fill 0.3s ease;
    }
`;

export const Logo = ({ $isHomePage = true, ...props }: LogoProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <LogoWrapper $isHomePage={$isHomePage}>
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 90.63 26.87"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                <title>logo</title>
                <path
                    className="logo-main-color"
                    d="M62.91,26.87a7.17,7.17,0,0,0,5.64-2.46l.13,0v1.94h2.37V11.13H68.68v5c0,5.48-1.42,8.34-5.77,8.34s-5.62-2.86-5.62-8.34v-5H54.92v4.44C54.92,24.69,57.86,26.87,62.91,26.87ZM45.07,10.63a7.17,7.17,0,0,0-5.64,2.46l-.13,0V11.13H36.93V26.37H39.3v-5c0-5.49,1.42-8.34,5.77-8.34s5.62,2.85,5.62,8.34v5h2.37V21.93C53.06,12.8,50.13,10.63,45.07,10.63Zm36.78,0c-5.12,0-8.8,3.35-8.8,8.12s3.68,8.12,8.8,8.12,8.78-3.35,8.78-8.12S87,10.63,81.85,10.63Zm0,13.87c-3.83,0-6.33-2.27-6.33-5.75S78,13,81.85,13s6.32,2.26,6.32,5.75S85.68,24.5,81.85,24.5Zm-55.59,0c-3.4,0-5.71-1.66-6-4.92H34.73c0-.29,0-.61,0-1.2,0-4.4-3.37-7.75-8.49-7.75S17.77,14,17.77,18.75s3.37,8.12,8.49,8.12c4.12,0,7.12-1.83,8.19-5.44H32C31.55,23,29.66,24.5,26.26,24.5Zm0-11.5c3.4,0,5.55,1.61,6,4.2H20.34C20.82,14.61,22.86,13,26.26,13ZM7.08,11.13H0V26.37H7.08c7,0,9.23-3.42,9.23-7.62S14.11,11.13,7.08,11.13Zm6.64,7.62c0,3-1.53,5.25-7.08,5.25H2.37V13.5H6.64C12.19,13.5,13.72,15.79,13.72,18.75Z"
                />
                <polygon
                    className={isHovered ? "logo-accent-color-hover" : "logo-accent-color"}
                    points="25.02 8.84 27.5 8.84 31.2 0 28.72 0 25.02 8.84"
                />
            </svg>
        </LogoWrapper>
    );
}