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

renderCards(student);
