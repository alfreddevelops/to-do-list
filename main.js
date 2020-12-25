$(function () {
    // console.log("js working");
    $(".addButton").on("click", addItem);
    $(".remove").on("click", removeItem);
})

function addItem() {
    var itemName = document.getElementById("inputBox").value;

    // create template with elements
    const template = `
        <div class="itemContainer" id="itemContainer">
            <li>${itemName}</li>
            <button class="remove" onclick="removeItem()">&#10008</button>
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

function removeItem() {
    console.log("item removed");
    
    // removes x instead of container
    $(this).addClass("removed");
}
