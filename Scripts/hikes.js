"use strict";

let hikes = [
    {
        id: "trail1",
        name: "Piazza Duomo",
        description: "Some description of the hike.",
        scenicImage: "images/piazza-del-duomo.jpg",
        trailMapImage: "images/trailmap1.png",
        length: "2 miles",
        difficulty: 2
    },
    {
        id: "trail2",
        name: "Pian dei Giullari",
        description: "Some description of the hike.",
        scenicImage: "images/hiking.jpg",
        trailMapImage: "images/trailmap2.png",
        length: "2 miles",
        difficulty: 3
    },
    {
        id: "trail3",
        name: "Settignano Forest Walk",
        description: "Some description of the hike.",
        scenicImage: "images/museumPic.jpg",
        trailMapImage: "images/trailmap3.jpg",
        length: "2 miles",
        difficulty: 1
    },
];

window.onload = function () {
    addToSelect();
    const showPic1 = document.getElementById("showPic1");
    showPic1.addEventListener("click", changePicture);
    const showPic2 = document.getElementById("showPic2");
    showPic2.addEventListener("click", changePicture);
    const showPic3 = document.getElementById("showPic3");
    showPic3.addEventListener("click", changePicture);
}


function addToSelect() {

    const categories = document.getElementById("categories");
    let length = hikes.length;
    for (let i = 0; i < length; i++) {
        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(hikes[i].name, hikes[i].id);
        // append the option as a child of (inside) the
        // select element
        categories.appendChild(theOption);
    }
}
function selectCategory() {
    const catergoriesList = document.getElementById("categories").value;
    const hiking1 = document.getElementById("hiking1");
    const hiking2 = document.getElementById("hiking2");
    const hiking3 = document.getElementById("hiking3");
    hiking1.style.display = "none";
    hiking2.style.display = "none"
    hiking3.style.display = "none";
    if (catergoriesList == "trail1") {
        hiking1.style.display = "block"
    } else if (catergoriesList == "trail2") {
        hiking2.style.display = "block"
    } else if (catergoriesList == "trail3") {
        hiking3.style.display = "block"
    } else {
        alert("Do you not want to sweat?")
    }
}

function changePicture() {
    const index = document.getElementById("categories").selectedIndex;
    const path = hikes[index - 1].trailMapImage;
    const id = "myImg" + (index);
    const e = document.getElementById(id);
    e.src = path;
    /*if (catergoriesList == "trail1") {
        document.getElementById("myImg").src = "images/map.jpg";
    } else if (catergoriesList == "trial2") {
        document.getElementById("myImg2").src = "images/wine.jpg";
    } else if (catergoriesList == "trial3") {
        document.getElementById("myImg3").src = "images/italy.jpg";
    } else {
        alert("no image to display");
    } */
}
/*
function changePicture2() {
    document.getElementById("myImg2").src = "images/wine.jpg";
}

function changePicture3() {
    document.getElementById("myImg3").src = "images/italy.jpg";
} */