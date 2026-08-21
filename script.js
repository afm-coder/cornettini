 /* =========================================================
   CROISSANT CLUB
   COMPLETE JAVASCRIPT
   ================================================= */


/* =========================================================
   AUTOMATIC MEMBER COUNT
   ================================================= */


/* =========================================================
   FIND MEMBER COUNT ELEMENT
   ========================================================= */

const memberCountElement =
    document.getElementById(
        "member-count"
    );


/* =========================================================
   LOAD MEMBER COUNT
   ========================================================= */

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


        memberCountElement.textContent =
            "⚠️ Error";


    }

}


/* =========================================================
   LOAD MEMBER COUNT
   ========================================================= */

loadMemberCount();




/* =========================================================
   TITLED PLAYER
   ========================================================= */


/* =========================================================
   CHESS.COM USERNAME
   ========================================================= */

const titledPlayerUsername =
    "chanelinmyysl";


/* =========================================================
   FIND PLAYER ELEMENTS
   ========================================================= */

const titledPlayerAvatar =
    document.getElementById(
        "titled-player-avatar"
    );


const titledPlayerName =
    document.getElementById(
        "titled-player-name"
    );


const titledPlayerTitle =
    document.getElementById(
        "titled-player-title"
    );


const titledPlayerRapid =
    document.getElementById(
        "titled-player-rapid"
    );


const titledPlayerBlitz =
    document.getElementById(
        "titled-player-blitz"
    );


const titledPlayerBullet =
    document.getElementById(
        "titled-player-bullet"
    );


/* =========================================================
   FORMAT RATING
   ========================================================= */

function formatRating(
    rating
) {

    if (
        typeof rating !== "number"
    ) {

        return "—";

    }


    /*
     * Keep Chess.com ratings as plain numbers.
     *
     * Example:
     *
     * 2432
     *
     * NOT:
     *
     * 2,432
     */

    return String(
        rating
    );

}


/* =========================================================
   LOAD TITLED PLAYER
   ========================================================= */

async function loadTitledPlayer() {


    /* =====================================================
       MAKE SURE THE CARD EXISTS
       ===================================================== */

    if (
        !titledPlayerAvatar ||
        !titledPlayerName ||
        !titledPlayerTitle ||
        !titledPlayerRapid ||
        !titledPlayerBlitz ||
        !titledPlayerBullet
    ) {

        console.error(
            "CROISSANT CLUB: Titled player elements were not found."
        );

        return;

    }


    try {


        /* =================================================
           PLAYER PROFILE API
           ================================================= */

        const profileURL =
            "https://api.chess.com/pub/player/" +
            titledPlayerUsername;


        /* =================================================
           PLAYER STATS API
           ================================================= */

        const statsURL =
            "https://api.chess.com/pub/player/" +
            titledPlayerUsername +
            "/stats";


        /* =================================================
           FETCH BOTH AT THE SAME TIME
           ================================================= */

        const results =
            await Promise.all([

                fetch(
                    profileURL,
                    {
                        cache:
                            "no-store"
                    }
                ),

                fetch(
                    statsURL,
                    {
                        cache:
                            "no-store"
                    }
                )

            ]);


        const profileResponse =
            results[0];


        const statsResponse =
            results[1];


        /* =================================================
           CHECK RESPONSES
           ================================================= */

        if (
            !profileResponse.ok
        ) {

            throw new Error(
                "Chess.com profile API returned HTTP " +
                profileResponse.status
            );

        }


        if (
            !statsResponse.ok
        ) {

            throw new Error(
                "Chess.com stats API returned HTTP " +
                statsResponse.status
            );

        }


        /* =================================================
           READ JSON
           ================================================= */

        const profile =
            await profileResponse.json();


        const stats =
            await statsResponse.json();


        console.log(
            "CROISSANT CLUB: Chess.com profile:",
            profile
        );


        console.log(
            "CROISSANT CLUB: Chess.com stats:",
            stats
        );


        /* =================================================
           PROFILE PICTURE
           ================================================= */

        if (
            profile.avatar
        ) {

            titledPlayerAvatar.src =
                profile.avatar;

        }


        /* =================================================
           PROFILE NAME
           ================================================= */

        if (
            profile.name
        ) {

            titledPlayerName.textContent =
                profile.name;

        }


        /* =================================================
           CHESS TITLE
           ================================================= */

        if (
            profile.title
        ) {

            titledPlayerTitle.textContent =
                profile.title;

        }


        /* =================================================
           RAPID
           ================================================= */

        if (
            stats.chess_rapid &&
            typeof stats.chess_rapid.last?.rating === "number"
        ) {

            titledPlayerRapid.textContent =
                formatRating(
                    stats.chess_rapid.last.rating
                );

        }

        else {

            titledPlayerRapid.textContent =
                "—";

        }


        /* =================================================
           BLITZ
           ================================================= */

        if (
            stats.chess_blitz &&
            typeof stats.chess_blitz.last?.rating === "number"
        ) {

            titledPlayerBlitz.textContent =
                formatRating(
                    stats.chess_blitz.last.rating
                );

        }

        else {

            titledPlayerBlitz.textContent =
                "—";

        }


        /* =================================================
           BULLET
           ================================================= */

        if (
            stats.chess_bullet &&
            typeof stats.chess_bullet.last?.rating === "number"
        ) {

            titledPlayerBullet.textContent =
                formatRating(
                    stats.chess_bullet.last.rating
                );

        }

        else {

            titledPlayerBullet.textContent =
                "—";

        }


        console.log(
            "CROISSANT CLUB: Titled player loaded successfully."
        );


    }


    catch (error) {


        /* =================================================
           ERROR HANDLING
           ================================================= */

        console.error(
            "CROISSANT CLUB: Could not load titled player.",
            error
        );


        /* =================================================
           KEEP BASIC PROFILE INFORMATION
           ================================================= */

        titledPlayerName.textContent =
            "Radoslaw Gajek";


        titledPlayerTitle.textContent =
            "IM";


        titledPlayerRapid.textContent =
            "—";


        titledPlayerBlitz.textContent =
            "—";


        titledPlayerBullet.textContent =
            "—";


        /*
         * If the API fails, the card itself still works.
         * Clicking it still opens the Chess.com profile.
         */

    }

}


/* =========================================================
   LOAD TITLED PLAYER
   ========================================================= */

loadTitledPlayer();




/* =========================================================
   GOLDEN SPARKLE SYSTEM
   ========================================================= */


/* =========================================================
   FIND SPARKLE CONTAINER
   ========================================================= */

const sparkleContainer =
    document.getElementById(
        "sparkles"
    );


/* =========================================================
   MAKE SURE THE CONTAINER EXISTS
   ========================================================= */

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
