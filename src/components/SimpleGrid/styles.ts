import styled from "styled-components";
import { media } from "../../styles/Breakpoints";

const GridBasic= styled.div`
    padding: 0px 20px;
    @media ${media.sm} {
        margin: 0px 150px;
    }
    @media ${media.md} {
        margin: 0px 200px;
    }
    @media ${media.lg} {
        margin: 0px 320px;
    }
`;

const GridExtended = styled.div`
    padding: 0px 10px;
    @media ${media.sm} {
        margin: 0px 100px;
    }
    @media ${media.md} {
        margin: 0px 150px;
    }
    @media ${media.lg} {
        margin: 0px 250px;
    }
`;

export { GridBasic, GridExtended };
