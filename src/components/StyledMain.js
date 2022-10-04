import styled from "styled-components";

export const StyledMain = styled.div`
    padding: 50px;
    div {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        div {
            width: 20%;
    
            img {
                width: 100%;
                height: 300px;
            }
        }
    }
    button {
        width: 20%;
        height: 40px;
        cursor: pointer;
        margin-top: 50px;
        font-size: 20px;
    }
`