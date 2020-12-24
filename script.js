$(function () {
  // counter();
})

// function counter() {
//   var i;
//   for (i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

function newItem() {
  // console.log("item added");
  var li = document.createElement("li");
  var item = document.getElementById("myInput").value;
  var text = document.createTextNode(item);

  li.appendChild(text);

  var n;
  for (n = 0; n < itemList + 1; n++) {
    console.log(n);
  }

  if (!item) {
    alert('Please key in an item');
    console.log("no item added")
  } else {
    document.getElementById("itemList").appendChild(li);
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

