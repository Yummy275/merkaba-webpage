import styled from 'styled-components';

const StdBtn = styled.button`
    cursor: pointer;
    height: 2.75rem;
    width: ${(props) => props.width}rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    border: 1px solid #273043;
    color: #273043;
    background-color: #ffeaec;
`;

export default StdBtn;
