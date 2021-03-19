import styled from 'styled-components';
import stdStyles from '../stdStyles';

const StdBtn = styled.button`
    cursor: pointer;
    height: 2.75rem;
    width: ${(props) => props.width}rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    border: 1px solid ${stdStyles.colors.secOne};
    border-radius: 10px;
    color: ${stdStyles.colors.secOne};
    background-color: ${stdStyles.colors.secTwo};
`;

export default StdBtn;
