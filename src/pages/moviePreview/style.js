import styled from "styled-components";

export const Container  = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        width: 85%;
        height: 581px;
        margin: 40px auto;
        color: #F4EDE8;

        overflow-y: scroll;

        a {
        color: #FF859B;
        text-decoration: none;
        }

        p {
            font-size: 18px;
            padding-right: 25px;
            margin-top: 40px;
            text-align: justify;
        }

        .tags {
            margin-top: 40px;
            display: flex;
            gap: 8px;
        }
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    color: #F4EDE8;

    > .H1 {
        display: flex;
        gap: 19px;
        align-items: center;
        margin-top: 24px;

        h1 {
            font-size: 36px;
        }
    }

    > .dados {
        margin-top: -35px;
        display: flex;
        align-items: flex-end;
        gap: 8px;
        
        img {
            width: 17px;
            height: 17px;
            border-radius: 50%;
        }

        svg {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            color: #FF859B;
        }

        p {
            font-size: 16px;
        }
    }
`;