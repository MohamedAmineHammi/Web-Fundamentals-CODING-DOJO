/* bouton shop alert */

function signIn(element) {
  alert("Your Cart is Empty!");
}

/* changing image onmouse */

function changeImage(element) {
  element.src = "assetssucculents-2.jpg";
}

function changeImage2(element) {
  element.src = "assetssucculents-1.jpg";
}

// remove the popup when clicking the accept button

function hideCookie(id) {
  var element = document.getElementById(id);
  element.remove();
}
