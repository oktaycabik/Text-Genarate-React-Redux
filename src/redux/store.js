 import {configureStore} from "@reduxjs/toolkit" 
import  ParagrafSlice  from "./paragraf/randomParagrafsSlice"


 export const store =configureStore({
     reducer:{
         parag:ParagrafSlice
     }
 })