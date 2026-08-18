import React from "react";
import Results from "./results";

function Quiz() {
    const questionBank = [
        {
            question: "What is Mr. Watson's room number?",
            options: ["2006", "2007", "2008", "2009"],
            answer: "2009"
        },
        {
            question: "What is Mr. Watson's favorite phrase?",
            options: ["Git!", "You'll be aight.", "Bless your souls.", "All"],
            answer: "All"
        },
        {
            question: "What is Mr. Watson's most viewed YouTube video?",
            options: ["Cover of Left Side (By Eloise)", "Connor Albert - Crescent Moon Cover (One Take)", "Violet Skies - Colette Lush (Cover)", "Dangerously Easy - Olivia Dean (Cover)"],
            answer: "Dangerously Easy - Olivia Dean (Cover)"
        },
        {
            question: "Which haircut would suit Mr. Watson the best?",
            options: ["Dreads", "Low Taper Fade", "Afro", "He looks aight."],
            answer: "He looks aight."
        },
        {
            question: "What instrument does Mr. Watson play?",
            options: ["Violin", "Viola", "Piano", "Guitar"],
            answer: "Viola"
        },
        {
            question: "Which school does Mr. Watson teach at?",
            options: ["Bridgeland High School", "Cypress Ranch High School", "Jersey Village High School", "Seven Lakes High School"],
            answer: "Bridgeland High School"
        },
        {
            question: "Will Mr. Watson give me an amazing recommendation letter?",
            options: ["Yes!", "Absolutely!", "Why Not?", "All"],
            answer: "All"
        },
    ]

    const initialAnswers = [null, null, null, null, null, null, null];

    const [userAnswers, setUserAnswers] = React.useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [isQuizFinished, setIsQuizFinished] = React.useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if(currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if(isQuizFinished)
    {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>;
    }

    return <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option) => 
            <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
        )}

        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={goToNext} disabled={selectedAnswer === null}>
                {currentQuestion === questionBank.length - 1 ? "Submit" : "Next"}
            </button>
        </div>
    </div>
}

export default Quiz;