/* =========================================
   CROISSANT CLUB
   JAVASCRIPT
   ========================================= */


/* =========================================
   RANDOM SPARKLE SYSTEM
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
   CREATE A SPARKLE
   ========================================= */

function createSparkle() {


    /* Create element */

    const sparkle =
        document.createElement("div");


    /* Give it the sparkle class */

    sparkle.classList.add("sparkle");


    /* Pick random sparkle symbol */

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
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 100 + "%";


    /* =========================================
       RANDOM SIZE
       ========================================= */

    const size =
        Math.random() * 10 + 7;


    sparkle.style.fontSize =
        size + "px";


    /* =========================================
       RANDOM ANIMATION DURATION
       ========================================= */

    const duration =
        Math.random() * 2.5 + 2.5;


    sparkle.style.setProperty(
        "--duration",
        duration + "s"
    );


    /* =========================================
       RANDOM SLIGHT ROTATION
       ========================================= */

    sparkle.style.transform =
        "rotate(" +
        Math.random() * 90 +
        "deg)";


    /* =========================================
       ADD TO PAGE
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

        duration * 1000

    );

}


/* =========================================
   INITIAL SPARKLES
   ========================================= */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(

        createSparkle,

        Math.random() * 3000

    );

}


/* =========================================
   CONTINUOUS SPARKLES
   ========================================= */

setInterval(

    () => {

        createSparkle();

    },

    500

);


/* =========================================
   CLUB RADIO
   ========================================= */

const radioButton =
    document.getElementById("radioButton");


const clubPlayer =
    document.getElementById("clubplayer");


/* =========================================
   RADIO BUTTON CLICK
   ========================================= */

radioButton.addEventListener(
    "click",
    function () {


        /* =====================================
           PLAY
           ===================================== */

        if (
            this.getAttribute("data-state")
            === "off"
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
           STOP / RESET
           ===================================== */

        else if (
            this.getAttribute("data-state")
            === "restart"
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
