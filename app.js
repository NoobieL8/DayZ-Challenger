const challengeContainer = document.querySelector('.random-challenge');
const submitBtn = document.getElementById('submitBtn');

let challenges = [
    "Survive only on human meat", 
    "Survive only on wild game", 
    "Survive only on canned goods", 
    "Survive using only .22 calibre weapons", 
    "Survive using only pistols", 
    "Survive using only your fists",
    "Build a car and run everyone over", 
    "Change into every new item of clothing you find", 
    "Give human meat to an unsuspecting victim",
    "When people talk to you, respond like a zombie",
    "Use only a shovel or sledge hammer",
    "Survive without using a backpack"
    ];

    let p = document.createElement('p');

    function randomChallenge() {
        let randomNumber = (Math.floor(Math.random() * challenges.length));
        p.textContent = challenges[randomNumber];
        p.className = "challenge";
        challengeContainer.appendChild(p);
    }

submitBtn.addEventListener('click', randomChallenge);

