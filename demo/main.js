import './assets/css/main.scss'
import * as vaga from "./../src/js/main.js"

window.addEventListener("load", () => {
  var options = {
    duration: 0.5
  }
  vaga.start(options)

  document.querySelectorAll(".vhead__link").forEach(element => {
    element.addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector("#"+element.href.split("#")[1]).scrollIntoView({behavior:'smooth'})
    })
  })
})