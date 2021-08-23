function display() {
  var local = new Date().toLocaleString(),
    theTest = document.getElementById("test");
  alert("Current Date: " + local);
  theTest.innerHTML =
    "<span style='font-weight:bold'>Current Date: </span>  <span>" +
    local +
    "</span>";

  var yourchoice = prompt("enter the color of the date ");
  if (yourchoice === "r") {
    theTest.innerHTML =
      "<span style='font-weight:bold'>Current Date: </span>  <span style='color:red'>" +
      local +
      "</span>";
  } else if (yourchoice === "b") {
    theTest.innerHTML =
      "<span style='font-weight:bold'>Current Date: </span>  <span style='color:blue'>" +
      local +
      "</span>";
  } else if (yourchoice === "g") {
    theTest.innerHTML =
      "<span style='font-weight:bold'>Current Date: </span>  <span style='color:green'>" +
      local +
      "</span>";
  } else {
    theTest.innerHTML =
      local +
      "&nbsp; &nbsp; &nbsp;    you don't choose one of the blue  , red , green colors ";
  }
}
