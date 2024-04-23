import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;
`;

export const Main = styled.main`
    width: 100%;
    max-width: 1137px;
    margin: 0 auto;
    padding: 50px 0 0;

    .intro {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: 40px;

        button {
            width: 207px;

            a {
                text-decoration: none;
            }
        }

        h1 {
        font-size: 32px;
        color: #FFF;
        }
    }

    .overflow {
    overflow: hidden;
    overflow-y: scroll;
    }

    .overflow::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
    border-radius: 10px;
    }

    .overflow::-webkit-scrollbar-thumb{
        background-color: #FF859B;
        border-radius: 10px;
    }

    section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    max-width: 1137px;
    max-height: 716px;

    padding: 5px 0 200px;

    nav {

        max-height: 222px;

        .content {
            background: rgb(255, 133, 155, 10%);
            padding: 32px;

            border-radius: 16px;

            h1 {
                padding-bottom: 8px;

                font-size: 24;
                font-weight: bold;
                color: #FFF;
            }

            p {
                padding: 25px 0;
                color: #999591;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .tags {
            display: flex;
            gap: 8px;
        }
    }

    }
`;
