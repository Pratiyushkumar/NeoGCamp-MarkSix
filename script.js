const textInput = document.querySelector("#textInput");
const btnClicked = document.querySelector("#btnClicked");
const btnClickedSecond = document.querySelector("#btnClickedSecond");
const textOutput = document.querySelector("#textOutput");

btnClickedSecond.addEventListener("click", () => {
  console.log("btn clicked");
  console.log(textInput.value);
  textOutput.innerHTML = textInput.value;
});

console.log("working");

btnClicked.addEventListener("click", () => {
  let responseUrl = "https://api.funtranslations.com/translate/yoda.json";
  let input = textInput.value;
  let serverUrl = responseUrl + "?text=" + input;
  console.log("btn clicked");
  console.log(textInput.value);
  fetch(serverUrl)
    .then((response) => response.json())
    .then((json) => {
      let output = json.contents.translated;
      textOutput.innerText = output;
    });
});
