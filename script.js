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

   FILLED STARS ONLY.

   The hollow ✧ has been removed.
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

       KEEP EVERYTHING INSIDE SIDEBAR
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
   IMPORTANT
   =========================================================

   THERE IS NO MUSIC JAVASCRIPT HERE.

   The music button is handled directly by its inline
   onclick in index.html.

   This is intentional because that exact method was
   working in your original Chess.com sidebar.
   ========================================================= */
