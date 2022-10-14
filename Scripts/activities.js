"use strict";


window.onload = function () {
    const showMessage = document.getElementById("showMessage");
    //calculateOrder.onclick = calculateTotal;
    showMessage.addEventListener("click", displayMessage);
    const showMessage2 = document.getElementById("showMessage2");
    showMessage2.addEventListener("click", displayMessage);
    const showMessage3 = document.getElementById("showMessage3");
    showMessage3.addEventListener("click", displayMessage);
    const amountCalculate = document.getElementById("showMessage");
    amountCalculate.addEventListener("click", totalAmount);
    const amountCalculate2 = document.getElementById("showMessage2");
    amountCalculate2.addEventListener("click", totalAmount);
    const amountCalculate3 = document.getElementById("showMessage3");
    amountCalculate3.addEventListener("click", totalAmount);
}



function selectCategory() {
    const categoriesList = document.getElementById("categories").value;
    const adventureInfo = document.getElementById("adventureInfo");
    const museumInfo = document.getElementById("museumInfo");
    const wineTastingInfo = document.getElementById("wineTastingInfo");
    adventureInfo.style.display = "none";
    museumInfo.style.display = "none";
    wineTastingInfo.style.display = "none";
    if (categoriesList == "Adventures") {
        adventureInfo.style.display = "inline-block"
    } else if (categoriesList == "Museums") {
        museumInfo.style.display = "inline-block"
    } else if (categoriesList == "Wine Tastings") {
        wineTastingInfo.style.display = "inline-block"
    } else {
        alert("Don't you wanna have fun while you're here?")
    }
}

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Renaissance-Explore Florence",
        price: 67.07,
    },
    {
        category: "Museums",
        id: "A201",
        name: "Palazzo Vecchio Guided Tour",
        price: 52.07,
    },
    {
        category: "Wine Tastings",
        id: "A301",
        name: "Tuscany Sightseeing Tour from Florence",
        price: 45.00,
    },
];

function totalAmount() {
    let totalOfTickets = 0;
    let category = document.getElementById("categories").value
    if (category == "Adventures") {
        totalOfTickets += 67.07;
    } else if (category == "Museums") {
        totalOfTickets += 52.07;
    } else if (category == "Wine Tastings") {
        totalOfTickets += 45.00;
    } else {
        totalOfTickets += 0;
    }
    return totalOfTickets;
}


function displayMessage() {
    let categoriesList = document.getElementById("categories").value;
    let messageDisplay = document.getElementById("messageDisplay");
    let messageDisplay2 = document.getElementById("messageDisplay2");
    let messageDisplay3 = document.getElementById("messageDisplay3");
    let numOfTickets2 = document.getElementById("numOfTickets2").value;
    let numOfTickets3 = document.getElementById("numOfTickets3").value;
    let email = document.getElementById("email").value;
    let email2 = document.getElementById("email2").value;
    let email3 = document.getElementById("email3").value;
    let numOfTickets = document.getElementById("numOfTickets").value;
    let priceForAdventure = numOfTickets * totalAmount();
    let priceForMuseums = numOfTickets2 * totalAmount();
    let priceForWine = numOfTickets3 * totalAmount();
    if (categoriesList == "Adventures") {
        messageDisplay.innerHTML = "Your credit card has been charged " + priceForAdventure.toFixed(2) + " for " + numOfTickets + " to " + activities[0].name + ". A confirmation email has been sent to " + email + "."
    } else if (categoriesList == "Museums") {
        messageDisplay2.innerHTML = "Your credit card has been charged " + priceForMuseums.toFixed(2) + " for " + numOfTickets2 + " to " + activities[1].name + ". A confirmation email has been sent to " + email2 + "."
    } else if (categoriesList == "Wine Tastings") {
        messageDisplay3.innerHTML = "Your credit card has been charged " + priceForWine.toFixed(2) + " for " + numOfTickets3 + " to " + activities[2].name + ". A confirmation email has been sent to " + email3 + "."
    } else {
        alert("No info")
    }
    //deselectListbox()
}

/*function deselectListbox() {
    let clear = document.getElementById("categories");
    for (let i = 0; i < clear.length; i++) {
        if(clear.options[i].selected) {
            clear.options[i].selected = false;
        }
    }
} */