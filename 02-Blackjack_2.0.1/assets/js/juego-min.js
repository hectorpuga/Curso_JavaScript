const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener"),o=document.querySelector("#btnNuevo"),s=document.querySelectorAll(".divCartas"),d=document.querySelectorAll("small"),i=(t=2)=>{e=c(),l=[];for(let r=0;r<t;r++)l.push(0);d.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},c=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(`${l}${a}`);for(let n of t)for(let o of r)e.push(o+n);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:Number(t)},h=(e,t)=>(l[t]+=$(e),d[t].innerText=l[t],l[t]),f=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),s[t].append(r)},g=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("Nadie gano"):e>21?alert("Computadora gano"):t>21?alert("Jugador gano"):alert("Computadora Gano")},100)},p=async e=>{let t=0;do{let r=u();t=h(r,l.length-1),f(r,l.length-1)}while(t<e&&e<=21);g()};return a.addEventListener("click",()=>{let e=u(),t=h(e,0);f(e,0),t>21?(console.warn("Lo siento mucho perdiste"),a.disabled=!0,p(t)):21===t&&(a.disabled=!0,console.warn("21, Genial"),p(t))}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,p(l[0])}),o.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();