'use strict';
//define variable:
const pollBtn = document.querySelector('.poll');

//assign function to button

const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),
  registerNewAnswer() {
    //get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    //register answer
    if (!isNaN(answer) && answer < this.numberOfVotes.length && answer >= 0)
      this.numberOfVotes[answer]++;
    else alert('Your answer is not accepted');

    //display result each time click answer
    this.displayRsults();
    this.displayRsults('string');
  },
  displayRsults(type = 'array') {
    if (type === 'array') {
      console.log(`${this.numberOfVotes}`);
    } else if (type === 'string') {
      console.log(`Poll answer is ${this.numberOfVotes.join(', ')}`);
    }
  },
};
//bind the function so we can use "this" as a poll
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//Test data
// Test data 1: [5, 2, 3]
// Test data 2: [1, 5, 3, 9, 6, 1]
poll.displayRsults.call({ numberOfVotes: [5, 2, 3] }, 'string');
poll.displayRsults.call({ numberOfVotes: [5, 2, 3] }, 'array');
poll.displayRsults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayRsults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, 'array');
