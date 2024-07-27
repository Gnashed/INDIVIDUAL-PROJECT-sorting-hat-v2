import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./components/card.js";
import { student, expelled_student } from "./data/sampleData.js";

const renderCards = (array) => {
  let cards = '';

  array.forEach((obj) => {
    cards += card(obj);
  });

  renderToDom('#render-students-here', cards);
};

const filterStudents = (array, filter) => {
  const filteredArray = [];

  array.forEach(student => {
    if (student.house === filter) {
      filteredArray.push(student);
    }
  });

  renderCards(filteredArray);
  return filteredArray;
};

const createStudent = () => {
  const availableHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  
  const assignHouse = (array) => {
    const houseIndex = Math.floor((Math.random() * array.length) + 1);
    // console.log('House Index: ', houseIndex);
    return array[houseIndex];
  };

  const newStudent = {
    id: student.length + 1,
    name: document.querySelector('#student-name').value,
    house: assignHouse(availableHouses),
    imageUrl: 'https://loremflickr.com/320/200/girl-from-harry-potter'
  };

  student.push(newStudent);
  renderCards(student);
};

const events = () => {
  // FORM
  const studentForm = document.querySelector('form');

  // Filter Buttons
  const gryffindorFilterBtn = document.querySelector('.gryffindor-filter');
  const hufflepuffFilterBtn = document.querySelector('.hufflepuff-filter');
  const ravenclawFilterBtn = document.querySelector('.ravenclaw-filter');
  const slytherinFilterBtn = document.querySelector('.slytherin-filter');
  const clearFilterBtn = document.querySelector('.clear-filter');

  // Events
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createStudent();
    studentForm.reset();
  });

  gryffindorFilterBtn.addEventListener('click', () => {
    filterStudents(student, 'Gryffindor');
  });
  hufflepuffFilterBtn.addEventListener('click', () => {
    filterStudents(student, 'Hufflepuff');
  });
  ravenclawFilterBtn.addEventListener('click', () => {
    filterStudents(student, 'Ravenclaw');
  });
  slytherinFilterBtn.addEventListener('click', () => {
    filterStudents(student, 'Slytherin');
  });
  clearFilterBtn.addEventListener('click', () => {
    renderCards(student);
  });
};

const startApp = () => {
  renderCards(student);
};

startApp();
events();
