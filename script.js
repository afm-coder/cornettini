/* =========================================
   CROISSANT CLUB
   JAVASCRIPT
   ========================================= */


/* =========================================
   SPARKLE SYSTEM
   ========================================= */

const sparkleContainer =
    document.getElementById("sparkles");


/* =========================================
   SPARKLE CHARACTERS
   ========================================= */

const sparkleTypes = [

    "✦",

    "✧",

    "✦",

    "✧",

    "⋆"

];


/* =========================================
   CREATE SPARKLE
   ========================================= */

function createSparkle() {


    /* -----------------------------------------
       CREATE ELEMENT
       ----------------------------------------- */

    const sparkle =
        document.createElement("span");


    sparkle.className =
        "sparkle";


    /* -----------------------------------------
       RANDOM STAR TYPE
       ----------------------------------------- */

    sparkle.textContent =
        sparkleTypes[
            Math.floor(
                Math.random() *
                sparkleTypes.length
            )
        ];


    /* -----------------------------------------
       RANDOM POSITION
       ----------------------------------------- */

    sparkle.style.left =
        (
            Math.random() * 96 + 2
        ) + "vw";


    sparkle.style.top =
        (
            Math.random() * 96 + 2
        ) + "vh";


    /* -----------------------------------------
       RANDOM SIZE
       ----------------------------------------- */

    const size =
        Math.random() * 6 + 7;


    sparkle.style.fontSize =
        size + "px";


    /* -----------------------------------------
       RANDOM ANIMATION TIME
       ----------------------------------------- */

    const duration =
        Math.random() * 2.5 + 2.5;


    sparkle.style.setProperty(
        "--duration",
        duration + "s"
    );


    /* -----------------------------------------
       ADD TO PAGE
       ----------------------------------------- */

    sparkleContainer.appendChild(
        sparkle
    );


    /* -----------------------------------------
       REMOVE WHEN FINISHED
       ----------------------------------------- */

    setTimeout(

        () => {

            sparkle.remove();

        },

        (duration * 1000) + 200

    );

}


/* =========================================
   INITIAL STARS
   ========================================= */

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(

        createSparkle,

        Math.random() * 3500

    );

}


/* =========================================
   NEW STAR EVERY SO OFTEN
   ========================================= */

setInterval(

    () => {

        createSparkle();

    },

    650

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
   RADIO BUTTON
   ========================================= */

radioButton.addEventListener(

    "click",

    function () {


        /* -------------------------------------
           PLAY
           ------------------------------------- */

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


        /* -------------------------------------
           STOP
           ------------------------------------- */

        else {

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
