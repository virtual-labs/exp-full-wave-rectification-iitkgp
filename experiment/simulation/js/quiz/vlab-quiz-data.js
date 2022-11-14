/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "What is the Ripple factor of a fullwave rectifier ?",
            "a": [
                {"option": " 0.31  ", "correct": false},
                {"option": "0.48 ", "correct": true},
                {"option": "0.707  ", "correct": false},
                {"option": " 1.21", "correct":false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the peak applied signal voltage is V<sub>m</sub>, then for a full wave rectifier circuit(not bridge) the PIV of the diodes should be ",
            "a": [
                {"option": "&#8805;2V<sub>m</sub>", "correct":true},
                {"option": "<2V<sub>m</sub>", "correct": false},
                {"option": "&#8805;V<sub>m</sub> ", "correct": false},
                {"option": " < V<sub>m</sub>", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "In a full wave rectifier if the input signal frequency is 50Hz, then the output frequency is",
            "a": [
                {"option": "25 Hz", "correct": false},
                {"option": "50 Hz", "correct":false},
                {"option": " 100 Hz", "correct": true},
               // {"option": " it is impossible to determine the change in the resistor value", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "Ripple factor of a bridge rectifier is",
            "a": [
                {"option": "0.31", "correct": false},
                {"option": "0.48", "correct":true},
                {"option": "0.707", "correct": false},
                {"option": " 1.21", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Single True Answer
            "q": "If the peak applied signal voltage is Vm then for a bridge rectifier circuit the PIV of the diodes will be",
            "a": [
                {"option": "&#8805;V<sub>m</sub>", "correct": true},
                {"option": "<2V<sub>m</sub>", "correct": false},
                {"option": "&#8805;2V<sub>m</sub>", "correct": false},
                {"option": " < V<sub>m</sub>", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 6 - Multiple Choice, Single True Answer
            "q": "Four ideal Si diodes [VT = 0.7V] are used in a bridge rectifier circuit which has a peak input sinusoidal signal amplitude of 5V [Vm = 5V]. The average DC voltage is ",
            "a": [
                {"option": "<2.54", "correct": false},
                {"option": "=2.74", "correct":true},
                {"option": ">3.74", "correct": false},
               // {"option": " 90 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
   
    ]
};
