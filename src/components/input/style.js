import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;

    background-color: #262529;
    color: #948F99;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 12px;
    
    > input {
        width: 100%;
        height: 56px;
        padding-left: 5px;
        
        background: transparent;

        outline: none;
        border: none;

        color: #F4EDE8;

        svg {
            color: #948F99;
            margin-left: 16px;
        }
    }
`;