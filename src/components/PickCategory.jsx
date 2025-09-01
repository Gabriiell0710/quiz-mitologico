import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Grecia from "../assets/mit_grega.png";
import Nordica from "../assets/mit_nordica.png";
import Egipcia from "../assets/mit_egipcia.png";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  const categories = ["Grega", "Nórdica", "Egípcia"];

  return (
    <div id="category">
      <div className="tex-content">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das mitologias abaixo:</p>
        {categories.map((cat) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(cat)}
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div id="images">
        <img
          className="image"
          src={Grecia}
          alt="Mitologia Grega"
          onClick={() => chooseCategoryAndReorderQuestions("Grega")}
        />
        <img
          className="image"
          src={Nordica}
          alt="Mitologia Nórdica"
          onClick={() => chooseCategoryAndReorderQuestions("Nórdica")}
        />
        <img
          className="image"
          src={Egipcia}
          alt="Mitologia Egípcia"
          onClick={() => chooseCategoryAndReorderQuestions("Egípcia")}
        />
      </div>
    </div>
  );
};

export default PickCategory;
