import styled from "styled-components";

const HeadingStyled = styled.span<{ type: string }>`
    font-weight: 700;
    opacity : 0.7;
    font-size: ${(props) => (props.type === "h1" ? "30px" : "24px")};
`;
const HeadingWrapper = styled.div`
    margin: 20px 0px;
`;

export { HeadingStyled, HeadingWrapper };
