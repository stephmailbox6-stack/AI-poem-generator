function myPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let newPoemElement = document.querySelector("#poem-generator-form");
newPoemElement.addEventListener("submit", myPoem);
