import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./components/card.js";
import { expelledCard } from "./components/expelledCard.js";
import { student, expelled_student } from "./data/sampleData.js";

const renderCards = (array) => {
  let cards = '';

  array.forEach((obj) => {
    cards += card(obj);
  });

  renderToDom('#render-students-here', cards);
};

const renderExpelledStudents = (expelledArray) => {
  let cards = '';

  expelledArray.forEach((obj) => {
    cards += expelledCard(obj);
  });

  renderToDom('#render-expelled-students-here', cards);
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
    imageUrl: 'https://loremflickr.com/320/200/girl-from-harry-potter',
    isExpelled: false
  };

  student.push(newStudent);
  renderCards(student);
};

const events = () => {
  // FORM
  const studentForm = document.querySelector('form');

  // To render students
  const parentElementForCards = document.querySelector('#render-students-here');


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

  parentElementForCards.addEventListener('click', (e) => {
    // Check 'e.target.id' includes the string 'delete'.
    if (e.target.id.includes('delete')) {
      // Split the array. Store the number in a variable. This will be the id.
      const [ , id] = e.target.id.split('--');
      // Check the student array to find the object. Compare its id to the id we destructured above. Store the result of the comparison.
      const index = student.findIndex(obj => obj.id === Number(id));
      // Push the object to expelled_student array before deleting it.
      expelled_student.push(student[index]);
      // Remove the student from the student array.
      student.splice(index, 1);
      // Render the updated array.
      renderCards(student);
      // Render the expelled students.
      renderExpelledStudents(expelled_student);
    }
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
  renderExpelledStudents(expelled_student);
};

startApp();
events();
