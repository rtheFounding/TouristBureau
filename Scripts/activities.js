"use strict";


window.onload = function () {
    const coneBox = document.getElementById("Cone");
    coneBox.onclick = onHideOrShowToppings;
    const cupBox = document.getElementById("Cup");
    cupBox.onclick = onHideOrShowToppings;
    const calculateTotal = document.getElementById("");
    //calculateOrder.onclick = calculateTotal;
    calculateOrder.addEventListener("click", calculateTotal);
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
    totalAmount(categoriesList)
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

function totalAmount(userValue) {
    let numOfTickets = document.getElementById("numOfTickets").value;

    if (userValue == "Adventures") {
        totalOfTickets = numOfTickets * 67.07;
    } else if (userValue == "Museums") {
        totalOfTickets = numOfTickets * 52.07;
    } else if (userValue == "Wine Tastings") {
        totalOfTickets = numOfTickets * 45.00;
    } else {
        totalOfTickets = 0;
    }
    return totalOfTickets.toFixed(2);
}

function displayMessage() {
    let categoriesList = document.getElementById("categories").value;
    let messageDisplay = document.getElementById("messageDisplay");
    let messageDisplay2 = document.getElementById("messageDisplay2");
    let messageDisplay3 = document.getElementById("messageDisplay3");
    let email = document.getElementById("email").value;
    let numOfTickets = document.getElementById("numOfTickets").value;
    let totalOfTickets = totalAmount(categoriesList);
    if (categoriesList == "Adventures") {
        messageDisplay.innerHTML = "Your credit card has been charged " + totalOfTickets + " for " + numOfTickets + " to " + activities[0].name + ". A confirmation email has been sent to " + email + "."
    } else if (categoriesList == "Museums") {
        messageDisplay2.innerHTML = "Your credit card has been charged " + totalOfTickets + " for " + numOfTickets + " to " + activities[1].name + ". A confirmation email has been sent to " + email + "."
    } else if (categoriesList == "Wine Tastings") {
        messageDisplay3.innerHTML = "Your credit card has been charged " + totalOfTickets + " for " + numOfTickets + " to " + activities[2].name + ". A confirmation email has been sent to " + email + "."
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