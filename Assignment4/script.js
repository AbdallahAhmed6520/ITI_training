do
{
  var Name =prompt("enter your name");
}
  while( !isNaN(Name))

  do{
      var birthyear =prompt("enter your birthyear");
  }
  while(isNaN(birthyear)&&birthyear>2010)

document.write("Name :", Name, "<br> Birthyear : ", birthyear, "<br> Age = ", 2021 - birthyear);