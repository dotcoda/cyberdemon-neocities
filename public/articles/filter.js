filterSelection("all")
function filterSelection(c) {
  document.getElementById('filterMessage').innerHTML = 'Currently showing articles tagged as <span>' + c + '</span>';

  var x = document.getElementsByClassName('entry');
  var anyVisible = false;

  if (c === 'all') c = '';
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('show');
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.add('show');
      anyVisible = true;
    }
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
