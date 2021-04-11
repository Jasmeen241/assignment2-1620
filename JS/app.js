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
// function to add text area and save and cancel buttons
function addnotes() {
    const check = document.querySelector(".addnotes")
    if (check == null){
        const main = document.getElementById("main");
        const txtarea = document.createElement('textarea' );
        txtarea.className = "addnotes";
        const bintxt =document.createTextNode("your text goes here");

        txtarea.appendChild(bintxt);
        main.appendChild(txtarea);

        const save = document.createElement('button' );
        save.className= "txtbtn1"
        const btntxt = document.createTextNode("save");

        save.appendChild(btntxt);
        main.appendChild(save);

        const dltbtn = document.createElement('button' );
        dltbtn.className= "txtbtn2"
        const dlttxt = document.createTextNode("delete");

        dltbtn.appendChild(dlttxt);
        main.appendChild(dltbtn);
        
        //removing text area and buttons
        const removetxt= document.querySelector(".txtbtn2")
        removetxt.addEventListener("click",function(e){
            main.removeChild(txtarea)
            main.removeChild(save)
            main.removeChild(dltbtn)
        })
        const savenote = document.querySelector(".txtbtn1")
        savenote.addEventListener("click",function(s){

            if(txtarea.value!=="your text goes here"){
                var length = notesarr.length + 1
                var notenum = "note" + length.toString()
                notesarr.push({title:notenum,body: txtarea.value})
              
                //adding notes to navbar

                const titlebtn = document.createElement("button")
                titlebtn.className= "titlebtns"
                const titlebtntxt = document.createTextNode(notenum)
                titlebtn.appendChild(titlebtntxt);
                sidebar.appendChild(titlebtn)
                main.removeChild(txtarea)
                main.removeChild(save)
                main.removeChild(dltbtn)

                const display= document.querySelector(".titlebtns")

                display.addEventListener("click",function(d){
                var notenum = display.innerHTML[4]
                var displaynum = parseInt(notenum)-1

                var displaytext =(notesarr[displaynum].body)

                var displaynote = document.createElement('textarea' );
                displaynote.className = "addnotes";
                var notetxt =document.createTextNode(displaytext);

                displaynote.appendChild(notetxt);
                main.appendChild(displaynote);

                var cancelbtn  = document.createElement("button");
                var cancelbtntxt = document.createTextNode("cancel");
                cancelbtn.className= "txtbtn2";
                
                cancelbtn.appendChild(cancelbtntxt);
                main.appendChild(cancelbtn);

                //removing displayed note

                var removedisplay = document.querySelector(".txtbtn2")
                console.log(removedisplay)
                removedisplay.addEventListener("click",function(remove){

                    main.removeChild(displaynote)
                    main.removeChild(cancelbtn)
                })

                })

            }
        })
    
    }


}




 
