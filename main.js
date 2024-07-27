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
    array.forEach((house) => {
      const houseIndex = Math.random() * array.length;
      console.log(houseIndex);
      return houseIndex;
    })
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
  });
};

const startApp = () => {
  renderCards(student);
};

startApp();
events();
