import styled from "styled-components";

export const TextareaDiv = styled.div`
margin-left: 300px;
margin-top: 50px;
display: flex;
`

export const TextareaInput = styled.div`
display: block;
padding: 10px;
textarea{
    width: 350px;
    height: 150px;
    outline: none;
        padding: 10px;
        font-size: 15px;
    &::placeholder{
        font-size: 15px;
    }
}
a{
    transition-duration: .5s;
    &:hover{
        text-decoration: none;
    color: #E61400;
    }
img{
    width: 20px;
}
}
`