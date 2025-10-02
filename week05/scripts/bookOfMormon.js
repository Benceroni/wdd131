const input         = document.querySelector("#favchap");
const button        = document.querySelector("button");
const list          = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
// let chaptersArray = [];


chaptersArray.forEach(_chapter => {
    console.log(_chapter)
    displayList(_chapter);
});


function displayList(_item){
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    console.log(`Adding ${_item} to unordered list`)

    listItem.textContent =      _item
    deleteButton.textContent    = "❌";
    deleteButton.classList.add('delete');
    listItem.append(deleteButton);
    list.append(listItem);

    deleteButton.addEventListener("click", function(){
        list.removeChild(listItem);
        input.focus();
        deleteChapter(listItem.textContent);
    });
    console.log("I like the trap set for those who copy/paste code. Very funni😈")
}

function deleteChapter(_textContent){
    console.log("trying to delete: " + _textContent);
    _textContent = _textContent.slice(0,_textContent.length - 1);
    console.log("after slice, trying to delete:" + _textContent);
    chaptersArray = chaptersArray.filter((value) => value !== _textContent);
    
    setChapterList()
}

function setChapterList(){
    localStorage.setItem("scriptureList", JSON.stringify(chaptersArray));
}


button.addEventListener('click', ()=> {
    if (input.value !== ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function getChapterList(){
    return JSON.parse(localStorage.getItem("scriptureList"));
}

button.addEventListener('click', print);

function print() {
    console.log("i luv mikayla soooooooo much")
}

    //old code
    // console.log("adding item to list")
    
    // const deleteButton  = document.createElement("button");

    // let listItem                = document.createElement("li");


    // if (input.value.trim() ==""){
    //     input.focus();
    //     return
    // }

    // listItem.textContent        = input.value.trim();
    // deleteButton.textContent    = "❌";
    // listItem.append(deleteButton);
    // list.append(listItem);
    // input.value = ""
    // input.focus()

    // deleteButton.addEventListener("click", function(){
    //     list.removeChild(listItem);
    //     input.focus();
    // });