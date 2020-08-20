import styled from 'styled-components';

const Editable = styled.div.attrs(props =>({
        contentEditable : true,
        spellCheck : false,
        onInput : props.onInput,
        placeholder : props.placeholder || "Type here"
    }))`
    max-width: 100%; 
    width: 100%; 
    outline: none;
    padding: 2px 0px;
`;

export default Editable;
