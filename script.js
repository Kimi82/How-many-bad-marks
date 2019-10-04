var submitButton = document.getElementById("submitWeight");


submitButton.onclick = function(){
    var sumbitValue = document.getElementById("submitValue").value;
    console.log(sumbitValue); //console log na to co wpisane w inputa
    var tabValue = [];
    
    tabValue = sumbitValue.split(" ")
    console.log(tabValue);
    const input = document.getElementById("box__input");  //deleting input when it isn't need.
    input.parentNode.removeChild(input);
    const describe = document.getElementById("description");
    describe.innerText = "Now enter your marks in right fields bellow";

    var howManyFields = tabValue.length;
    
    createField(howManyFields);
} 


function createField(howManyFields){
    console.log(howManyFields)

}