//create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput')// storing nameInpout element as variable
    const name = nameInput.value.trim() // gets trimmed value of input
    
    
    namesArray.push(name) // gets names array and adds name that was added by user
    displayNames() //call displayNames function to update the list

    nameInput.value = ''// takes the nameInput and deletes it after the user enters it
}

//displayes the names every time you enter an input - builds brand new list everytime input is entered
// puts inputs in ul as list items
function displayNames(){
    const nameList = document.getElementById("nameList")
    nameList.innerHTML='' // clears out previous list items

//each time it goes through the loop the entire list is deleted and recreated
// for loop - given a certain condition  (do something until the end terminator - untill it is less than the amount of input)
// loop every time it runs goes up by one - rason for of i++  i stands for INCREMENT / INDEX COUNTER OF THE LOOP
    for (let i = 0; i < namesArray.length; i++) {//i++ adds value of one
        const name =  namesArray[i]// lets access each mname on array ass you go through loop

        const li = document.createElement('li') // uses js to create html element - li
        li.className = "list-group-item" // styled name in list
        
        const span = document.createElement('span') // uses js to create html element - span
        span.textContent = name

        li.appendChild(span) // adds a span tag nested inbetween each li tag would look like: <li><span> name</span> </li>
        nameList.appendChild(li) // adds li tag nested inbetween ul(nameList)


    }

}





document.getElementById('addNameBtn').addEventListener('click', addName)
// goes to btn by id - addnamebtn and adds an event listener of click  and runs addName function (for syntax dont add () after function) 

// goes to btn by id - addnamebtn and adds an event listener of keypress when enter key is pressed it uses it as an event listener
document.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.key ? event.key : ''

    if(event.key === 'Enter') {
      // call click function of the buttonn 
      addNameBtn.click();
    }
      
  });


function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    // generates rndm name from namesArray and 
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]

    randomNameDiv.textContent = randomName
//removes the random number
    namesArray.splice(randomNumber, 1)


    displayNames()
    
// adds confetti after clicking rndm btn
    confetti({
        particleCount: 300,
        spread: 200
      });


}



// event listener to select and display rndm name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)