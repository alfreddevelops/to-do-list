$(function () {

})

function newItem() {
  // console.log("item added");
  var li = document.createElement("li");
  var item = document.getElementById("myInput").value;
  var text = document.createTextNode(item);

  li.appendChild(text);

  var span = document.createElement("span");
  var button = document.createTextNode("check");
  span.setAttribute("id", "check")
  span.appendChild(button);

  if (!item) {
    alert('Please key in an item');
    console.log("no item added")
  } else {
    document.getElementById("item").appendChild(li);
    document.getElementById("item").append(span);
    console.log(`${item} added to list`);

    function clearInput() {
      document.getElementById('myInput').value == "";
      counter();
    }
  }
}

var myList = document.querySelector("ol");
myList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
    console.log('item deleted');
  }
}, false);

