//planning functions
//Function1  Save notes
//when clicked on the the save button the function stores the note in an array


//Function2  to cancel note
//when clicked on the cancel button
//the function should clear up the text area

//Function to open side menu
//when a user clicks on the button
//opens the side menu and shows the list of notes already created
var notesarr = []
function opensidebar(){
    document.getElementById("sidebar").style.width = "300px";
    
}

//function to close sidebar
function closesidebar(){
    document.getElementById("sidebar").style.width = "0px";
}

// function to turn dark mode on when clicked
const checkbox = document.getElementById("checkbox")


checkbox.addEventListener("change",function darkmode(){
    const main= document.getElementById("main")
    main.classList.toggle("dark");

    const side= document.getElementById("sidebar")
    side.classList.toggle("dark");

    document.body.classList.toggle("dark")

    const nav = document.getElementById("navbar")
    nav.classList.toggle("dark");

    const footer = document.getElementById("footer")
    footer.classList.toggle("dark");

    const btn1 = document.getElementById("open")
    btn1.classList.toggle("dark");

    const btn2 = document.getElementById("close")
    btn2.classList.toggle("dark");

    const btn3 = document.getElementById("addnotes")
    btn3.classList.toggle("dark");

    const txtbtn1 = document.querySelector(".txtbtn1" )
    txtbtn1.classList.toggle("dark");

    const txtbtn2 = document.querySelector(".txtbtn2" )
    txtbtn2.classList.toggle("dark");
  }
);
 
