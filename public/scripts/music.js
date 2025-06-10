function myFunction() {
    var x = document.getElementById("demo");
    var y = document.getElementById("myAudio"); 
    var z = document.getElementById("zed").innerHTML;
    var a = document.getElementById("ah").innerHTML;
    if (x.innerHTML === a) {
      x.innerHTML = z;
      y.play(); 
    } else {
      x.innerHTML = a;
      y.pause(); 
    }
  }