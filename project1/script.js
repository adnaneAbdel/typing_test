let selectForm = document.querySelector("select");
let inputeForTime = document.querySelector("#inputTime");
let checkBoxClick = document.querySelector(".checkbox-choose");
let hereShowTheWord = document.querySelector(".hereShowTheword");
let buttonToStart = document.querySelector("#inputBtn");
let inputText = document.querySelector("#inputText");
let herePlaceOtherWords = document.querySelector(".hereplaceOtherwolds");
let spanForMinute = document.querySelector(".spanforminute");
let spanForScore = document.querySelector(".spanforScore");
let spanForAllWord = document.querySelector(".spanforallword");
let alertMesg = document.querySelector(".alert");
let spanForOtherTime = document.querySelector('.spanForOtherInptTime');
let  finishMessage = document.querySelector('.finish');

const lvls = {
    "easy": 5,
    "normal": 3,
    "hard": 2
  };

const words = [
"Hello",
"Programming",
"Code",
"Javascript",
"Town",
"Country",
"Testing",
"Youtube",
"Linkedin",
"Twitter",
"Github",
"Leetcode",
"Internet",
"Python",
"Scala",
"Destructuring",
"Paradigm",
"Styling",
"Cascade",
"Documentation",
"Coding",
"Funny",
"Working",
"Dependencies",
"Task",
"Runner",
"Roles",
"Test",
"Rust",
"Playing"
];



spanForAllWord.innerHTML = words.length ;


buttonToStart.onclick = function(){
    buttonToStart.remove();
    inputText.focus();
    if(selectForm.value == 'level'){
        alertMesg.innerHTML = `you typing with level is esay , good luck ...`;
        alertMesg.classList.add('alertfromJs');
       
    }else{
        alertMesg.innerHTML = `you typing with level is ${selectForm.value} , good luck ...`;
        alertMesg.classList.add('alertfromJs');
    }
   

    setTimeout(() => {
        alertMesg.classList.remove('alertfromJs');
    }, 5000);

    generteWord();
    getTheTime();
    


}
function whenTheTimerActive(){
    if(checkBoxClick.checked){
        spanForMinute.innerHTML = 0;

    }
  
}

function getOtherTimeFromInput(){
    if(inputeForTime.value = ''){
        console.log('the input time is empty...');
    }else{
        spanForOtherTime.innerHTML = `Your Time is ${inputeForTime.value}`;
    }
}

checkBoxClick.onclick = function(){
   if(checkBoxClick.checked){
    inputeForTime.disabled = false ;
    selectForm.disabled = true;
    whenTheTimerActive();
    getOtherTimeFromInput()

   }else{
    inputeForTime.disabled = true ;
    selectForm.disabled = false;
   }
}

function getTheTime(){
    if(selectForm.value == 'easy'){
        spanForMinute.innerHTML = lvls.easy ;
    }else if (selectForm.value == 'normal'){
        spanForMinute.innerHTML = lvls.normal ;
    }else if (selectForm.value == 'hard') {
        spanForMinute.innerHTML = lvls.hard ;
    }
        
    
}



function generteWord(){
    let randomWord = words[Math.floor(Math.random() * words.length )];
    let getIndex = words.indexOf(randomWord);
    let verifie = words.splice(getIndex , 1);
    let createElement = document.createElement('div');
    let textInside = document.createTextNode(randomWord);
    createElement.appendChild(textInside);
    hereShowTheWord.appendChild(createElement);

    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        let otherElement = document.createElement('div');
        let textInside1 = document.createTextNode(element);
        otherElement.appendChild(textInside1);
        herePlaceOtherWords.appendChild(otherElement);
        
    }
    counterTime();
}

function counterTime(){
    
    let start = setInterval(() => {
        spanForMinute.innerHTML--;


        if (spanForMinute.innerHTML === "0") {
            clearInterval(start);
            let span = document.createElement("span");
            span.className = 'bad';
            let spanText = document.createTextNode("Game Over");
            span.appendChild(spanText);
            finishMessage.appendChild(span);

            if (hereShowTheWord.innerHTML.toLowerCase() === inputText.value.toLowerCase()) {
                inputText.value  = '';
                spanForScore.innerHTML++;
    
                if (words.length > 0) {
                    generteWord();
        
                } 
                 
                
        } 

      
       
        }
    }, 1000);
}













   