function writePoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function myPoem(event) {
  event.preventDefault();

  let newTopicInput = document.querySelector("#new-instruction");
  let apiKey = "53f4f49c434fot046a20cc0f96d8ebba";
  let prompt = `User instructions: Generate a poem about ${newTopicInput.value}`;
  let context =
    "You are a popular poet and you write sweet short poems. Using basic HTML and following the user instructions, generate a four line poem, seperate them with <br />. At the bottom of the poem, sign 'yoruichi-senpai' in <strong> <i>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let myPoemElement = document.querySelector("#poem");
  myPoemElement.classList.remove("hidden");
  myPoemElement.innerHTML = `Please wait while we generate your ${newTopicInput.value} poem <span class="rotate">⏳<span/>`;

  console.log("generating poem, please wait...");
  console.log(`prompt = ${prompt}`);
  console.log(`context = ${context}`);

  axios.get(apiUrl).then(writePoem);
}

let newPoemElement = document.querySelector("#poem-generator-form");
newPoemElement.addEventListener("submit", myPoem);
