/* =========================================
   CHANDU PORTFOLIO
   INDEX PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       PAGE ELEMENTS
    ====================================== */

    const pageOne =
        document.getElementById("pageOne");

    const pageTwo =
        document.getElementById("pageTwo");

    const nextButton =
        document.getElementById("nextButton");

    const previousButton =
        document.getElementById("previousButton");


    /* =====================================
       OPEN PAGE 02
    ====================================== */

    function openAboutPage() {

        pageOne.classList.remove("active");

        pageTwo.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =====================================
       OPEN PAGE 01
    ====================================== */

    function openCoverPage() {

        pageTwo.classList.remove("active");

        pageOne.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =====================================
       BUTTON EVENTS
    ====================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            openAboutPage
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            openCoverPage
        );

    }


    /* =====================================
       KEYBOARD NAVIGATION
    ====================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                if (
                    pageOne.classList.contains("active")
                ) {

                    openAboutPage();

                }

            }


            if (event.key === "ArrowLeft") {

                if (
                    pageTwo.classList.contains("active")
                ) {

                    openCoverPage();

                }

            }

        }
    );


    /* =====================================
       NOTE POPUP
    ====================================== */

    const noteOverlay =
        document.getElementById("noteOverlay");

    const noteClose =
        document.getElementById("noteClose");

    const noteContinue =
        document.getElementById("noteContinue");


    /* =====================================
       OPEN POPUP
    ====================================== */

    function openNote() {

        if (!noteOverlay) {
            return;
        }

        noteOverlay.classList.add("show");

        noteOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    /* =====================================
       CLOSE POPUP
    ====================================== */

    function closeNote() {

        if (!noteOverlay) {
            return;
        }

        noteOverlay.classList.remove("show");

        noteOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* =====================================
       POPUP BUTTONS
    ====================================== */

    if (noteClose) {

        noteClose.addEventListener(
            "click",
            closeNote
        );

    }


    if (noteContinue) {

        noteContinue.addEventListener(
            "click",
            closeNote
        );

    }


    /* =====================================
       CLICK OUTSIDE POPUP
    ====================================== */

    if (noteOverlay) {

        noteOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === noteOverlay
                ) {

                    closeNote();

                }

            }
        );

    }


    /* =====================================
       ESC KEY CLOSE POPUP
    ====================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeNote();

            }

        }
    );


    /* =====================================
       SHOW POPUP AFTER SHORT DELAY
    ====================================== */

    setTimeout(
        function () {

            openNote();

        },
        900
    );

});
