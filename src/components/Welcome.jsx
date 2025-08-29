import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../assets/background_home.png";
import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState);
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início doQuiz" />
    </div>
  )
}

export default Welcome