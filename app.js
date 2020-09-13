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
