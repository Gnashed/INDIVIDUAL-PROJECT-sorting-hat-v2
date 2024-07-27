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

const createStudent = () => {
  const availableHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  
  const assignHouse = (array) => {
    const houseIndex = Math.floor((Math.random() * array.length) + 1);
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
  const studentForm = document.querySelector('form');

  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createStudent();
    studentForm.reset();
  });
};

const startApp = () => {
  renderCards(student);
};

startApp();
events();
