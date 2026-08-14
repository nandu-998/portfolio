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