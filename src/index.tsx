/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root")!!;

let animationP1 = document.getElementById("animation-p1");

function scrollAnimation() {
  if (animationP1 == null) {
    animationP1 = document.getElementById("animation-p1")!!;
  }
  if (window.scrollY < window.innerHeight) {
    let d = window.scrollY % window.innerHeight;
    animationP1.style.transform = `scale(${1 + d / window.innerHeight})`;
    if (window.scrollY > window.innerHeight * 0.6) {
      animationP1.classList.add("fixed");
      animationP1.classList.remove("relative");
      animationP1.style.top = "";
    }
  } else if (window.scrollY < window.innerHeight * 1.4) {
    animationP1.classList.remove("fixed");
    animationP1.classList.add("relative");
    animationP1.style.top = "100vh";
  }
}

window.addEventListener("scroll", scrollAnimation);

render(() => <App />, root!);

window.scrollTo({
  top: 0,
});
