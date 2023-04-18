import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;
width: 500px;
heiht: 200px;
border: 2px solid #0000000;
border-radius: 10px;
margin: 0 auto;
`;

export const Label = styled.label`
display: block;
text-align: center;
font-weght: 700;
`;

export const Input = styled.input`
display: block;
margin-top: 15px;
margin-bottom: 20px;
border-radius: 10px;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
padding: 3px;
width: 150px;
height: 40px;
border: none;
border-radius: 10px;
font-size: 20px:
color: rgb(60, 58, 58);

:hover,
:focus {
    background-color: rgb(255, 121, 62);
    color: #fff;
    border-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}
`;