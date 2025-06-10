function myFunction() {
    idArray = new Array()
    idArray [1] = "buying silly little plushies"
    idArray [2] = "every eel ever"
    idArray [3] = "sleeping and being cozy"
    idArray [4] = "sweet little treats"
    idArray [5] = "my stupid game achievements"
    idArray [6] = "collecting stickers"
    idArray [7] = "spending money"
    idArray [8] = "the color pink"
    idArray [9] = "redoing my website"
    idArray [10] = "bunnies"
    idArray [11] = "weed"


  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*11);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
  }
  