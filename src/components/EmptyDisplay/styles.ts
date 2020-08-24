import styled from "styled-components";

const EmptyStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
    flex-direction: column;
    background-color: rgba(255,255,255,0.5);
`;
const EmptyStrong = styled.span`
    font-size: 18px;
    font-weight: bold;
    display: block;
    opacity : 0.7;
`;
const EmptyMessage = styled.span`
    display: block;
    font-size: 15px;
    opacity: 0.6;
    margin-top: 5px;
`;

export { EmptyStyled, EmptyStrong, EmptyMessage };
