function printResults(){
  var userText = document.getElementById('userInput').value;
  var totalWords = 0;
  var totalSentences = 0;
  totalWords = totalWords + 1
  for (var i = 0; i <userText.length; i++){
    if (userText[i] === ' '){
      totalWords++;
    }
    else if (userText[i] === '.' || userText[i] === '?' || userText[i] === '!'){
      totalSentences++;
    }
        document.getElementById("userResults").innerHTML="There are " + totalWords + " words in this text.";
        document.getElementById("totalSentences").innerHTML="There are " +totalSentences + " sentences in this text.";
}}
