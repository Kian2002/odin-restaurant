(()=>{"use strict";const e=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h1");t.textContent="WE ARE, HUMAN & COFFEE";const n=document.createElement("p");n.textContent="Our coffee products are guranteed to be 100% natural from gardening to processing the coffee beans.";const d=document.createElement("img");d.src="assets/home.png",d.alt="picture of coffee";const a=document.createElement("div");return a.classList.add("home-text"),a.appendChild(t),a.appendChild(n),e.appendChild(a),e.appendChild(d),e})())},t=(e,t,n,d)=>{const a=document.createElement("div");a.classList.add("menu-card");const c=document.createElement("img"),o=document.createElement("h1"),s=document.createElement("p");return c.src=e,c.alt=t,o.textContent=n,s.textContent=d,a.appendChild(c),a.appendChild(o),a.appendChild(s),a},n=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu"),e.appendChild(((e,t)=>{const n=document.createElement("div");n.classList.add("menu-heading");const d=document.createElement("h1"),a=document.createElement("p");return d.textContent=e,a.textContent=t,n.appendChild(d),n.appendChild(a),n})("Best Sellers","The coffees our customers love best. From dark to light, intense to bright, there's always a new cup worth experiencing."));const n="assets/paper-bag.png",d=document.createElement("div");return d.classList.add("menu-card-wrapper"),d.appendChild(t(n,"Coffee package","Regular","$39 CAD")),d.appendChild(t(n,"Coffee package","Dark","$39 CAD")),d.appendChild(t(n,"Coffee package","Surprise","$39 CAD")),e.appendChild(d),e})())},d=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("h1");return e.classList.add("contact"),e.textContent="Find our coffee at your local stores",e})())};document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("content");t.appendChild((()=>{const t=document.createElement("header");t.classList.add("header");const a=document.createElement("h1");return a.classList.add("logo"),a.textContent="C☕FFEE",t.appendChild(a),t.appendChild((()=>{const t=document.createElement("nav");t.classList.add("nav");const a=document.createElement("button");a.textContent="Home";const c=document.createElement("button");c.textContent="Menu";const o=document.createElement("button");return o.textContent="Contact",a.onclick=e,c.onclick=n,o.onclick=d,t.appendChild(a),t.appendChild(c),t.appendChild(o),t})()),t})()),t.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main"),e.id="main",e})()),t.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("h2"),n=(new Date).getFullYear();t.innerText=`Copyright ${n} © Kian2002`;const d=document.createElement("a");return d.href="https://github.com/Kian2002/odin-coffee",d.target="_blank",d.classList.add("fa-brands"),d.classList.add("fa-github"),d.classList.add("fa-xl"),e.appendChild(t),e.appendChild(d),e})()),e()})())})();