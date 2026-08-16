/* =========================================================
   CROISSANT CLUB
   AUTOMATIC MEMBER COUNT UPDATER
   ========================================================= */


/* =========================================================
   IMPORT FILE SYSTEM
   ========================================================= */

const fs = require("fs");


/* =========================================================
   CHESS.COM CLUB API
   ========================================================= */

const API_URL =
    "https://api.chess.com/pub/club/club-dei-cornettini";


/* =========================================================
   MEMBERS JSON FILE
   ========================================================= */

const OUTPUT_FILE =
    "members.json";


/* =========================================================
   MAIN FUNCTION
   ========================================================= */

async function updateMemberCount() {

    console.log(
        "========================================"
    );

    console.log(
        "CROISSANT CLUB MEMBER COUNT UPDATER"
    );

    console.log(
        "========================================"
    );

    console.log(
        ""
    );


    /* =====================================================
       FETCH CHESS.COM API
       ===================================================== */

    console.log(
        "Fetching club information from Chess.com..."
    );


    const response =
        await fetch(
            API_URL,
            {
                headers: {
                    "User-Agent":
                        "CroissantClubMemberCounter/1.0"
                }
            }
        );


    /* =====================================================
       CHECK RESPONSE
       ===================================================== */

    if (!response.ok) {

        throw new Error(

            `Chess.com API returned ${response.status}`

        );

    }


    /* =====================================================
       CONVERT RESPONSE TO JSON
       ===================================================== */

    const data =
        await response.json();


    /* =====================================================
       GET MEMBER COUNT
       ===================================================== */

    const memberCount =
        data.members_count;


    /* =====================================================
       MAKE SURE MEMBER COUNT EXISTS
       ===================================================== */

    if (
        typeof memberCount !== "number"
    ) {

        throw new Error(
            "Could not find members_count in Chess.com API response."
        );

    }


    /* =====================================================
       CREATE OUTPUT
       ===================================================== */

    const output = {

        members:
            memberCount

    };


    /* =====================================================
       WRITE MEMBERS.JSON
       ===================================================== */

    fs.writeFileSync(

        OUTPUT_FILE,

        JSON.stringify(
            output,
            null,
            4
        ) + "\n",

        "utf8"

    );


    /* =====================================================
       SUCCESS MESSAGE
       ===================================================== */

    console.log(
        ""
    );

    console.log(
        `Current member count: ${memberCount}`
    );

    console.log(
        `Updated ${OUTPUT_FILE}`
    );

    console.log(
        ""
    );

    console.log(
        "========================================"
    );

    console.log(
        "UPDATE COMPLETE"
    );

    console.log(
        "========================================"
    );

}


/* =========================================================
   RUN
   ========================================================= */

updateMemberCount()

    .catch(

        error => {

            console.error(
                ""
            );

            console.error(
                "ERROR:"
            );

            console.error(
                error
            );

            process.exit(1);

        }

    );
