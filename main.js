$(function () {
    // console.log("js working");
    $(".addButton").on("click", addItem);
    $(".checkItem").on("click", checkItem);

})


function addItem() {
    $(".remove").on("click", removeItem);
    var itemName = document.getElementById("inputBox").value;

    // create template with elements
    const template = `
        <div class="itemContainer" id="itemContainer">
        <div class="checkItem">
            <p class="tick">&#10004</p>
        </div>
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

    function removeItem() {
        console.log("item removed");
    }
}

function checkItem() {
    // console.log("checked");
    $(".tick").toggleClass("checked");
}


