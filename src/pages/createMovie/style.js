import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const Main = styled.div`
    width: 100%;
    max-width: 1137px;
    margin: 0 auto;
    padding: 40px 0 85px;
    overflow-y: scroll;

    max-height: calc(100vh - 40px - 85px);

    ::-webkit-scrollbar {
        width: 8px;
        height: 90px;
        background-color: transparent;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #FF859B;
        border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: #FF859B transparent;

    a {
        color: #FF859B;
        text-decoration: none;
    }

    h1 {
        font-size: 36px;
        color: #F4EDE8;
        margin: 24px 0 40px;
    }

    .input {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    h3 {
        color: #999591;
        font-size: 20px;
        margin: 40px 0 24px;
    }

    .marcador {
        width: 100%;
        display: flex;
        gap: 24px;
        background: #0D0C0F;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 40px;
    }

    .buttons {
        display: flex;
        gap: 40px;

        #excluir {
            width: 100%;
            background: black;
            border-radius: 10px;
            color: #FF859B;
            padding: 12px 0;
        }
    }
`;
