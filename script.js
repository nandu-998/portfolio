/* =====================================================
   PAGE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const pageOne =
        document.getElementById("pageOne");


    const pageTwo =
        document.getElementById("pageTwo");


    const nextButton =
        document.getElementById("nextButton");


    const previousButton =
        document.getElementById("previousButton");



    /* =================================================
       OPEN PAGE 2
    ================================================= */

    function openPageTwo() {

        pageOne.classList.add("hide");

        pageTwo.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =================================================
       RETURN PAGE 1
    ================================================= */

    function openPageOne() {

        pageTwo.classList.remove("show");

        pageOne.classList.remove("hide");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =================================================
       BUTTON EVENTS
    ================================================= */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            openPageTwo
        );

    }



    if (previousButton) {

        previousButton.addEventListener(
            "click",
            openPageOne
        );

    }



    /* =================================================
       KEYBOARD CONTROL
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "ArrowRight" &&
                !pageOne.classList.contains("hide")
            ) {

                openPageTwo();

            }


            if (
                event.key === "ArrowLeft" &&
                pageTwo.classList.contains("show")
            ) {

                openPageOne();

            }

        }
    );
});

/* =========================================
   PROFESSIONAL NOTE POPUP
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const noteOverlay = document.getElementById("noteOverlay");
    const noteClose = document.getElementById("noteClose");
    const noteContinue = document.getElementById("noteContinue");

    if (!noteOverlay) {
        return;
    }


    /* SHOW POPUP */

    setTimeout(function () {

        noteOverlay.classList.add("show");

        noteOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

    }, 700);


    /* CLOSE FUNCTION */

    function closeNote() {

        noteOverlay.classList.remove("show");

        noteOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* CLOSE BUTTON */

    if (noteClose) {

        noteClose.addEventListener(
            "click",
            closeNote
        );

    }


    /* CONTINUE BUTTON */

    if (noteContinue) {

        noteContinue.addEventListener(
            "click",
            closeNote
        );

    }


    /* CLICK OUTSIDE */

    noteOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === noteOverlay) {
                closeNote();
            }

        }
    );


    /* ESC KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                noteOverlay.classList.contains("show")
            ) {

                closeNote();

            }

        }
    );

});
