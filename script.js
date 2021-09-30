const textInput = document.querySelector("#textInput");
const btnClicked = document.querySelector("#btnClicked");

const textOutput = document.querySelector("#textOutput");

console.log("working");

let responseUrl = "https://api.funtranslations.com/translate/minion.json";

btnClicked.addEventListener("click", () => {
  buttonClickHndler();
});

function buttonClickHndler(event) {
  let input = textInput.value;
  let serverUrl = `${responseUrl}?text=${encodeURI(input)}`;

  console.log(serverUrl);
  console.log("btn clicked");

  fetch(serverUrl)
    .then((response) => response.json())
    .then((json) => {
      textOutput.innerText = json.contents.translated;
    });
}
