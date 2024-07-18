import styled from 'styled-components'

export const Button = styled.button`

width:200px;
height:60px;
background-color:${props => props.backgrounClour};
& :hover{background-color:bisque;}

`

// export const BlueButton = styled.button`

// width:200px;
// height:60px;
// background-color:blue;
// & :hover{background-color:bisque;}

// `

// export const RedButton = styled.button`

// width:200px;
// height:60px;
// background-color:red;
// & :hover{background-color:bisque;}

// `