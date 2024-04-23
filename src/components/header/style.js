import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 64px;

    padding: 24px 123px;

    background: #312E38;

    border-bottom: 1px solid;
    border-color: #948F99;

    h1 {
        font-size: 24px;
        color: #FF859B;
        font-weight: bold;
    }
`;

export const User = styled(Link)`
    display: flex;
    gap: 10px;

    > .user-info {
        font-size: 14px;
        
        h2 {
            color: white;
        }

        p {
            color: #948F99;
            text-align: end;
        }
    }

    > img {
        border-radius: 50%;
        width: 64px;
        height: 64px;
    }
`;