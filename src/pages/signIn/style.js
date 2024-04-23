import styled from "styled-components";
import backgroundImg from "../../assets/singUp.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const Form = styled.form`
    max-width: 340px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 140px;


    > h1 {
        color: #FF859B;
        font-size: 48px;
    }

    > p {
        color: #CAC4CF;
        font-size: 14px;
    }

    > h2 {
        color: #F4EDE8;
        font-size: 24px;

        margin: 48px 0;
    }

    > a {
        text-decoration: none;
        font-size: 16px;
        color: #FF859B;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        
        margin-top: 42px;
    }

    > button {
        margin-top: 24px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;