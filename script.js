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