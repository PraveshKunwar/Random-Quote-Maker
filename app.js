fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    function buttonClick() {
      let randomArray = data[Math.floor(Math.random() * data.length)];
      document.getElementById(
        `quote`
      ).innerHTML = `Quote: <i>${randomArray.text}</i>`;
      document.getElementById(`author`).innerHTML =
        randomArray.author || "<i>Unknown</i>";
      const checkStr = "Unknown";
      if (document.getElementById("author").innerText.includes(checkStr)) {
        const grabDoc = document.getElementById("anchorTags");
        return (grabDoc.innerHTML = "Couldn't search Unknown author.");
      } else {
        const grabDoc = document.getElementById("anchorTags");
        grabDoc.setAttribute(
          "href",
          `https://www.google.com/search?q=${
            document.getElementById("author").innerHTML
          }`
        );
        grabDoc.setAttribute("target", "_blank");
        grabDoc.innerHTML =
          `Search for ${document.getElementById("author").innerHTML}` ||
          "Can't search for unknown author";
      }
    }
    buttonClick();
    document.getElementById("button").onclick = buttonClick;
  });

/** Time */
function time() {
  let date = new Date();
  let dateArray = [date.getHours(), date.getMinutes(), date.getSeconds()];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  document.getElementById("Date").innerHTML = today;

  document.getElementById(
    "time"
  ).innerHTML = `${dateArray[0]}:${dateArray[1]}:${dateArray[2]}`;
}

setInterval(time, 1000);
