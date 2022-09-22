let jokeSetup = document.querySelector("#setup");
let jokePunchline = document.querySelector("#punchline");
let anotherOneBtn = document.querySelector("#anotherOne");
let allBtn = document.querySelector("#all");
let repeat = 1;

getJoke();

async function getJoke(){
    let joke = await fetch("https://official-joke-api.appspot.com/random_joke");
    
    let jokeData = await joke.json()

    jokeSetup.style.animation = `setupAppear 7s 0s ${repeat}`;
    jokeSetup.innerHTML = jokeData.setup;

    jokePunchline.style.animation = `punchlineAppear 7s 0s ${repeat}`;
    jokePunchline.innerHTML = jokeData.punchline;
}

function anotherJoke(){
    jokeSetup.style.animation = "disappear 1s 1";
    jokePunchline.style.animation = "disappear 1s 1";
    jokeSetup.innerHTML = "";
    jokePunchline.innerHTML = "";
    getJoke();
}

anotherOneBtn.addEventListener("click", function(){
    repeat = 1;
    anotherJoke();
})

allBtn.addEventListener("click", function(){
    repeat = "infinite";
    anotherJoke();
    setTimeout(function(){
        anotherJoke();
    }, 7000);
})

