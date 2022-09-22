//declaring all variables
let jokeSetup = document.querySelector("#setup");
let jokePunchline = document.querySelector("#punchline");
let anotherOneBtn = document.querySelector("#anotherOne");
let allBtn = document.querySelector("#all");
let repeat = 1;

//each time the web is opened, one joke appears
getJoke();

//function for creating joke
async function getJoke(){
    let joke = await fetch("https://official-joke-api.appspot.com/random_joke");
    
    let jokeData = await joke.json()

    jokeSetup.style.animation = `setupAppear 7s 0s ${repeat}`;
    jokeSetup.innerHTML = jokeData.setup;

    jokePunchline.style.animation = `punchlineAppear 7s 0s ${repeat}`;
    jokePunchline.innerHTML = jokeData.punchline;
}

//function for replacing current joke with another one
function anotherJoke(){
    jokeSetup.style.animation = "disappear 1s 1";
    jokePunchline.style.animation = "disappear 1s 1";
    jokeSetup.innerHTML = "";
    jokePunchline.innerHTML = "";
    getJoke();
}

//adding eventListener for button, which generates new joke
anotherOneBtn.addEventListener("click", function(){
    //repeat is 1, because the animation needs to be executed only once
    repeat = 1;
    anotherJoke();
})

//adding eventListener for button, which generates new joke each 7 seconds
allBtn.addEventListener("click", function(){
    //repeat is "infinite", because animation needs to be executed each time the joke is generated
    repeat = "infinite";
    //generating one joke before setting timeout, so that we don´t need to wait 7 second for the joke
    anotherJoke();

    //timeout for generating joke every 7 seconds
    setTimeout(function(){
        anotherJoke();
    }, 7000);
})

