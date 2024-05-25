function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["Hello", "World"],
    autostart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
