import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-size:border-box;
}

body{
    background: #8A2BE2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.form-container{
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
gap:10px;


h2{
justify-self:flex-start;
align-self:flex-start;
padding: 0 20px 10px 20px;
font-size:18px;
line-height:22px;

}

}


.form-row{
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    align-items: center;
    cursor:pointer;
    
}

.form-options{
display:flex;
gap:30px;
width:250px;

}

.text-area-box{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
}

.text-area-box textarea{
width:300px!important;
height:40px!important;
padding:10px;

}


.button-box{
width:100%;
height:50px;
display:flex;
justify-content:end;
align-items:flex-end;
padding: 0 10px;
margin-bottom:10px;

}



@media screen and (max-width:470px){
 section{
width:85vw!important;

 }

 .text-area-box textarea{
width:200px!important;
height:65px!important;
padding:10px;
margin-top:5px;

}

}   
 `;

export default GlobalStyle;
