import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ isNew }) => isNew ? "transparent" : "#282124"};
    color: #FF859B;

    border: ${({ isNew }) => isNew ? `1px dashed #948F99` : "none"};

    border-radius: 8px;
    padding-right: 16px;
    
    > button {
        border: none;
        background: none;
        color: #FF859B;
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: white;
        background: transparent;

        border: none;
    }   
`;