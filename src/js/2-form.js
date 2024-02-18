'use strict'

const form = document.querySelector(".feedback-form");

const btn = document.querySelector(".btn")

function readFormData(form) {
    const email = form.email.value;
    const message = form.message.value;
    return {
        message,
        email
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.email.textContent || form.message.textContent === "") {
        alert("Please fill out the form!")
    };
    if (form.email.textContent && form.message.textContent !== "")
    {
        localStorage.clear();
    form.reset();}
    
   
})


form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem("feedback - form - state", jsonData);
    
})

const rawData = localStorage.getItem("feedback - form - state");

if (rawData) {
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;
    
};

