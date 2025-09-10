const input         = document.querySelector("#favchap");
const button        = document.querySelector("button");
const list          = document.querySelector("#list");






button.addEventListener('click', function() {
    console.log("adding item to list")
    
    const deleteButton  = document.createElement("button");

    let listItem                = document.createElement("li");


    if (input.value.trim() ==""){
        input.focus();
        return
    }

    listItem.textContent        = input.value.trim();
    deleteButton.textContent    = "❌";
    listItem.append(deleteButton);
    list.append(listItem);
    input.value = ""
    input.focus()

    deleteButton.addEventListener("click", function(){
        list.removeChild(listItem);
        input.focus();
    });

});

button.addEventListener('click', print);

function print() {
    console.log("i luv mikayla soooooooo much")
}