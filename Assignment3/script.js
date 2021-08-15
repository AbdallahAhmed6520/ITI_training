function promptMe(){
    var userAdjective = prompt("Please enter expression here");
    var result= eval(userAdjective);
    alert ("You entered: "+ userAdjective + " and the result is: "+ result);
}
