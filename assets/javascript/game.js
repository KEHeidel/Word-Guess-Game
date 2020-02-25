var Authors = [
  "William Shakespeare",
  "Ernest Hemingway",
  "Jane Austen",
  "Victor Hugo",
  "Ray Bradbury",
  "Edgar Allan Poe",
  "JRR Tolkien",
  "Oscar Wilde",
  "Robert Frost",
  "Kurt Vonnegut"
];

var Randomauthor = "";

var begininggame = [];

var wordletters = [];

var guessedletters = [];

var guessindex = 1;

var numberguesses = 10;

var finalanswer = [];

var score = 0;

function randomauthgen(displaytext) {
  document.querySelector("#word").innerHTML = displaytext;
  guessindex = 0;
  guessedletters = [];
  numberguesses = 10;
  begininggame = [];
  var randomnumber = Math.floor(Math.random() * Authors.length);
  Randomauthor = Authors[randomnumber];
  wordletters = Randomauthor.split("");
  for (var i = 0; i < wordletters.length; i++) {
    if (wordletters[i] == " ") {
      begininggame.push("&nbsp");
      wordletters[i] = "&nbsp";
    } else {
      begininggame.push("_");
    }
  }
  console.log("begininggame: " + begininggame);
  console.log("wordletters: " + wordletters);
}

randomauthgen("Press any key to begin!");

document.onkeyup = function(event) {
  var userkey = event.key.toUpperCase();
  document.querySelector("#word").innerHTML = begininggame.join(" ");
  if (guessindex > 1) {
    // document.querySelector("#word").innerHTML = begininggame.join(" ");
    if (guessedletters.indexOf(userkey) === -1) {
      if (
        wordletters.indexOf(userkey) === -1 &&
        wordletters.indexOf(userkey.toLowerCase()) === -1
      ) {
        guessedletters.push(userkey);
        numberguesses--;
        if (numberguesses == 0) {
          randomauthgen("Incorrect");
        }
      } else {
        for (var i = 0; i < wordletters.length; i++) {
          if (userkey === wordletters[i].toUpperCase()) {
            begininggame[i] = wordletters[i];
            // if (JSON.stringify(begininggame) == JSON.stringify(wordletters)) {
            //   score++;
            //   randomauthgen("Correct");
            // }
          }
        }
        if (JSON.stringify(begininggame) == JSON.stringify(wordletters)) {
          score++;
          randomauthgen("Correct");
        }
        else {
          document.querySelector("#word").innerHTML = begininggame.join(" ");
        }
      }
    }
  }
  // document.querySelector("#word").innerHTML = begininggame.join(" ");
  document.querySelector("#numberguesses").innerHTML = numberguesses;
  document.querySelector("#score").innerHTML = score;
  document.querySelector("#lettersguessed").innerHTML = guessedletters;

  console.log("begininggame: " + begininggame);
  console.log("wordletters: " + wordletters);

  guessindex++;
};
