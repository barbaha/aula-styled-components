import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    height: 100px;
    background-color: #afd8f0;
    margin-top: 0;
    display: flex;
    justify-content: space-around;

`;

export const Logo = styled.div`
    width: 30%;
    display: flex;
    padding: 1% 0;

    img{
        width: 70px;
        height: 70px;
    }

    h1{
        margin: 2% 3%;
        font-size: 30px;
        color: #0c1c36;
    }
`;

export const Opcoes = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    width: 30%;
    flex-direction: row;
    align-items: center;

    li{
        margin: 0 10%;
    }

`;