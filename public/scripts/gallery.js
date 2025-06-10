var images = [
    "img/november/november.png",
    "img/november/november2.png",
    "img/november/november3.jpg",
    "img/november/november4.png",
    "img/november/november5.png",
    "img/oct/october5.jpg",
    "img/oct/october9.jpg"


  ];
  // this chooses a random number from all available image indices
  var randomImage = images[Math.floor(Math.random() * images.length)];
  console.log(randomImage);
  // make the URL into a proper image tag
  var image = "<img src='" + randomImage + "'>";
  // append to the div
  document.getElementById("img-load").innerHTML = image;