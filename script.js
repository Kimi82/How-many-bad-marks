var submitButton = document.getElementById("submitWeight");


submitButton.onclick = function(){
    var sumbitValue = document.getElementById("submitValue").value;
    var tabValue = [];
    
    tabValue = sumbitValue.split(" ")
    console.log(tabValue);

    const input = document.getElementById("box__input");  //deleting input when it isn't need.
    input.parentNode.removeChild(input);
    const describe = document.getElementById("description");
    describe.innerText = "Now enter your marks in right fields bellow";

    var howManyFields = tabValue.length-1;
    
    createField(howManyFields, tabValue);
} 


function createField(howManyFields, tabValue){
    console.log(howManyFields+1, "How may fields ") // how many fields need to create.

    for(var i=0; i<=howManyFields; i++){

        

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
        button.setAttribute("id", `doneButtons${i}`)
        input.setAttribute("id", `doneInputs${i}`)
        title1.innerText = `Height: ${tabValue[i]}` 
        title2.innerText = "Marks added:";
        title3.innerText = "Add your marks here:";
        button.innerText = "Done!";

        container.appendChild(title1);
        container.appendChild(title2);
        container.appendChild(title3);
        container.appendChild(input);
        container.appendChild(button);

        

        const placeForNewField = document.querySelector("body > div > div.container2");
        
       // document.body.insertBefore(container, placeForNewField);
       placeForNewField.appendChild(container);

    takeButton(howManyFields)


    }

    function takeButton(howManyFields){
        
        /*var i=0;
        
        while(i<=howManyFields){
            var inputArr = [];
           
            var inputArrValue = [];

            var buttonArr = []; //przechowuje referencje do buttonow
            buttonArr.push(document.getElementById(`doneButtons${i}`));
            i++;
            console.log(buttonArr)
        } */

        for(let i=0; i<=howManyFields;i++){
            var buttonArr = []; //przechowuje referencje do buttonow
            buttonArr.push(document.getElementById(`doneButtons${i}`)); 
            
            
        }
        console.log(buttonArr.length)
            /*
            buttonArr[i].onclick = function(){
                 //przechowuje referencje do inputow
                inputArr.push(document.getElementById(`doneInputs${i}`))
            }
            
            inputArrValue.push(document.getElementById(`doneInputs${i}.value`))
            console.log(inputArrValue)
            
            
            
            i++
        }
        */
    
    
     
    
       
        
      
    
        
    
    }
}
