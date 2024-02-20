'use strict'

const form = document.querySelector(".feedback-form");

const btn = document.querySelector(".btn") 

function readFormData(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        message,
        email,
    }
}

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem("feedback-form-state", jsonData); 
})

const rawData = localStorage.getItem("feedback-form-state");

if (rawData) {
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;   
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (form.email.value.trim() && form.message.value.trim() !== "")
    {
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
    else {
        alert("Please fill out the form!")
    };
})

