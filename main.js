$(function () {
    // console.log("js working");
    $(".addButton").on("click", addItem);
    $(".checkItem").on("click", checkItem);
    $(".remove").on("click", removeItem);
})

function addItem() {
    var itemName = document.getElementById("inputBox").value;

    // create template with elements
    const template = `
        <div class="itemContainer" id="itemContainer">
        <div class="checkItem"></div>
            <input type="text" value="${itemName}"></input>
            <p>Task due:</p>
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

function checkItem() {
    // console.log("checked");
    $(".tick").toggleClass("checked");
}


function removeItem() {
    console.log("item removed");
    
    // removes x instead of container
    // $(this).addClass("removed");
}
