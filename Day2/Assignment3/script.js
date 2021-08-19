var yourBirth = prompt(
  "enter your Birth in this following format (DD–MM–YYYY) "
);
function checkBirth(yB) {
  if (yB.charAt(2) === "-" && yB.charAt(5) === "-" && yB.length === 10) {
    var newDate = new Date(
      parseInt(yB.substr(6, 4)),
      parseInt(yB.substr(3, 2)) - 1,
      parseInt(yB.substr(0, 2))
    );
    alert("Hi , your Date in string format is " + newDate.toLocaleString());
  } else {
    alert("Wrong Date Format");
  }
}
