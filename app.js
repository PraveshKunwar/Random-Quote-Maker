fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    function buttonClick() {
      let randomArray = data[Math.floor(Math.random() * data.length)];
      document.getElementById(`quote`).innerHTML = `Quote: ${randomArray.text}`;
      document.getElementById(`author`).innerHTML = `By: ${randomArray.author}`;
    }

    buttonClick();

    document.getElementById("button").onclick = buttonClick;
  });
