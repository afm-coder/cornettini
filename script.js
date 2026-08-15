/* =========================================
   CROISSANT CLUB
   JAVASCRIPT
   ========================================= */


/* =========================================
   SPARKLE CONTAINER
   ========================================= */

const sparkleContainer =
    document.getElementById("sparkles");


/* =========================================
   SPARKLE CHARACTERS
   ========================================= */

const sparkleTypes = [

    "✦",

    "✧",

    "⋆",

    "✦",

    "✧",

    "✦"

];


/* =========================================
   CREATE SPARKLE
   ========================================= */

function createSparkle() {


    /* Create element */

    const sparkle =
        document.createElement("span");


    /* Add class */

    sparkle.classList.add(
        "sparkle"
    );


    /* Pick random character */

    sparkle.textContent =
        sparkleTypes[
            Math.floor(
                Math.random() *
                sparkleTypes.length
            )
        ];


    /* =========================================
       RANDOM POSITION
       ========================================= */

    sparkle.style.left =
        (
            Math.random() * 96 + 2
        ) + "%";


    sparkle.style.top =
        (
            Math.random() * 96 + 2
        ) + "%";


    /* =========================================
       RANDOM SIZE
       ========================================= */

    const size =
        Math.random() * 12 + 8;


    sparkle.style.fontSize =
        size + "px";


    /* =========================================
       RANDOM DURATION
       ========================================= */

    const duration =
        Math.random() * 2.5 + 2;


    sparkle.style.setProperty(
        "--duration",
        duration + "s"
    );


    /* =========================================
       RANDOM INITIAL ROTATION
       ========================================= */

    sparkle.style.rotate =
        (
            Math.random() * 90
        ) + "deg";


    /* =========================================
       ADD TO DOM
       ========================================= */

    sparkleContainer.appendChild(
        sparkle
    );


    /* =========================================
       REMOVE AFTER ANIMATION
       ========================================= */

    setTimeout(

        () => {

            sparkle.remove();

        },

        duration * 1000 + 100

    );

}


/* =========================================
   INITIAL BURST
   ========================================= */

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(

        createSparkle,

        Math.random() * 2500

    );

}


/* =========================================
   CONTINUOUS SPAWNING
   ========================================= */

setInterval(

    () => {

        createSparkle();

    },

    450

);


/* =========================================
   CLUB RADIO
   ========================================= */

const radioButton =
    document.getElementById(
        "radioButton"
    );


const clubPlayer =
    document.getElementById(
        "clubplayer"
    );


/* =========================================
   RADIO CLICK
   ========================================= */

radioButton.addEventListener(

    "click",

    function () {


        /* =====================================
           PLAY MUSIC
           ===================================== */

        if (

            this.getAttribute(
                "data-state"
            ) === "off"

        ) {

            clubPlayer.src =
                "https://www.youtube.com/embed/8F2s8ivKXNY?autoplay=1";


            this.innerHTML =
                "⟳ Restart";


            this.setAttribute(
                "data-state",
                "restart"
            );

        }


        /* =====================================
           STOP MUSIC
           ===================================== */

        else if (

            this.getAttribute(
                "data-state"
            ) === "restart"

        ) {

            clubPlayer.src =
                "";


            this.innerHTML =
                "▶ Play Music";


            this.setAttribute(
                "data-state",
                "off"
            );

        }

    }

);
