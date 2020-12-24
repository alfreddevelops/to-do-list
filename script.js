function newItem() {
  // console.log("item added");
  var li = document.createElement("li");
  var item = document.getElementById("myInput").value;
  var text = document.createTextNode(item);

  li.appendChild(text);
  if (!item) {
    alert('Please key in an item');
    console.log("no item added")
  } else {
    document.getElementById("itemList").appendChild(li);
    console.log(`${item} added to list`);
    function clearInput() {
      document.getElementById('myInput').value == "";
    }
  }
}

var myList = document.querySelector("ul");
myList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
    console.log('item deleted');
    // console.log(`${text} deleted`);
  }
}, false);

