import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

 ${reset}
 *{
    box-sizing: border-box;
 }
 a{
    text-decoration: none;
 }
 body{
  font-family: 'Noto Sans', sans-serif; 
 }

`