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
            "CROISSANT CLUB: member-count element was not found."
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
           BUILD URL

           This uses the current GitHub Pages folder
           and adds a timestamp so the browser cannot
           simply reuse an old cached members.json.
           ================================================= */

        const membersURL =
            new URL(
                "members.json",
                window.location.href
            );


        membersURL.searchParams.set(
            "cache",
            Date.now()
        );


        console.log(
            "CROISSANT CLUB: Loading:",
            membersURL.href
        );


        /* =================================================
           FETCH MEMBERS.JSON
           ================================================= */

        const response =
            await fetch(

                membersURL.href,

                {
                    method:
                        "GET",

                    cache:
                        "no-store",

                    headers: {

                        "Cache-Control":
                            "no-cache"

                    }

                }

            );


        /* =================================================
           CHECK RESPONSE
           ================================================= */

        if (!response.ok) {

            throw new Error(

                "Could not load members.json. HTTP " +
                response.status

            );

        }


        /* =================================================
           READ JSON
           ================================================= */

        const data =
            await response.json();


        console.log(
            "CROISSANT CLUB: members.json returned:",
            data
        );


        /* =================================================
           VALIDATE MEMBER COUNT
           ================================================= */

        if (
            typeof data.members !== "number"
        ) {

            throw new Error(

                "members.json does not contain a valid 'members' number."

            );

        }


        /* =================================================
           DISPLAY CURRENT MEMBER COUNT
           ================================================= */

        memberCountElement.textContent =
            data.members + " 🥐";


        console.log(
            "CROISSANT CLUB: Member count updated to",
            data.members
        );


    }


    catch (error) {


        /* =================================================
           ERROR MESSAGE
           ================================================= */

        console.error(
            "CROISSANT CLUB: Could not load member count.",
            error
        );


        /* =================================================
           IMPORTANT:

           DON'T SILENTLY USE 86 ANYMORE.

           This makes it obvious if something goes wrong.
           ================================================= */

        memberCountElement.textContent =
            "⚠️ Error";


    }

}


/* =========================================================
   LOAD MEMBER COUNT
   ========================================================= */

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
       ===================================================== */

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
           ================================================= */

        const size =
            Math.random() * 5 + 8;


        sparkle.style.fontSize =
            size + "px";


        /* =================================================
           RANDOM ANIMATION DURATION
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
