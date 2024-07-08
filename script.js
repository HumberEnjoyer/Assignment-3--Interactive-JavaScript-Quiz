

/*display and hide attribute*/
const getStarted = document.querySelector(".get_Started");
const mainQuiz = document.querySelector(".main_Quiz");
const questionAnswers = document.querySelector(".question_Container")
const finalScore = document.querySelector(".final_Score");
const progressBar = document.querySelector(".progress_Bar")
/*buttons */
const startButton = document.querySelector("#startBTN");
const optionButtons = document.querySelectorAll(".option");
const checkButton = document.querySelector(".Submit");
const nextButton = document.querySelector(".next_Question");
const finishButton = document.querySelector(".finish_Quiz");
const restartButton = document.querySelector("#restartBTN");
const quitButton = document.querySelectorAll(".quit_Quiz");
/*variables to manipulate innerText*/
let myScore = document.querySelector(".my_Score");
let totalScore = document.querySelector(".total_Score");
let scoreText = document.querySelector(".display_Score h3");
let currentQuestion = document.querySelector(".current_Question");
let totalQuestions = document.querySelector(".total_Questions");

/*initial declaration*/
let displayQuiz;
let calculateProgress;
let selectedButton;
let selectedButtonIndex;
let correctAnswerButton;
let correctButtonIndex;
let scorePercent;
const wrongAnswerGif = document.getElementById("wrong-answer-gif");
let wrongAnswerCount = 0;
/*quiz questions*/
const quizes = [
    {
        question: "What is a group of unicorns known as?",
        options: ["A herd", "A shimmer", "A crowd", "A rainbow"],
        answers: 1,
    },
    {
        question: "Where were fortune cookies invented?",
        options: ["China", "Japan", "USA", "France"],
        answers: 1,
    },
    {
        question: "What is the fear of fun called?",
        options: ["Phobophobia", "Cherophobia", "Hilarophobia", "Funophobia"],
        answers: 1,
    },
    {
        question: "Which country invented ice cream?",
        options: ["USA", "Italy", "France", "China"],
        answers: 3,
    },
    {
        question: "Which animal sleeps the most?",
        options: ["Sloth", "Cat", "Koala", "Bat"],
        answers: 2,
    },
    {
        question: "Where is it illegal to frown at cows?",
        options: ["Australia", "Canada", "USA", "UK"],
        answers: 2,
    },
    {
        question: "Which ancient people invented the toothbrush?",
        options: ["Romans", "Egyptians", "Greeks", "Africans"],
        answers: 1,
    },
    {
        question: "What is the national animal of Scotland?",
        options: ["Horse", "Bull", "Unicorn", "Lion"],
        answers: 2,
    },
    {
        question: "What famous comedian was once a farmhand in Indiana?",
        options: ["Bill Murray", "Steve Martin", "Jim Carrey", "Eddie Murphy"],
        answers: 0,
    },
    {
        question: "What did Alfred Hitchcock fear?",
        options: ["Birds", "Heights", "Eggs", "Clowns"],
        answers: 2,
    },
    {
        question: "In the quirky town of Boring, the pairing with another differently named town is known as what?",
        options: ["Boring and Interesting", "Boring and Exciting", "Boring and Dull", "Boring and Vivid"],
        answers: 2,
    },
    {
        question: "What did the ancient Romans use as a mouthwash?",
        options: ["Saltwater", "Vinegar", "Wine", "Urine"],
        answers: 3,
    },
    {
        question: "What does a turophile love?",
        options: ["Cars", "Turtles", "Cheese", "Tower"],
        answers: 2,
    },
    {
        question: "In the Pac-Man video game, what is the name of the pink ghost?",
        options: ["Blinky", "Pinky", "Inky", "Clyde"],
        answers: 1,
    },
    {
        question: "In what month are the most ice cream cones sold in the U.S.?",
        options: ["July", "June", "August", "September"],
        answers: 2,
    },
    {
        question: "What vegetable was originally purple?",
        options: ["Potato", "Carrot", "Onion", "Cabbage"],
        answers: 1,
    },
    {
        question: "How do you say 'The Pizza' in French?",
        options: ["La Pizza", "Le Pizza", "L'Pizza", "Li Pizza"],
        answers: 0,
    },
    {
        question: "What fruit is most eaten in the world?",
        options: ["Apples", "Bananas", "Oranges", "Strawberries"],
        answers: 1,
    },
    {
        question: "Which country has the most tornadoes by area?",
        options: ["USA", "Australia", "Canada", "United Kingdom"],
        answers: 3,
    },
    {
        question: "What does the 'J' stand for in Donald J. Trump?",
        options: ["James", "Jack", "John", "Joseph"],
        answers: 2,
    },
    {
        question: "What color is a giraffe's tongue?",
        options: ["Pink", "Blue", "Black", "Yellow"],
        answers: 2,
    },
    {
        question: "In which year did Microsoft release Windows 95?",
        options: ["1994", "1995", "1996", "1997"],
        answers: 1,
    },
    {
        question: "Why was Google originally called 'Backrub'?",
        options: ["It aimed to relieve stress from internet users", "It related to checking backlink data", "Their dog liked back rubs", "Sounds better than 'Front Rub'"],
        answers: 1,
    },
    {
        question: "What do you call a group of flamingos?",
        options: ["A flock", "A colony", "A flamboyance", "A guild"],
        answers: 2,
    },
    {
        question: "Who was London's famous serial killer?",
        options: ["Jack the Clipper", "Jack the Slipper", "Jack the Tripper", "Jack the Ripper"],
        answers: 3,
    },
    {
        question: "Where would you find a car's prindle?",
        options: ["On the wheels", "Behind the engine", "Under the car", "On the dashboard"],
        answers: 3,
    },
    {
        question: "The first hockey pucks used in early outdoor hockey games were made of what?",
        options: ["Rubber", "Wood", "Frozen cow dung", "Ice"],
        answers: 2,
    },
    {
        question: "In what country were the first potatoes fried and served as French fries?",
        options: ["America", "France", "Belgium", "Germany"],
        answers: 2,
    },
    {
        question: "Which band wrote the famous song 'Stairway to Heaven'?",
        options: ["Led Zeppelin", "Queen", "Pink Floyd", "The Beatles"],
        answers: 0,
    },
    {
        question: "In which city would you find people referred to as 'Liverpudlians'?",
        options: ["Liverpool", "York", "London", "Birmingham"],
        answers: 0,
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Perth", "Canberra"],
        answers: 3,
    },
    {
        question: "How many zeros are there in a googol?",
        options: ["100", "1,000", "10,000", "1,000,000"],
        answers: 0,
    },
    {
        question: "What is a dot above a lowercase 'i' or 'j' called?",
        options: ["A pearl", "A dot", "A gem", "A tittle"],
        answers: 3,
    },
    {
        question: "What’s the technical term for hashtag?",
        options: ["Ticktag", "Quadnote", "Octothorpe", "Poundshizzle"],
        answers: 2,
    },
    {
        question: "In what country would you find the world’s most ancient forest?",
        options: ["China", "USA", "Australia", "Brazil"],
        answers: 2,
    },
    {
        question: "What is Homer Simpson's middle name?",
        options: ["Jay", "Bob", "Fred", "Carl"],
        answers: 0,
    },
    {
        question: "Who has a restaurant called 'The Fat Duck'?",
        options: ["Jamie Oliver", "Gordon Ramsay", "Nigella Lawson", "Heston Blumenthal"],
        answers: 3,
    },
    {
        question: "What animal classification is a turtle?",
        options: ["Amphibian", "Reptile", "Mammal", "Bird"],
        answers: 1,
    },
    {
        question: "In what year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        answers: 2,
    },
    {
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: ["Christian Bale", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        answers: 2,
    },
    {
        question: "How many players are there in a rugby team?",
        options: ["11", "12", "15", "20"],
        answers: 2,
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answers: 3,
    },
    {
        question: "Who wrote Pride and Prejudice?",
        options: ["Emily Bronte", "Virginia Woolf", "Jane Austen", "Harper Lee"],
        answers: 2,
    },
    {
        question: "Where was the first Subway restaurant located?",
        options: ["Los Angeles", "New York", "Las Vegas", "Bridgeport, Connecticut"],
        answers: 3,
    },
    {
        question: "From which language did English borrow the word 'piano'?",
        options: ["Spanish", "Italian", "French", "German"],
        answers: 1,
    },
    {
        question: "What color are aircraft black boxes?",
        options: ["Black", "Orange", "Red", "Blue"],
        answers: 1,
    },
    {
        question: "Which mammal has no vocal cords?",
        options: ["Gorillas", "Giraffes", "Elephants", "Dolphins"],
        answers: 1,
    },
    {
        question: "How did the Frisbee get its name?",
        options: ["From Frisbee Baking Company", "The inventor's name was Frisbee", "It flew like a bird called 'Frisbee'", "Random Generation"],
        answers: 0,
    },
    {
        question: "What is the most common letter in the English language?",
        options: ["A", "E", "I", "T"],
        answers: 1,
    },
    {
        question: "The fear of number 13 is called?",
        options: ["Triskaidekaphobia", "Arachnophobia", "Claustrophobia", "Agoraphobia"],
        answers: 0,
    },
    {
        question: "What is the first element on the periodic table?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
        answers: 3,
    },
    {
        question: "What kind of food is Monterey Jack?",
        options: ["Fruit", "Vegetable", "Meat", "Cheese"],
        answers: 3,
    },
    {
        question: "What mammal can fly?",
        options: ["Ostrich", "Penguin", "Bat", "Squirrel"],
        answers: 2,
    },
    {
        question: "What film did Steven Spielberg win his first Oscar for Best Director?",
        options: ["E.T.", "Jaws", "Schindler's List", "Jurassic Park"],
        answers: 2,
    },
    {
        question: "What species can live on both water and land?",
        options: ["Amphibians", "Birds", "Mammals", "Insects"],
        answers: 0,
    },
    {
        question: "What element is denoted by the chemical symbol S?",
        options: ["Strontium", "Silicon", "Silver", "Sulfur"],
        answers: 3,
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Venus", "Mercury", "Saturn"],
        answers: 2,
    },
    {
        question: "The Statue of Liberty was gifted to the United States by which country?",
        options: ["Germany", "Russia", "France", "UK"],
        answers: 2,
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Seville", "Madrid", "Valencia"],
        answers: 2,
    },
    {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        answers: 2,
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Tulip", "Rose", "Chrysanthemum", "Cherry Blossom"],
        answers: 3,
    },
    {
        question: "What is the world's largest ocean?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answers: 2,
    },
    {
        question: "What's the world's smallest country?",
        options: ["Monaco", "Vatican City", "Malta", "San Marino"],
        answers: 1,
    },
    {
        question: "What is a baby rabbit called?",
        options: ["Pup", "Kit or Kitten", "Cub", "Kid"],
        answers: 1,
    },
    {
        question: "Which planet spins in the opposite direction to all the others in our solar system?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answers: 1,
    },
    {
        question: "What do you call a shape with five sides?",
        options: ["Triangle", "Quadrilateral", "Hexagon", "Pentagon"],
        answers: 3,
    },
    {
        question: "What bird is associated with delivering babies?",
        options: ["Stork", "Dove", "Sparrow", "Swan"],
        answers: 0,
    },
    {
        question: "Which country produces the most chocolate?",
        options: ["Switzerland", "Belgium", "USA", "Ivory Coast"],
        answers: 3,
    },
    {
        question: "Which bird has the largest wingspan?",
        options: ["Eagle", "Albatross", "Vulture", "Flamingo"],
        answers: 1,
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        answers: 0,
    },
    {
        question: "What vegetable is known to help you see in the dark?",
        options: ["Carrot", "Sweet potato", "Spinach", "Onion"],
        answers: 0,
    },
    {
        question: "Who painted the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
        answers: 1,
    },
    {
        question: "What's the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answers: 1,
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answers: 2,
    },
    {
        question: "Where did pizza originate?",
        options: ["America", "France", "Italy", "Belgium"],
        answers: 2,
    },
    {
        question: "Who was the oldest actor to receive an Academy Award?",
        options: ["Jack Nicholson", "Christopher Plummer", "Clint Eastwood", "Robert De Niro"],
        answers: 1,
    },
    {
        question: "What is the world's largest desert?",
        options: ["Sahara", "Arabian", "Antarctic", "Gobi"],
        answers: 2,
    },
    {
        question: "What game features the terms love, deuce, match and volley?",
        options: ["Cricket", "Basketball", "Tennis", "Football"],
        answers: 2,
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answers: 2,
    },
    {
        question: "In what country would you find the Great Pyramid of Giza?",
        options: ["Italy", "India", "Egypt", "Greece"],
        answers: 2,
    },
    {
        question: "Who is known as the 'Father of Geometry'?",
        options: ["Pythagoras", "Euclid", "Archimedes", "Newton"],
        answers: 1,
    },
    {
        question: "What is the smallest bone in the human body called?",
        options: ["Hyoid Bone", "Stapes", "Metatarsal Bone", "Ulna"],
        answers: 1,
    },
    {
        question: "What animated character says 'What's up, doc'?",
        options: ["Mickey Mouse", "Daffy Duck", "Donald Duck", "Bugs Bunny"],
        answers: 3,
    },
    {
        question: "What is the rarest blood type?",
        options: ["A negative", "B positive", "O positive", "AB negative"],
        answers: 3,
    },
    {
        question: "What famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
        answers: 3,
    },
    {
        question: "What is the main ingredient in Hummus?",
        options: ["Potatoes", "Chickpeas", "Lentils", "Kidney beans"],
        answers: 1,
    },
    {
        question: "In Greek mythology, who turned all that he touched into gold?",
        options: ["Zeus", "Midas", "Hercules", "Theseus"],
        answers: 1,
    },
    {
        question: "Which bird is known as a symbol of peace?",
        options: ["Dove", "Swan", "Sparrow", "Eagle"],
        answers: 0,
    },
    {
        question: "What is the most translated book in the world?",
        options: ["The Holy Bible", "The Quran", "The Da Vinci Code", "War and Peace"],
        answers: 0,
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Mount Kilimanjaro", "Denali"],
        answers: 0,
    },
    {
        question: "Who wrote the novel 'Moby Dick'?",
        options: ["Ernest Hemingway", "Mark Twain", "Herman Melville", "J.D. Salinger"],
        answers: 2,
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answers: 1,
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Madame Curie", "Alice Munro", "Malala Yousafzai", "Rosalind Franklin"],
        answers: 0,
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
        answers: 2,
    },
    {
        question: "What fruit is dried to produce raisins?",
        options: ["Apples", "Grapes", "Peaches", "Plums"],
        answers: 1,
    },
    {
        question: "What color do you get when you mix blue and yellow?",
        options: ["Green", "Purple", "Brown", "Black"],
        answers: 0,
    },
    {
        question: "Who created the character Sherlock Holmes?",
        options: ["Mark Twain", "Edgar Allan Poe", "Charles Dickens", "Arthur Conan Doyle"],
        answers: 3,
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["Africa", "North America", "Europe", "Asia"],
        answers: 3,
    },
    {
        question: "Which is the longest running TV show?",
        options: ["The Simpsons", "Friends", "Seinfeld", "Grey's Anatomy"],
        answers: 0,
    }
];

//helper function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // select 5 random questions from the quiz array
  const selectRandomQuestions = (questions, num = 5) => {
    return shuffleArray(questions).slice(0, num);
  };

// Add the Lottie animation
const lottieContainer = document.getElementById('lottie-animation');
let lottieAnimation;

const loadLottieAnimation = () => {
  lottieAnimation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '1720377769218.json'
  });
};

const playLottieAnimation = () => {
  lottieContainer.style.display = 'block';
  lottieAnimation.goToAndPlay(0, true);
  setTimeout(() => {
    lottieContainer.style.display = 'none';
  }, lottieAnimation.getDuration(true) * 1000); 
};

document.addEventListener('DOMContentLoaded', loadLottieAnimation);

/*manipulate styles*/
  //disabled the button
const disableButton = (button) => {
  button.setAttribute("disabled", "");
  button.style.cursor = "auto";
}
  //enable the button
const enableButton = (button) => {
  button.removeAttribute("disabled", ""); 
  button.style.cursor = "pointer";
};

//remove background color of every option button
const removeBackgroundStyle = () => {
  optionButtons.forEach(eachButton => {
    eachButton.style.backgroundColor = "";
  });
};

const optionClicked = (button) => {
  selectedButton = button;
  removeBackgroundStyle();
  //when any option button is clicked change button to this
  button.style.backgroundColor = "rgba(240, 238, 138, 0.29)";
  //when any option is clicked enable the check answer button
  enableButton(checkButton);
}


  
/*function to update progress bar*/
const updateProgressBar = () => {
  calculateProgress = ((currentQuestion.textContent - 1) / totalQuestions.textContent)*100;
  progressBar.setAttribute("value", calculateProgress);
}

/* process functions*/
const startQuiz = () => {
  getStarted.style.display ="none";
  disableButton(checkButton);
  
  //select 5 random questions
  selectedQuestions = selectRandomQuestions(quizes);

  //set total questions to be length of selected questions
  totalQuestions.innerText = selectedQuestions.length;
  //display quiz container
  mainQuiz.style.display = "inline";
  question.innerText = selectedQuestions[0].question;
  //loop through each button and display the options text in correct order
  for(i = 0; i < optionButtons.length; i++) {
    optionButtons.item(i).innerText = selectedQuestions[0].options[i]
  }
  //increase current question count from 0 to 1
  currentQuestion.innerText++;
}


const checkAnswer = () => {
    //if current question is the last question execute this:
    if(currentQuestion.textContent >= selectedQuestions.length) {
      //hide next question and display finish quiz button
      nextButton.style.display="none"
      checkButton.style.display="none"
      finishButton.style.display = "inline"
    } else {
      //if not the last question hide check answer button and display next button
      checkButton.style.display = "none";
      nextButton.style.display="inline";
    };
    selectedButton.style.backgroundColor = "rgba(255,0, 26, 0.3)"
    displayAnswer();
   
    //add score depending on if answered correctly
    addScore();
    //disable each option button
    optionButtons.forEach(eachButton => {
      disableButton(eachButton)
    });
  };
  
  const displayAnswer = () => {
    //find out the correct answer button where it matches answer in selectedQuestions array
    correctAnswerButton = document.querySelector(`[data-index="${selectedQuestions[currentQuestion.textContent-1].answers}"]`)
    //find the correct answer button index
    correctButtonIndex = selectedQuestions[currentQuestion.textContent-1].answers
    //change the corect answer button color
    correctAnswerButton.style.backgroundColor = "rgba(40,247,40,0.3)";
  }
  

const addScore = () => {
  //find index of the selected button
  selectedButtonIndex = selectedButton.getAttribute("data-index")
  //if the selected button is the correct answer
  if(selectedButtonIndex == correctButtonIndex) {
    myScore.innerText++;
    scorePercent = (myScore.textContent / totalQuestions.textContent) * 100
    playLottieAnimation();
  //if not the correct answer
  } else {
     wrongAnswerCount++;
     if (wrongAnswerCount == 2) {
       wrongAnswerGif.style.display = "block";
       setTimeout(() => {
         wrongAnswerGif.style.display = "none";
       }, 3000);
     }
   }
  //if score percentage is less than 50
  if(scorePercent < 50 || myScore.textContent == 0) {
    scoreText.innerText = 'I mean, you could have done better'
  //if score percentage is more than or equal to 50
  } else {
    scoreText.innerText = "Not bad!"
  }
};

const nextQuestion = () => {
    //display main quiz content
    mainQuiz.style.display = "inline";
    nextButton.style.display = "none";
    checkButton.style.display = "inline";
    currentQuestion.innerText++;
    // disable check answer button
    disableButton(checkButton);
    //update progress bar
    updateProgressBar();
  
    // set question to be the correct question form selectedQuestions array
    question.innerText = selectedQuestions[currentQuestion.textContent - 1].question;
    for(i = 0; i < optionButtons.length; i++) {
      optionButtons.item(i).innerText = selectedQuestions[currentQuestion.textContent - 1].options[i]
    }
  };
  
//reset
const restartQuiz = () => {
  myScore.innerText = 0;
  currentQuestion.innerText = 0;
  
  //enable each option button and remove backgound color
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
    removeBackgroundStyle(eachButton)
  });
  //display check answer button, hide finish quiz button and final score content
  checkButton.style.display = "inline";
  finishButton.style.display="none";
  finalScore.style.display="none";
  updateProgressBar();
  startQuiz();
}


/*buttons event listeners*/
startButton.addEventListener("click", startQuiz);
checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", () => {
  // go to the next question remove background color and enable all options button
  nextQuestion();
  removeBackgroundStyle();
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
  })
});

//when finish quiz button is clicked
finishButton.addEventListener("click", () => {
 
  //display final score content and hide main quiz content
  finalScore.style.display = 'flex';
  mainQuiz.style.display = "none";

  totalScore.innerText = totalQuestions.textContent;
})

//when restart button is clicked
restartButton.addEventListener("click", restartQuiz);

//loop over quit quiz buttons
quitButton.forEach(button => {
  // when quit quiz button is clicked
  button.addEventListener("click", () => {
    //display get started content hide main quiz and final score content
    getStarted.style.display ="flex";
    mainQuiz.style.display="none";
    finalScore.style.display="none";
    //refresh page
    location.reload();
  })
});