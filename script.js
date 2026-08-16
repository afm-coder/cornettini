/* =========================================================
   CROISSANT CLUB
   COMPLETE JAVASCRIPT
   ================================================= */


/* =========================================================
   AUTOMATIC MEMBER COUNT
   ================================================= */


/* =========================================================
   FIND MEMBER COUNT ELEMENT
   ================================================= */

const memberCountElement =
    document.getElementById(
        "member-count"
    );


/* =========================================================
   LOAD MEMBER COUNT
   ================================================= */

async function loadMemberCount() {


    /* =====================================================
       MAKE SURE ELEMENT EXISTS
       ===================================================== */

    if (!memberCountElement) {

        console.error(
            "Member count element was not found."
        );

        return;

    }


    /* =====================================================
       SHOW LOADING STATE
       ===================================================== */

    memberCountElement.textContent =
        "Loading... 🥐";


    try {


        /* =================================================
           FETCH MEMBERS.JSON

           A timestamp is added to prevent the browser
           from using an old cached copy.
           ================================================= */

        const response =
            await fetch(

                "members.json?t=" +
                Date.now(),

                {
                    cache:
                        "no-store"
                }

            );


        /* =================================================
           CHECK RESPONSE
           ================================================= */

        if (!response.ok) {

            throw new Error(

                `Could not load members.json (${response.status})`

            );

        }


        /* =================================================
           READ JSON
           ================================================= */

        const data =
            await response.json();


        /* =================================================
           CHECK MEMBER COUNT
           ================================================= */

        if (
            typeof data.members !== "number"
        ) {

            throw new Error(
                "members.json does not contain a valid member count."
            );

        }


        /* =================================================
           DISPLAY MEMBER COUNT
           ================================================= */

        memberCountElement.textContent =
            data.members + " 🥐";


        /* =================================================
           CONSOLE MESSAGE
           ================================================= */

        console.log(
            "Croissant Club members:",
            data.members
        );


    }


    catch (error) {


        /* =================================================
           ERROR STATE
           ================================================= */

        console.error(
            "Could not load member count:",
            error
        );


        memberCountElement.textContent =
            "86 🥐";


    }

}


/* =========================================================
   LOAD MEMBER COUNT IMMEDIATELY
   ================================================= */

loadMemberCount();




/* =========================================================
   GOLDEN SPARKLE SYSTEM
   ================================================= */


/* =========================================================
   FIND SPARKLE CONTAINER
   ================================================= */

const sparkleContainer =
    document.getElementById(
        "sparkles"
    );


/* =========================================================
   MAKE SURE THE CONTAINER EXISTS
   ================================================= */

if (sparkleContainer) {


    /* =====================================================
       SPARKLE TYPES
       ===================================================== */

    const sparkleTypes = [

        "✦",

        "✦",

        "✦",

        "✦",

        "⋆"

    ];


    /* =====================================================
       CREATE SPARKLE
       ================================================= */

    function createSparkle() {


        /* =================================================
           CREATE SPAN
           ================================================= */

        const sparkle =
            document.createElement(
                "span"
            );


        /* =================================================
           ADD CLASS
           ================================================= */

        sparkle.className =
            "sparkle";


        /* =================================================
           CHOOSE RANDOM STAR
           ================================================= */

        sparkle.textContent =
            sparkleTypes[
                Math.floor(
                    Math.random() *
                    sparkleTypes.length
                )
            ];


        /* =================================================
           RANDOM HORIZONTAL POSITION
           ================================================= */

        sparkle.style.left =
            (
                Math.random() * 94 + 3
            ) + "%";


        /* =================================================
           RANDOM VERTICAL POSITION
           ================================================= */

        sparkle.style.top =
            (
                Math.random() * 94 + 3
            ) + "%";


        /* =================================================
           RANDOM STAR SIZE

           8px → 13px
           ================================================= */

        const size =
            Math.random() * 5 + 8;


        sparkle.style.fontSize =
            size + "px";


        /* =================================================
           RANDOM ANIMATION DURATION

           2.5s → 5s
           ================================================= */

        const duration =
            Math.random() * 2.5 + 2.5;


        sparkle.style.setProperty(

            "--duration",

            duration + "s"

        );


        /* =================================================
           ADD STAR TO SIDEBAR
           ================================================= */

        sparkleContainer.appendChild(
            sparkle
        );


        /* =================================================
           REMOVE STAR AFTER ANIMATION
           ================================================= */

        setTimeout(

            function () {

                sparkle.remove();

            },

            (duration * 1000) + 200

        );

    }


    /* =====================================================
       INITIAL STAR BURST
       ===================================================== */

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


    /* =====================================================
       CONTINUOUS STAR GENERATION
       ===================================================== */

    setInterval(

        function () {

            createSparkle();

        },

        700

    );

}
