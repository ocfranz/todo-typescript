import styled from "styled-components";

const CalendarWrapper = styled.div`
    width: 100%;
`;
const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CalendarDaysName = styled.div`
    display: flex;
`;

const CalendarDate = styled.div<{ opacity: boolean}>`
    width: calc(100% / 7);
    text-align: center;
    padding : 10px 0px;
    opacity : ${props => props.opacity ? '0.5' : "1"};
`;

export { CalendarWrapper, CalendarHeader, CalendarDaysName, CalendarDate };
