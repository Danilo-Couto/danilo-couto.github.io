import styled from 'styled-components';

export const FinishOrder = styled.p`
  ${({ theme }) => `
    // color: ${theme.color.vividGreenStrong};
    padding-top: 2%;
    padding-left: 20%;
    padding-bottom: 2%;
    font-size: ${theme.font.size.large}`}
`;

export const DivFinishOrdBttn = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const FinishOrderBttn = styled.button`
  ${({ theme }) => `
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: ${theme.font.size.regular};
    background-color: ${theme.color.vividGreen};
    color: ${theme.color.black};
    margin-top: 10px;
    cursor: pointer;
    &:hover { 
        background-color: ${theme.color.vividGreenDark};
        color: ${theme.color.white};
        transition-duration: 0.4s;
      }
      &:disabled { 
        cursor: not-allowed;
        background-color: red;
      } 
  `}
`;

export const DetailsAndAddressContainer = styled.div`
  padding-left: 20%;
`;

export const DetailsAndAddress = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.large};
    padding-bottom: 3%;
  `}
`;

export const InputLabelContainer = styled.div`
  display: inline-block;
  padding-left: 25px;
`;

export const Label = styled.label`
  ${({ theme }) => `
    font-size: ${theme.font.size.xsmall}`};
`;

export const AddressInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  height: 40px;
  width: 550px;
`;

export const NumberInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  height: 40px;
  width: 250px;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}
::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}    
`;

export const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  height: 40px;
  width: 250px;
`;
