import styled from '@emotion/styled';

export const List = styled.ul`
width: 500px;
text-align: center;
list-style: none;
border: 2px solid #0000000;
border-radius: 10px;
margin: 0 auto;
`;

export const Item = styled.li`
margin-bottom: 20px;
`;

export const Text = styled.p`
margin-right: 10px;
`;

export const Button = styled.button`
margin-left: 20px;
width: 100px;
heiht: 30px;
border: 1px solid rgb(60, 58, 58);
border: none;
border-radius: 10px;

:hover,
:focus {
    background-color: rgb(255, 121, 62);
    color: #fff;
    border-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}
`;