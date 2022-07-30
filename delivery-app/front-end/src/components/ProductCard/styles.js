import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  ${() => css`
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    object-position: center;
    border-decoration: none;
  `}
`;

const SButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.color.vividCyanLimeGreen};
        color: ${theme.color.vividGreen};
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: ${theme.color.vividGreenDark};
            color: ${theme.color.vividGreenDarkest};
        }
    `}
`;

const MButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.color.vividCyanLimeGreen};
        color: ${theme.color.black};
            
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: bold;  
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: ${theme.color.vividGreenDark};
            color: ${theme.color.vividCyanLimeGreen};
        }   
    `}
`;

const CheckoutButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.color.vividCyanLimeGreen};
        color: ${theme.color.black};
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: ${theme.color.vividGreenDark};
            color: ${theme.color.vividCyanLimeGreen};
        }
    `}
`;

const ButttonM = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.color.vividRed};
        color: ${theme.color.black};
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    `}
`;

export { Image, SButton, MButton, CheckoutButton, Wrapper, ButttonM };
