//planning functions
//Function1  Save notes
//when clicked on the the save button the function stores the note in an array
const savebtn = document.getElementById('savenotes');
savebtn.addEventListener("click",function(e){
    const addnote = document.getElementsByClassName("addnotes");

    const notes = localStorage.getItem("notes");
    notesarr = []
    notesarr.push(addnote.value);
    localStorage.setItem("notes",JSON.stringify(notesarr))
    console.log(notesarr)
})

//Function2  to cancel note
//when clicked on the cancel button
//the function should clear up the text area

//Function to open side menu
//when a user clicks on the button
//opens the side menu and shows the list of notes already created

