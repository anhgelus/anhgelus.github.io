/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root")!!;

let navbar = document.getElementById("navbar");
let animationP1 = document.getElementById("animation-p1");
let skills = document.getElementById("skills");

function intInRange(i: number, a: number, b: number) {
  return a < i && i < b;
}

function scrollAnimation() {
  if (animationP1 == null) {
    animationP1 = document.getElementById("animation-p1")!!;
  }
  if (navbar == null) {
    navbar = document.getElementById("navbar")!!;
  }
  if (skills == null) {
    skills = document.getElementById("skills")!!;
  }
  if (window.scrollY < window.innerHeight * 0.5) {
    let d = window.scrollY % window.innerHeight;
    animationP1.style.transform = `scale(${1 + d / window.innerHeight})`;
    if (window.scrollY > window.innerHeight * 0.3) {
      animationP1.classList.add("fixed");
      animationP1.classList.remove("relative");
      animationP1.style.top = "";
    }
  } else if (window.scrollY < window.innerHeight) {
    animationP1.classList.remove("fixed");
    animationP1.classList.add("relative");
    animationP1.style.top = "50vh";
  } else if (
    intInRange(
      window.scrollY,
      window.innerHeight * 1.3,
      window.innerHeight * 1.5,
    )
  ) {
    navbar.classList.remove("fixed");
    navbar.classList.add("relative");
    skills.classList.remove("pt-36");
  } else if (window.scrollY > window.innerHeight * 1.5) {
    navbar.classList.add("fixed");
    navbar.classList.remove("relative");
    skills.classList.add("pt-36");
  }
}

window.addEventListener("scroll", scrollAnimation);

render(() => <App />, root!);

// window.scrollTo({
//   top: 0,
// });

let schools = document.querySelectorAll<HTMLElement>(".school")!!;

schools.forEach((s) => {
  s.addEventListener("mousemove", (e) => {
    let offset = s.getBoundingClientRect();
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;
    const ratioX = x / offset.width;
    const ratioY = y / offset.height;
    const rotate = Math.sqrt(
      Math.pow(ratioX - 0.5, 2) + Math.pow(ratioY - 0.5, 2),
    );
    let rX = 2 * (ratioX - 0.5);
    let rZ = 2 * (ratioY - 0.5);
    if (ratioX - 0.5 < 0) {
      rZ = Math.abs(rZ);
      if (ratioY - 0.5 > 0) {
        rZ = -rZ;
      }
    }
    s.style.transition = ".2s transform";
    s.style.transform = `rotate3d(${rX},1,${rZ},${10 * rotate}deg)`;
    console.log(s.style.transform);
  });
  s.addEventListener("mouseleave", (e) => {
    e = e as MouseEvent;
    s.style.transform = "";
    s.style.transition = ".3s transform";
  });
});
