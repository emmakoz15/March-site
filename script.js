//create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput')// storing nameInpout element as variable
    const name = nameInput.value.trim() // gets trimmed value of input
    
    
    namesArray.push(name) // gets names array and adds name that was added by user
    displayNames() //call displayNames function to update the list

    nameInput.value = ''// takes the nameInput and deletes it after the user enters it
}