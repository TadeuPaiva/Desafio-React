import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    
    > header {
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        background-color: rgb(255, 133, 155, 10%);
        
        a {
            color: #FF859B;
            font-size: 18px;
            margin-left: 144px;
            text-decoration: none;

            display: flex;
            gap: 5px;
        }
    }
`;

export const Form = styled.div`
    max-width: 340px;

    margin: 64px auto 0;

    > button {
        margin-top: 24px;
    }

    > div:nth-child(4) {
        margin-top: 20px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -140px auto 32px;
    width: 186px;
    height: 186px;
/* colocando o mesmo tamanho nos 2, centralizou a img */

    > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
    }

    > label {
        width: 48px;
        height: 48px;

        background: #FF859B;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;

        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            height: 20px;
            width: 20px;
            color: #312E38;
        }
    }
`;