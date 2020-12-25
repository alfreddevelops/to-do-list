$(function () {
    // console.log("js working");
    $(".addButton").on("click", addItem);
    $(".check").on("click", checkItem);
})

function addItem() {

    var itemName = document.getElementById("inputBox").value;
    // console.log(itemName);

    // create template with elements
    const template = `
        <div class="itemContainer" id="itemContainer">
            <li>${itemName}</li>
            <button class="check">Check</button>
        </div>
    `;
    
    // checking if there is valid item
    if (!itemName) {
        console.log("no item added");
    } else {
        var itemList = document.getElementById("itemList");
        itemList.insertAdjacentHTML("afterbegin", template);
    }
}

function checkItem() {
    // console.log("item checked");
    
}
