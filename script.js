const msg = document.querySelector(".msg")
const gus = document.querySelector("input")
const btn = document.querySelector(".btn")
let play = false;
let newWords = "";
var ranWords = "";
let sWords = ["Abhishek", "Vaishnavi", "Lata", "Ajay", "Aman", "Akash", "mamta", "sanjay", "Ruby", "Jeetu", "Tanveer", "Shivam", "Abdul", "Kartik"];
const createNewWords = () => {
    let random = Math.floor(Math.random() * sWords.length);
    // console.log(random);
    let newTempSwords = sWords[random];
    // console.log(newTempSwords.split(""));
    return newTempSwords;
}

const screamble = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i]
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1))
        // console.log(i,j);
        // console.log();

        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        gus.classList.toggle("hidden");
        newWords = createNewWords();
        ranWords = screamble(newWords.split("")).join("");
        // console.log(ranWords.join(""));
        msg.innerHTML = `Rearrange the word : ${ranWords}`;
    } else {
        let tempWords = gus.value;
        if (tempWords === newWords) {
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = "Start Again";
            gus.classList.toggle("hidden");
            gus.value = "";

        } else {
            msg.innerHTML = `Sorry Boss. It's incorrect. Try Again ${ranWords}`;
        }
    }
})