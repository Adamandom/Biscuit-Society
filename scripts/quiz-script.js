// made by Robert Tunn

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}



const textNodes = [
  {
    id: 1,
    text: '"All warfare is based on deception" - Sun Tzu\n\nWelcome to the initiation test for our fraternity offering you the most coveted privileges on campus.\n\nDo you wish to continue?',
	options: [
      {
        text: 'Yes, I do.',
        nextText: 3
      },
      {
        text: 'Get real, fraternities are so 1980s. Begone, frat boy!',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Your name has been entered into our black book, you will never be a judge nor a politician.',
    options: [
      {
        text: 'Try again?',
        nextText: 1
      },
      
    ]
  },
  {
    id: 3,
    text: 'Your first challenge is to answer the following:\n\nWhich 9 letter word in the English language remains a word every time that a letter is removed from it?\n\nIs it:',
    options: [
      {
        text: '"Agamemnon"',
        nextText: 2
      },
      {
        text: '"Floccinaucinihilipilification"',
        nextText: 9
      },
      {
        text: '"Startling"',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Startling, Starting, Staring, String, Sting, Sing, Sin, In, I!\n\nWell done, but you are just getting started.\n\nWhat is the correct answer to this question?',
    options: [
      {
        text: 'All of the below',
        nextText: 2
      },
	  {
        text: 'None of the below',
        nextText: 2
      },
	  {
        text: 'All of the above',
        nextText: 2
      },
   	  {
        text: 'One of the above',
        nextText: 2
      },
	  {
        text: 'None of the above',
        nextText: 5
      },
	  {
        text: 'None of the above',
        nextText: 2
      },	
		
    ]
  },
  {
    id: 5,
    text: '"Two roads diverged in a yellow wood,\nAnd sorry that I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth" - Robert Frost\n\nYou come across two paths in a forest, each guarded by a sentry bot one of whom Alan Turing has programmed into being unable to say anything other than the truth and the other he has programmed to tell nothing other than the opposite of the truth.\n\nOne path leads to the next question and brings you a step closer to a life of endless privilege whilst the other leads you to an HNC in Community Studies.\n\nWhat would you do in this situation?',
    options: [
      {
        text: 'Punch both sentry bots in the CPU and demand the truth',
        nextText: 2
      },
	  {
        text: 'Ask both sentry bots what the other would say and then do the opposite',
        nextText: 6
      },{
        text: 'Ask both sentry bots if they are lying',
        nextText: 2
      },{
        text: 'Attempt to reason with the sentry bots because they appear to be thinking, therefore they must be capable of reason as they must have passed the Turing Test',
        nextText: 2
      }
    ]
  },
  {
    id: 6,
    text: 'Well done Mendicant, you have reached the penultimate question.\n\n"A liar tells the truth on Monday, Wednesday and Friday and he lies on the other days\n\nOne day the liar said: "I will tell the truth tomorrow." On which day did the liar say this?".',
    options: [
      {
        text: 'Whitsunday',
        nextText: 2
      },
	  {
        text: 'Hogmanay',
        nextText: 2
      },
	  {
        text: 'Tuesday',
        nextText: 2
      },
   	  {
        text: 'Saturday',
        nextText: 7
      },
	  {
        text: 'Sunday',
        nextText: 2
      },
	  {
        text: 'Martinmas',
        nextText: 2
      },	
    ]
  },
  {
    id: 7,
    text: "So Mendicant, little stands between you and the completion of the initiation save for the devilment of the final question which many people consider to be unsolveable. Go to it:\n\nA thief lies on six days of the week. But on one day - the same day each week - he is subject to a curse forcing him to tell the truth. On three consecutive days, he says:\n\nDay 1: I lie on Mondays and Tuesdays.\nDay 2: It's now Thursday, Saturday or Sunday. Day 3: I lie on Wednesdays and Fridays.\n\nWhich of the following is true?",
    options: [
      {
        text: 'Day 1 is Sunday and the thief speaks the truth on Wednesdays',
        nextText: 2
      },
      {
        text: 'Day 2 is Monday and the thief speaks the truth on Tuesdays',
        nextText: 8
      },
      {
        text: 'Day 3 is Tuesday and the thief speaks the truth on Thursdays',
        nextText: 2
      },
      {
        text: 'Day 2 is Saturday and the thief speaks the truth on Mondays',
        nextText: 2
      }
    ]
  },
  {
    id: 8,
    text: 'Against all odds you have reached the end of this quest which we deliberately made almost impossibly hard thinking that no one would pass it. For all your towering intellect you did not realise that ability and a sound moral character are not the key to power and only being the son of someone important or with plenty of money guarantees you anything in this world.',
    options: [
      {
        text: 'Would you like to keep trying? You may as well try, its your only option. Goodbye.',
        nextText: 1
      }
    ]
  },
  {
    id: 9,
    text: "The word has 9 letters! Floccinaucinihilipilification? Really???",
    options: [
      {
        text: 'I apologise profusely',
        nextText: 2
      }
    ]
  },
 
  
]

// entry point
startGame();
