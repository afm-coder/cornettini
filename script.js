/* =========================================================
   CROISSANT CLUB
   COMPLETE JAVASCRIPT
   ================================================= */


/* =========================================================
   =========================================================
   GOLDEN SPARKLE SYSTEM
   =========================================================
   ========================================================= */


/* =========================================================
   FIND SPARKLE CONTAINER
   ========================================================= */

const sparkleContainer =
    document.getElementById(
        "sparkles"
    );


/* =========================================================
   SPARKLE TYPES
   ========================================================= */

const sparkleTypes = [

    "✦",

    "✦",

    "✦",

    "✦",

    "⋆"

];


/* =========================================================
   CREATE SPARKLE
   ========================================================= */

function createSparkle() {


    /* =====================================================
       CREATE SPAN
       ===================================================== */

    const sparkle =
        document.createElement(
            "span"
        );


    /* =====================================================
       ADD CLASS
       ===================================================== */

    sparkle.className =
        "sparkle";


    /* =====================================================
       CHOOSE RANDOM FILLED STAR
       ===================================================== */

    sparkle.textContent =
        sparkleTypes[
            Math.floor(
                Math.random() *
                sparkleTypes.length
            )
        ];


    /* =====================================================
       RANDOM HORIZONTAL POSITION
       ===================================================== */

    sparkle.style.left =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM VERTICAL POSITION
       ===================================================== */

    sparkle.style.top =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM STAR SIZE
       
       8px → 13px
       ===================================================== */

    const size =
        Math.random() * 5 + 8;


    sparkle.style.fontSize =
        size + "px";


    /* =====================================================
       RANDOM ANIMATION DURATION
       
       2.5s → 5s
       ===================================================== */

    const duration =
        Math.random() * 2.5 + 2.5;


    sparkle.style.setProperty(

        "--duration",

        duration + "s"

    );


    /* =====================================================
       ADD STAR TO SIDEBAR
       ===================================================== */

    sparkleContainer.appendChild(
        sparkle
    );


    /* =====================================================
       REMOVE STAR AFTER ANIMATION
       ===================================================== */

    setTimeout(

        function () {

            sparkle.remove();

        },

        (duration * 1000) + 200

    );

}


/* =========================================================
   INITIAL STAR BURST
   ========================================================= */

for (

    let i = 0;

    i < 8;

    i++

) {

    setTimeout(

        createSparkle,

        Math.random() * 500

    );

}


/* =========================================================
   CONTINUOUS STAR GENERATION
   ========================================================= */

setInterval(

    function () {

        createSparkle();

    },

    700

);


/* =========================================================
   =========================================================
   CLUB RADIO MUSIC SYSTEM
   =========================================================
   ========================================================= */


/* =========================================================
   GET MUSIC ELEMENTS
   ========================================================= */

const clubPlayer =
    document.getElementById(
        "clubplayer"
    );


const radioButton =
    document.getElementById(
        "radioButton"
    );


/* =========================================================
   YOUTUBE VIDEO ID
   ========================================================= */

const musicVideoID =
    "8F2s8ivKXNY";


/* =========================================================
   PLAY MUSIC
   ========================================================= */

function playClubMusic() {

    clubPlayer.src =
        "https://www.youtube.com/embed/" +
        musicVideoID +
        "?autoplay=1&enablejsapi=1";


    radioButton.innerHTML =
        "⟳ Restart";


    radioButton.setAttribute(
        "data-state",
        "restart"
    );

}


/* =========================================================
   RESTART MUSIC
   ========================================================= */

function restartClubMusic() {

    clubPlayer.src =
        "";


    setTimeout(

        function () {

            clubPlayer.src =
                "https://www.youtube.com/embed/" +
                musicVideoID +
                "?autoplay=1&enablejsapi=1";

        },

        100

    );


    radioButton.innerHTML =
        "■ Stop Music";


    radioButton.setAttribute(
        "data-state",
        "playing"
    );

}


/* =========================================================
   STOP MUSIC
   ========================================================= */

function stopClubMusic() {

    clubPlayer.src =
        "";


    radioButton.innerHTML =
        "▶ Play Music";


    radioButton.setAttribute(
        "data-state",
        "off"
    );

}


/* =========================================================
   BUTTON CLICK
   ========================================================= */

radioButton.addEventListener(

    "click",

    function () {


        const state =
            radioButton.getAttribute(
                "data-state"
            );


        /* ===============================================
           PLAY
           =============================================== */

        if (
            state === "off"
        ) {

            playClubMusic();

        }


        /* ===============================================
           RESTART
           =============================================== */

        else if (
            state === "restart"
        ) {

            restartClubMusic();

        }


        /* ===============================================
           STOP
           =============================================== */

        else if (
            state === "playing"
        ) {

            stopClubMusic();

        }

    }

);
