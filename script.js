const guessNumber = Math.floor(Math.random() * 100) + 1;
console.log(guessNumber);
const input = document.querySelector(".input-number");
const btn = document.querySelector(".btn");
let noOfguess = 0;

let sayac = 5;

const addNum = () => {
    const val = input.value;

    if (val < 1 || val > 100) {
        document.querySelector(".span").innerText =
            "Please Enter a number Between 1 to 100";
    } else {
        sayac--;
        noOfguess++;
        if (sayac > 0) {
            if (val < guessNumber) {
                document.querySelector(".input-number").value = "";
                document.querySelector(".span").innerText = "go up";
                document.querySelector("#message2").innerText =
                    "No Of Guesses : " + noOfguess;
                document.querySelector("#message3").innerText =
                    "Guessed Number Are: " + val;
            } else if (val == guessNumber) {
                document.querySelector(".container").innerHTML =
                    "<h1 style='color: greenyellow;'>You won it!</h1> <br> <p>The number was:</p> " +
                    guessNumber +
                    "<br><br> <a style='color: greenyellow;' href='./index.html'> Try it again</a>";
            } else {
                document.querySelector(".input-number").value = "";
                document.querySelector(".span").innerText = " go down";
                document.querySelector("#message2").innerText =
                    "No Of Guesses : " + noOfguess;
                document.querySelector("#message3").innerText =
                    "Guessed Number Are: " + val;
            }
            document.querySelector("#message1").innerText = sayac;
        } else {
            document.querySelector(".container").innerHTML =
                "<h1 style='color: red;'>Your attemp is finished </h1> <br> <a style='color: greenyellow;' href='./index.html'> Try it again</a>";
        }
    }
};

btn.addEventListener("click", addNum);

// btn.addEventListener("click", function addNum() {
//     const val = input.value;

//     if (val < 1 || val > 100) {
//         document.querySelector(".span").innerText =
//             "Please Enter a number Between 1 to 100";
//     } else {
//         sayac--;
//         noOfguess++;
//         if (sayac > 0) {
//             if (val < guessNumber) {
//                 document.querySelector(".input-number").value = "";
//                 document.querySelector(".span").innerText = "go up";
//                 document.querySelector("#message2").innerText =
//                     "No Of Guesses : " + noOfguess;
//                 document.querySelector("#message3").innerText =
//                     "Guessed Number Are: " + val;
//             } else if (val == guessNumber) {
//                 document.querySelector(".container").innerHTML =
//                     "<h1 style='color: greenyellow;'>You won it!</h1> <br> <p>The number was:</p> " +
//                     guessNumber +
//                     "<br><br> <a style='color: greenyellow;' href='./index.html'> Try it again</a>";
//             } else {
//                 document.querySelector(".input-number").value = "";
//                 document.querySelector(".span").innerText = " go down";
//                 document.querySelector("#message2").innerText =
//                     "No Of Guesses : " + noOfguess;
//                 document.querySelector("#message3").innerText =
//                     "Guessed Number Are: " + val;
//             }
//             document.querySelector("#message1").innerText = sayac;
//         } else {
//             document.querySelector(".container").innerHTML =
//                 "<h1 style='color: red;'>Your attemp is finished </h1> <br> <a style='color: greenyellow;' href='./index.html'> Try it again</a>";
//         }
//     }
// });

input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        const newVal = input.value;

        console.log(newVal);
        addNum();

        input.value = "";
    }
});