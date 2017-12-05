function printResults(){
  var userText = document.getElementById('userInput').value;
  var totalWords = 0;
  for (var i = 0; i <userText.length; i++) {
  if (userText[i] === ' ') {
  totalWords++;
  document.getElementById("userResults").innerHTML=totalWords;
  // printResults();
    }
  }
}
