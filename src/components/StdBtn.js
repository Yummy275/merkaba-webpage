import styled from 'styled-components';

const StdBtn = styled.button`
    height: 3rem;
    width: ${(props) => props.width}rem;
    font-size: 1.1rem;
    border: 1px solid #273043;
    color: #273043;
    background-color: #ffeaec;
`;

export default StdBtn;
