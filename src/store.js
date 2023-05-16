import { createStore } from 'redux';

const initialState = {
  score: 0,
  currentQuestionIndex: 0,
  questions: [
    {
      text: 'When did Ukraine declare independence?',
      choices: ['1974', '1802', '1991', '2013'],
      answer: '1991',
    },
    {
      text: 'Which is the capital of Ukraine?',
      choices: ['Kharkiv', 'Kiev', 'Lviv', 'Kyiv'],
      answer: 'Kyiv',
    },
    {
      text: 'Which is the longest river in Ukraine?',
      choices: ['Nile', 'Donets', 'Dnipro', 'Dniester'],
      answer: 'Dnipro',
    },
    {
      text: 'Which is the currency of Ukraine?',
      choices: ['Euro', 'Hryvnya', 'Zloty', 'Mark'],
      answer: 'Hryvnya',
    },
    {
        text: 'Which is the official language of Ukraine?',
        choices: ['German', 'Polish', 'Latin', 'Ukrainian'],
        answer: 'Ukrainian',
      },
      ],
};

// Define your reducer function
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + 1 };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(quizReducer);

export default store;