const baseURL = "http://api.weatherapi.com/v1/current.json?key=";
const API_KEY = "bf01ff1b48d04646a5a215645231108";

const conatiner = document.getElementById("container");

// Create a div element for displaying the data
const div = document.createElement("div");

// Create a div for loading
const loading = document.createElement("div");
loading.setAttribute("id", "loading");

// Create a label element
const label = document.createElement("label");
label.textContent = "Enter something:";
label.setAttribute("for", "myInput");

// Create an input element
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "query");
input.setAttribute("name", "query");

// Create a button element
const button = document.createElement("button");
button.textContent = "Submit"; // Set the text content of the button

// Append the button, label and input to the body of the document
conatiner.appendChild(label);
conatiner.appendChild(input);
conatiner.appendChild(div);
conatiner.appendChild(button);
conatiner.appendChild(loading);

//Getting value from the input field
button.addEventListener("click", function () {
  // Update the label's text with the input field's value
  const userInput = document.getElementById("query").value;

  // Show the loading animation before making the API request
  loading.style.display = "block";

  getWeatherData(userInput)
    .then((data) => {
      div.innerHTML = `<h2>Weather for ${data.location.name}, ${data.location.country}</h2><p>Temperature: ${data.current.temp_c}°C</p><p>Condition: ${data.current.condition.text}</p>`;
      console.log("resolved:", data);
    })
    .catch((err) => {
      console.log("rejected:", err);
    })
    .finally(() => {
      loading.style.display = "none";
    });
});

async function getWeatherData(userInput) {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=bf01ff1b48d04646a5a215645231108&q=" +
      userInput +
      "&aqi=no",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}
