// Part 1 - The Alerter

let inputText = document.querySelector('#inputText');
let usernameForm = document.querySelector('#usernameForm');

usernameForm.addEventListener('submit', function(event){
   
    //event.preventDefault();
    
    alert(inputText.value);

    //inputText = '';
});

//---------------------------------------------------------------------
//Part 2 -  Sandwich Builder

let sandwichBuilderForm = document.querySelector('#sandwichBuilder');
let ingredients = document.querySelectorAll('#sandwichBuilder div');
let recipetIntro = 'Your sandwich contains: ';
let chosenIngredients = [];

sandwichBuilderForm.addEventListener('submit', function(event){
    
    //event.preventDefault();

    for (let ingredient of ingredients){
        if (ingredient.lastElementChild.checked === true){
            chosenIngredients.push(ingredient.innerText);
        }
    }

    alert(recipetIntro + chosenIngredients)
})

//---------------------------------------------------------------------
//Part 3 - Haircut Appointment Scheduler

let haircutForm = document.querySelector('#haircutScheduler');
let date = document.querySelector('#haircutDate');
let barber = document.querySelector('#desiredBarber');
let hairLength = document.querySelectorAll('#hairLength input');
let hairChoice = ''; 


haircutForm.addEventListener('submit', function(event){

    for (let choice of hairLength){
        if (choice.checked){
            hairChoice = choice.id;
        }
    }

    alert(`Haircut scheduled for ${date.value} with ${barber.value} for ${hairChoice} hair.`);
})

//---------------------------------------------------------------------
//Part 4 - Create Account

let createAccountForm = document.querySelector('#createAccount');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordCheck = document.querySelector('#confirmPassword');

createAccountForm.addEventListener('submit', function(event){
    alert(`Your username is: ${username.value} and all notifications will be sent to your associated email address: ${email.value}`)
})