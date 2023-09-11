let userPoints = 0;

alert("Welcome to my about me page.");

let user = prompt(
  "Hello, I'm Alex this is my 'About me' page, what is your name?"
);

while (!user) {
  user = prompt("Sorry I need you name to be able to contonue.");
}

if (user == "Alex") {
  alert("Yay! Same name as.");
}

alert("Hello " + user + " thank you for taking the time to find out about me");

alert("lets begin with a fun quiz relating to my About Me page");

// question one
let foodQuestion = prompt(
  "Who was the manager of famous scouse mop tops The Beatles?."
).toLowerCase();

let foodsILike = ["brian epstien"];

for (let i = 0; i < foodsILike.length; i++) {
  if (foodQuestion == foodsILike[i]) {
    alert("Correct, coincidently I work in a Theatre named after him");
    userPoints++;
  }
}

// question two
let musicQuestion = prompt(
  "the musicians from the Titanic that famuosly went down with her still playing were from which Philharmonic Orchestra?"
).toLowerCase();

let musicAnswer = ["Liverpool"];

for (let i = 0; i < musicAnswer.length; i++)
  if (musicQuestion == musicAnswer[i]) {
    alert("Correct, coincidently I work in a Theatre named after him");
    userPoints++;
  }

let question = prompt(
  "whilst we're talking about history, what is the oldest building in the city center of Liverpool?"
);

let answers = ["the bluecoat", 3, 4, 5];
let attempts = 5;

while (attempts > 0) {
  for (let i = 0; i < answers.length; i++) {
    if (question == answers[i]) {
      alert("That is correct, and this is where I work at the moment.");
      attempts = 0;
      userPoints++;
    }
  }
  if (attempts > 0) {
    question = prompt("Incorrect, try again.");
    attempts--;
  }
}
alert("well done you scored " + userPoints);
