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
   FILLED STAR TYPES ONLY
   =========================================================

   IMPORTANT:
   The hollow ✧ star has been completely removed.

   Every star spawned by this system is filled.
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
       CHOOSE FILLED STAR
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
       
       Keep stars safely inside the sidebar.
       ===================================================== */

    sparkle.style.left =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM VERTICAL POSITION
       
       Keep stars safely inside the rounded border.
       ===================================================== */

    sparkle.style.top =
        (
            Math.random() * 94 + 3
        ) + "%";


    /* =====================================================
       RANDOM STAR SIZE
       
       ORIGINAL:
       7px → 13px

       NEW:
       9px → 15px

       Just a little bigger.
       ===================================================== */

    const size =
        Math.random() * 6 + 9;


    sparkle.style.fontSize =
        size + "px";


    /* =====================================================
       RANDOM ANIMATION DURATION
       
       Slow enough to feel smooth.
       ===================================================== */

    const duration =
        Math.random() * 2.2 + 2.8;


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
       REMOVE AFTER ANIMATION
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
   =========================================================

   Starts quickly when the page loads.
   ========================================================= */

for (

    let i = 0;

    i < 14;

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

   More stars than the original version,
   but still small and elegant.
   ========================================================= */

setInterval(

    function () {

        createSparkle();

    },

    400

);


/* =========================================================
   SECONDARY STAR GENERATION
   =========================================================

   Occasionally adds an extra star so the sidebar
   feels alive without becoming completely flooded.
   ========================================================= */

setInterval(

    function () {

        if (
            Math.random() < 0.75
        ) {

            createSparkle();

        }

    },

    850

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
           CURRENT STATE = OFF
           
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
               CHANGE BUTTON TEXT
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
           CURRENT STATE = RESTART
           
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
