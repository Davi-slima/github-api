import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #d3d3d3;
    margin: 15px 15px;
    border-radius: 10px;
    width: 350px;
    height: 175px;
    padding: 10px;
    align-content: center;

    &:hover {
        padding: 8px;
        background-color: rgba(244, 244, 244, 1);
    }
`;

export const WrapperTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
`;

export const WrapperFullname = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0;
    color: rgb(123 123 123);
`;

export const WrapperLink = styled.a`
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0;
    color: rgba(0, 0, 255, 0.65);
`;