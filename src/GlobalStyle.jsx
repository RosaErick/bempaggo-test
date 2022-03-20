import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*{
margin:0;
padding:0;
box-size:border-box;
}

body{
    background: linear-gradient(90deg,#8e2de2,#4a00e0);
}


.form-container{
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
gap:20px;

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
height:100px!important;
padding:10px;

}



 `;

export default GlobalStyle;
