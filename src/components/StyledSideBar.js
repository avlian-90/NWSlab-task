import styled from "styled-components";

export const StyledSidebar = styled.div`
    h1 {
        margin: 50px 30px;
    }
    ul {
        list-style-type: none;
        li {
            margin: 20px 0;
            font-size: 20px;
            cursor: pointer;
        }
        .active {
            color: blue;
        }
    }
`