import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;

    input {
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        padding: 10px;
        font-weight: 750;
    }

    button {
        background-color: rgba(49, 136, 250, 1);
        padding: 10px 15px;
        margin: 0 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 15px;

        &:hover {
            background-color: rgba(60, 160, 255, 1);
            box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.3);
        }

        span {
            font-weight: bold;
            color: #FFFF;
        }
    }
`;