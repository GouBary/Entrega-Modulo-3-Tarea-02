import { Detalles2 } from "../modules/Detalles2.js";
import { videos } from "./data.js";
const Mvideos=document.querySelector('.Todo1');
const ListadoVideos=document.querySelector('#ListadoVideos');

const Tvideos=JSON.parse(localStorage.getItem('Videosaved'));
// console.log(Tvideos)
let Cvacias=[] 
Cvacias.push(Tvideos)
Detalles2(Mvideos,Cvacias)
Detalles2(ListadoVideos,videos)
