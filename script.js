
const buttonArmy = document.querySelector("#btn-army");

const list = document.querySelector("#list");


const cat = [
    {
        profilPicture:      "😺",
        name :              "Mittens",
        strength :          "⭐⭐⭐",
        remainingLife:      7,
        condition :         "ready",

}, {
        profilPicture:      "😸",
        name :              "Cheddar",
        strength :          "⭐⭐",
        remainingLife:      6,
        condition:          "prime",

}, {
        profilPicture:      "😹",
        name :              "Bubbles",
        strength :          "⭐",
        remainingLife:      5,
        condition :         "sickness",

}, { 
        profilPicture:      "😻",
        name :              "Katy Purry",
        strength :          "⭐⭐",
        remainingLife:      9,
        condition:          "upset",

}, { 
        profilPicture:      "😼",
        name :              "Fishbait",
        strength :          "⭐⭐⭐⭐⭐",
        remainingLife:      1,
        condition:          "furious",

}, {
        profilPicture:      "😽",
        name :              "Clawdia",
        strength :          "⭐⭐⭐",
        remainingLife:      8,
        condition:          "prime",

}, {
        profilPicture:      "🙀",
        name :              "Wasabi",
        strength :          "⭐⭐",
        remainingLife:      7,
        condition:          "weakness",

}, {   
        profilPicture:      "😿",
        name :              "Porkchop",
        strength :          "⭐⭐⭐",
        remainingLife:      3,
        condition:          "drowzy",

}, {
        profilPicture:      "😾",
        name :              "Purrito",
        strength :          "⭐⭐",
        remainingLife:      4,
        condition:          "good",

}, {
    
        profilPicture:      "🐱",
        name :              "Nugget",
        strength :          "⭐⭐⭐",
        remainingLife:      8,
        condition:          "feral",
}]

function catArmySummon() {
    for(i=0; i < cat.length; i++) {
        const listElement = document.createElement("li");
        listElement.setAttribute('id','listtwo')
        listElement.innerText =`
        Profile picture: ${cat[i].profilPicture} 
        Name: ${cat[i].name} 
        Strength: ${cat[i].strength} 
        Remaining life: ${cat[i].remainingLife} 
        Condition: ${cat[i].condition}`;
        list.appendChild(listElement); 
    }
}


//prøvde og lage noe som fikk img til og forsvinne når btn er aktivert. gikk ikke :<

// const image = document.querySelector("#img");
// const imgView = true;

// function imgRemover() {
//     if(imgView == true) {
//         image.style.display = "none";
//         imgView = false;
//     } else {
//         image.style.display= "inline-block";
//         imgView = true;
//     }
// }

//listElement.innerText = catEmojis[i].profilPicture + "Name: " + catEmojis[i].name + "Stregth: " + catEmojis[i].strength + " remaining life: " + catEmojis[i].remainingLife + " condition: " + catEmojis[i].condition;