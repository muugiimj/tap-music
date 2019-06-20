//jshint esversion:6
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    //sounds here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const eventFunction = function(event) {
        makeSound(event.key);
        createBubbles(event.key);
    };

    //create a function that makes bubbles
    function createBubbles (index) {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };

    

    document.addEventListener("keydown", eventFunction);

    function makeSound(key) {
        switch (key) {
            case "w":
                var pad1 = new Audio("sounds/bubbles.mp3");
                pad1.play();
                createBubbles(0);
                break;
            case "a":
                var pad2 = new Audio("sounds/clay.mp3");
                pad2.play();
                createBubbles(1);
                break;
            case "s":
                var pad3 = new Audio("sounds/confetti.mp3");
                pad3.play();
                createBubbles(2);
                break;
            case "d":
                var pad4= new Audio("sounds/glimmer.mp3");
                pad4.play();
                createBubbles(3);
                break;
            case "j":
                var pad5 = new Audio("sounds/moon.mp3");
                pad5.play();
                createBubbles(4);
                break;
            case "k":
                var pad6 = new Audio("sounds/ufo.mp3");
                pad6.play();
                createBubbles(5);
                break;
    
            default: console.log(buttonInnerHTML);
        }
    }
   

});