/* =========================================================
   CROISSANT CLUB
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   =========================================================
   SPARKLE SYSTEM
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
   FILLED SPARKLE TYPES
   =========================================================

   IMPORTANT:

   ✧ has been completely removed.

   Every star generated now has a filled appearance.
   ========================================================= */

const sparkleTypes = [

    "✦",

    "✦",

    "✦",

    "⋆",

    "✦"

];


/* =========================================================
   CREATE SPARKLE
   ========================================================= */

function createSparkle() {


    /* =====================================================
       CREATE STAR ELEMENT
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
       
       3% → 97%
       
       Keeps stars safely away from the border.
       ===================================================== */

    sparkle.style.left =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM VERTICAL POSITION
       
       3% → 97%
       ===================================================== */

    sparkle.style.top =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM STAR SIZE
       
       10px → 16px
       
       Bigger than the original version, but still
       suitable for the iframe/sidebar.
       ===================================================== */

    const size =
        Math.random() * 6 + 10;


    sparkle.style.fontSize =
        size + "px";


    /* =====================================================
       RANDOM ANIMATION DURATION
       
       2.5 → 5 seconds
       ===================================================== */

    const duration =
        Math.random() * 2.5 + 2.5;


    sparkle.style.setProperty(

        "--duration",

        duration + "s"

    );


    /* =====================================================
       ADD STAR TO SPARKLE LAYER
       ===================================================== */

    sparkleContainer.appendChild(
        sparkle
    );


    /* =====================================================
       REMOVE STAR AFTER ANIMATION
       
       Prevents old stars from accumulating.
       ===================================================== */

    setTimeout(

        function () {

            sparkle.remove();

        },

        (duration * 1000) + 250

    );

}


/* =========================================================
   INITIAL STAR BURST
   =========================================================

   9 stars appear shortly after loading.

   This makes the effect start quickly without creating
   a giant wall of stars.
   ========================================================= */

for (

    let i = 0;

    i < 9;

    i++

) {

    setTimeout(

        createSparkle,

        Math.random() * 700

    );

}


/* =========================================================
   CONTINUOUS STAR GENERATION
   =========================================================

   One new star approximately every 600ms.

   Lower density than the earlier giant-star version.
   ========================================================= */

setInterval(

    function () {

        createSparkle();

    },

    600

);


/* =========================================================
   =========================================================
   CLUB RADIO
   =========================================================
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
   ========================================================= */

radioButton.addEventListener(

    "click",

    function () {


        /* =================================================
           IF RADIO IS OFF
           START MUSIC
           ================================================= */

        if (

            this.getAttribute(
                "data-state"
            ) === "off"

        ) {


            /* =============================================
               LOAD YOUTUBE VIDEO
               ============================================= */

            clubPlayer.src =
                "https://www.youtube.com/embed/8F2s8ivKXNY?autoplay=1";


            /* =============================================
               CHANGE BUTTON
               ============================================= */

            this.innerHTML =
                "⟳ Restart";


            /* =============================================
               CHANGE STATE
               ============================================= */

            this.setAttribute(

                "data-state",

                "restart"

            );

        }


        /* =================================================
           IF RADIO IS PLAYING
           STOP MUSIC
           ================================================= */

        else {


            /* =============================================
               REMOVE PLAYER SOURCE
               ============================================= */

            clubPlayer.src =
                "";


            /* =============================================
               RESET BUTTON
               ============================================= */

            this.innerHTML =
                "▶ Play Music";


            /* =============================================
               RESET STATE
               ============================================= */

            this.setAttribute(

                "data-state",

                "off"

            );

        }

    }

);
