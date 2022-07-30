import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
  ${({ theme }) => css`
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: ${theme.font.size.regular};
    margin-bottom: 10px;
  `}
`;

const Form = styled.form`
  ${({ theme }) => css`
  min-height: 30rem;
  min-width: 40rem;
  max-width: 50rem;
  margin:1rem auto;
  background:#FFF;
  border-radius: 0.5rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  overflow:hidden;
  border:1px solid #ccc;
  background: ${theme.color.white};
  `}
`;

const LButton = styled.button`
    ${({ theme }) => css`
        width: 50%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 10px;
        font-size: ${theme.font.size.regular};
        background-color: ${theme.color.white};
        color: ${theme.color.black};
        margin-top: 10px;
        cursor: pointer;
        &:hover { 
            background-color: ${theme.color.vividGreen};
            color: ${theme.color.white};
            transition-duration: 0.4s;
        }
        &:disabled { 
            cursor: not-allowed;
            background-color: red;

        }
    `}
`;

const NButton = styled.button`
    ${({ theme }) => css`
        margin-bottom: 25px;
        width: 50%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 10px;
        font-size: ${theme.font.size.regular};
        background-color: ${theme.color.white};
        color: ${theme.color.black};
        margin-top: 10px;
        cursor: pointer;
        &:hover {
            background-color: ${theme.color.vividGreen};
            color: ${theme.color.white};
            transition-duration: 0.4s;
        }
        &:disabled { 
            cursor: not-allowed;
            background-color: red;

        }
    `}
`;

const Paragraph = styled.p`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.font.size.regular};
        color: ${theme.color.vividRed};
        margin-top: 30px;
        margin-bottom: 30px;
    `}
`;

const Header2 = styled.h2`
    ${({ theme }) => css`
        margin-bottom: 17px;
        text-align: center;
        font-size: ${theme.font.size.regular};
        color: ${theme.color.black};
        margin-top: 30px;
    `}
`;

const Image = styled.img`
            ${({ theme }) => css`
                margin: 3rem auto;
                width: 10%;
                height: 10%;
                object-fit: cover;
                border-radius: 10px;
                border: 1px solid ${theme.color.vividGreen};
                align-self: center;
            `}  
        `;

const ShowPassword = styled.input`
            ${({ theme }) => css`
                width: 10%;
                height: 10%;
                object-fit: cover;
                border-radius: 10px;
                border: 1px solid ${theme.color.vividGreen};
                align-self: center;
            `}
        `;
export { Input,
  Container,
  Form, LButton,
  NButton,
  Paragraph,
  Header2,
  Image,
  ShowPassword };
