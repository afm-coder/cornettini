/* =========================================================
   CROISSANT CLUB
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   CLUB RADIO
   ========================================================= */

const radioButton =
    document.getElementById("radioButton");

const clubPlayer =
    document.getElementById("clubplayer");


/* =========================================================
   RADIO BUTTON
   ========================================================= */

radioButton.addEventListener(
    "click",
    function () {


        /* =============================================
           PLAY MUSIC
           ============================================= */

        if (
            this.getAttribute("data-state") === "off"
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


        /* =============================================
           STOP MUSIC
           ============================================= */

        else {

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
