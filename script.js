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
   SPARKLE TYPES
   =========================================================

   ONLY FILLED STARS ARE USED.

   The hollow ✧ star has been removed completely.
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
       CREATE SPAN ELEMENT
       ===================================================== */

    const sparkle =
        document.createElement(
            "span"
        );


    /* =====================================================
       ADD SPARKLE CLASS
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
       
       This keeps the stars comfortably inside the
       rounded rainbow border.
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
       
       FINAL SIZE:
       
       10px → 16px
       
       This is larger than the original stars,
       but nowhere near the giant version.
       ===================================================== */

    const size =
        Math.random() * 6 + 10;


    sparkle.style.fontSize =
        size + "px";


    /* =====================================================
       RANDOM ANIMATION DURATION
       
       2.5 → 5 seconds
       
       Gives the stars a nice relaxed twinkle.
       ===================================================== */

    const duration =
        Math.random() * 2.5 + 2.5;


    sparkle.style.setProperty(

        "--duration",

        duration + "s"

    );


    /* =====================================================
       ADD SPARKLE TO PAGE
       ===================================================== */

    sparkleContainer.appendChild(
        sparkle
    );


    /* =====================================================
       REMOVE SPARKLE AFTER ANIMATION
       
       Prevents thousands of old stars from accumulating.
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

   These appear when the page first loads.

   9 stars gives the effect something visible immediately
   without flooding the sidebar.
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

   This keeps the effect active while maintaining a
   relatively clean look.
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
   RADIO BUTTON CLICK HANDLER
   ========================================================= */

radioButton.addEventListener(

    "click",

    function () {


        /* =================================================
           CHECK CURRENT RADIO STATE
           ================================================= */

        if (

            this.getAttribute(
                "data-state"
            ) === "off"

        ) {


            /* =============================================
               START MUSIC
               ============================================= */


            /* =============================================
               LOAD YOUTUBE VIDEO
               ============================================= */

            clubPlayer.src =
                "https://www.youtube.com/embed/8F2s8ivKXNY?autoplay=1";


            /* =============================================
               CHANGE BUTTON TEXT
               ============================================= */

            this.innerHTML =
                "⟳ Restart";


            /* =============================================
               CHANGE RADIO STATE
               ============================================= */

            this.setAttribute(

                "data-state",

                "restart"

            );

        }


        /* =================================================
           RADIO ALREADY RUNNING
           
           STOP / RESET
           ================================================= */

        else {


            /* =============================================
               REMOVE YOUTUBE SOURCE
               ============================================= */

            clubPlayer.src =
                "";


            /* =============================================
               RESET BUTTON TEXT
               ============================================= */

            this.innerHTML =
                "▶ Play Music";


            /* =============================================
               RESET RADIO STATE
               ============================================= */

            this.setAttribute(

                "data-state",

                "off"

            );

        }

    }

);
