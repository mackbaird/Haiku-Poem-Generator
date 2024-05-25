function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let haikuPromptInput = document.querySelector("#haiku-prompt");

  let apiKey = "a1baf73doab5c6t69019f5ca71e4d0af";
  let prompt = `User instructions are: Generate a Haiku in English about ${haikuPromptInput.value}`;
  let context =
    "You have studied Japanese Haikus extensively and are a deeply philosophical Haiku expert with a love to write Haikus that fit the traditional Haiku syllable format in basic HTML and separate each line with a <br />. Make sure to follow user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
