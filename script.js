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
    console.log(howManyFields, "dupa1") // how many fields need to create.

    for(var i=0; i>=howManyFields; i++){

        console.log("dupa2")

        const container = document.createElement("div");
        const title1 = document.createElement("h3");
        const title2 = document.createElement("h4");
        const title3 = document.createElement("h5");
        const input = document.createElement("input");
        const button = document.createElement("button");
        
        container.classList.add("field");
        title1.classList.add("field__title");
        title2.classList.add("field__title");
        title3.classList.add("field__subtitle");
        input.classList.add("field__input");
        button.classList.add("field__button");

        title1.innerText = "Height I TU ZMIENNA";
        title2.innerText = "Marks added:";
        title3.innerText = "Add your marks here:";
        button.innerText = "Done!";

        container.append(title1);
        container.append(title2);
        container.append(title3);
        container.append(input);
        container.append(button);

        const placeForNewField = document.getElementsByClassName("Container2");
        document.body.insertBefore(container, placeForNewField);



    }

}
