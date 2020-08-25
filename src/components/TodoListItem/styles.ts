import styled from "styled-components";
const TodoListItemWrapper = styled.div<{ key: any }>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #686088;
    font-weight: 500;
    font-size: 18px;
    margin: 15px 0px;
    position: relative;
    cursor: pointer;
`;
const CheckBox = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%;
`;
const TodoTitleStyled = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

const TodoDateStyled = styled.div`
    width: 25%;
    text-align: right;
    opacity: 0.7;
    font-size: 16px;
`;
const TodoEstimatedStyled = styled.div`
    width: 15%;
    text-align: right;
    opacity: 0.7;
    font-size: 16px;
`;

const ButtonControls = styled.div<{ visible: boolean }>`
    margin-left: 10px;
    width: 35px;
    height: 35px;
    display: ${(props) => (props.visible ? "block" : "none")};
`;

export {
    TodoListItemWrapper,
    CheckBox,
    TodoTitleStyled,
    TodoDateStyled,
    TodoEstimatedStyled,
    ButtonControls,
};
