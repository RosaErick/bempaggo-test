import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-size:border-box;
}

body{
    background: #8A2BE2;
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
}

.form-options{
display:flex;
gap:20px;

}

.text-area-box{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
}

.text-area-box textarea{
width:300px!important;
height:70px!important;
padding:10px;

}


.button-box{
width:100%;
height:50px;
display:flex;
justify-content:end;
align-items:flex-end;
padding: 10px;

}

.send-button{
margin:10px 20px;
padding:10px 20px;
border: 1px solid transparent;
background-color:#2e3575;
color:#fff;
font-weight:bold;
border-radius:10px;


}

@media screen and (max-width:800px){
 section{
width:80vw!important;

 }

}   


 `;

export default GlobalStyle;
