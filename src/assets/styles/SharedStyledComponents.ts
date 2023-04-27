import styled from 'styled-components';

interface IProps {
    active?: boolean;
    onClick?: () => void;
}


export const Text = styled.p`
    color: #BBC0FF;
    font-size: 15px;
    font-weight: 400;
    margin: 0;
`

export const Header = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 300;
    margin: 0;
    @media only screen and (max-width: 600px){
        font-size: 24px;
    }
`

export const HourHeader = styled(Header)`
    font-size: 56px;
    margin-top: 25px;
    margin-bottom: 10px;
    @media only screen and (max-width: 600px){
        font-size: 32px;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const CategoryHeader = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    padding: 0px;
    margin: 0px;
`

export const StyledButton = styled.button<IProps>`
    color: #7078C9;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    text-transform: capitalize;

    ${({ active }) => active && `
        color: #FFFFFF;
    `}
`