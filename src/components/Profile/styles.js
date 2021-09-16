import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    div {
        text-align: center;
        margin: 8px;
    }

`;

export const InfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 10px;

    h1 {
        font-size: 30px;
        font-weight: bold;
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
    }

    h4 {
        font-size: 17px;
        font-weight: bold;
    }
`;

export const Username = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    h3 {
        margin-right: 10px;
    }

    a {
        color: blue;
        font-size: 20px;
        font-wight: bold;
    }
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 170px;
    margin: 8px;
    
`;