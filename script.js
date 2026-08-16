/* =========================================================
   CROISSANT CLUB
   COMPLETE JAVASCRIPT
   ========================================================= */


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
   =========================================================
   
   ONLY FILLED STARS.
   
   No ✧ because that was the hollow star
   you wanted removed.
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
       
       INSIDE SIDEBAR ONLY
       ===================================================== */

    sparkle.style.left =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM VERTICAL POSITION
       
       INSIDE SIDEBAR ONLY
       ===================================================== */

    sparkle.style.top =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM STAR SIZE
       
       Current size:
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
       ADD STAR
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
   CLUB RADIO
   =========================================================
   =========================================================

   IMPORTANT:

   The radio below intentionally uses the EXACT SAME
   method as your working Chess.com sidebar code.

   We DO NOT use:
   
   - YouTube API
   - audio element
   - MP3
   - external libraries
   - addEventListener()
   
   The button itself handles the YouTube iframe.
   ========================================================= */


/* =========================================================
   FIND RADIO BUTTON
   ========================================================= */

const radioButton =
    document.getElementById(
        "radioButton"
    );


/* =========================================================
   FIND YOUTUBE PLAYER
   ========================================================= */

const clubPlayer =
    document.getElementById(
        "clubplayer"
    );


/* =========================================================
   RADIO BUTTON CLICK
   =========================================================

   THIS IS THE SAME LOGIC AS YOUR WORKING CODE.

   OFF:
       Load YouTube
       Change button to Restart

   RESTART:
       Remove YouTube source
       Change button to Play Music
   ========================================================= */

radioButton.onclick = function () {


    /* =====================================================
       GET CURRENT STATE
       ===================================================== */

    const state =
        this.getAttribute(
            "data-state"
        );


    /* =====================================================
       PLAY MUSIC
       ===================================================== */

    if (

        state === "off"

    ) {


        /* ================================================
           LOAD THE EXACT YOUTUBE VIDEO
           ================================================ */

        clubPlayer.src =
            "https://www.youtube.com/embed/8F2s8ivKXNY?autoplay=1";


        /* ================================================
           CHANGE BUTTON TEXT
           ================================================ */

        this.innerHTML =
            "⟳ Restart";


        /* ================================================
           CHANGE STATE
           ================================================ */

        this.setAttribute(

            "data-state",

            "restart"

        );

    }


    /* =====================================================
       RESTART / STOP
       ===================================================== */

    else {


        /* ================================================
           REMOVE YOUTUBE VIDEO
           
           THIS IS EXACTLY WHAT YOUR WORKING CODE DID.
           ================================================ */

        clubPlayer.src =
            "";


        /* ================================================
           RESET BUTTON
           ================================================ */

        this.innerHTML =
            "▶ Play Music";


        /* ================================================
           RESET STATE
           ================================================ */

        this.setAttribute(

            "data-state",

            "off"

        );

    }

};
