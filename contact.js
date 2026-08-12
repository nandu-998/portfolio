/* =========================================================
   CHANDU CONTACT PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================
           PORTFOLIO LINK
        ====================================== */

        const portfolioLink =
            "https://nandu-998.github.io/portfolio/";


        /* =====================================
           COPY LINK
        ====================================== */

        const copyButton =
            document.getElementById(
                "copyLinkBtn"
            );


        if (copyButton) {

            copyButton.addEventListener(
                "click",
                async () => {

                    try {

                        await navigator.clipboard.writeText(
                            portfolioLink
                        );

                        copyButton.textContent =
                            "COPIED ✓";


                        setTimeout(
                            () => {

                                copyButton.textContent =
                                    "COPY";

                            },
                            1800
                        );

                    } catch (error) {

                        /* Fallback */

                        const input =
                            document.getElementById(
                                "portfolioLink"
                            );

                        input.select();

                        document.execCommand(
                            "copy"
                        );

                        copyButton.textContent =
                            "COPIED ✓";

                    }

                }
            );

        }


        /* =====================================
           SHARE
        ====================================== */

        const shareButton =
            document.getElementById(
                "shareBtn"
            );


        if (shareButton) {

            shareButton.addEventListener(
                "click",
                async () => {

                    if (
                        navigator.share
                    ) {

                        try {

                            await navigator.share({

                                title:
                                    "CHANDU — Visual Merchandising Portfolio",

                                text:
                                    "View my Visual Merchandising Portfolio.",

                                url:
                                    portfolioLink

                            });

                        } catch (error) {

                            /* User cancelled share */

                        }

                    } else {

                        try {

                            await navigator.clipboard.writeText(
                                portfolioLink
                            );

                            shareButton.textContent =
                                "LINK COPIED ✓";


                            setTimeout(
                                () => {

                                    shareButton.textContent =
                                        "SHARE PORTFOLIO";

                                },
                                1800
                            );

                        } catch (error) {

                            window.prompt(
                                "Copy my portfolio link:",
                                portfolioLink
                            );

                        }

                    }

                }
            );

        }


        /* =====================================
           QR CODE
        ====================================== */

        const qrContainer =
            document.getElementById(
                "qrcode"
            );


        if (
            qrContainer &&
            typeof QRCode !== "undefined"
        ) {

            qrContainer.innerHTML = "";


            new QRCode(
                qrContainer,
                {

                    text:
                        portfolioLink,

                    width:
                        150,

                    height:
                        150,

                    colorDark:
                        "#000000",

                    colorLight:
                        "#ffffff",

                    correctLevel:
                        QRCode.CorrectLevel.H

                }
            );

        }


        /* =====================================
           FEEDBACK FORM
        ====================================== */

        const feedbackForm =
            document.getElementById(
                "feedbackForm"
            );


        const feedbackStatus =
            document.getElementById(
                "feedbackStatus"
            );


        if (feedbackForm) {

            feedbackForm.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();


                    const name =
                        document
                            .getElementById(
                                "feedbackName"
                            )
                            .value
                            .trim();


                    const email =
                        document
                            .getElementById(
                                "feedbackEmail"
                            )
                            .value
                            .trim();


                    const brand =
                        document
                            .getElementById(
                                "feedbackBrand"
                            )
                            .value
                            .trim();


                    const message =
                        document
                            .getElementById(
                                "feedbackMessage"
                            )
                            .value
                            .trim();


                    /* VALIDATION */

                    if (
                        !name ||
                        !email ||
                        !message
                    ) {

                        feedbackStatus.textContent =
                            "Please complete all required fields.";

                        return;

                    }


                    /* =================================
                       EMAIL CONTENT
                    ================================= */

                    const subject =
                        encodeURIComponent(
                            "Portfolio Feedback — " +
                            name
                        );


                    const body =
                        encodeURIComponent(

                            "Hello Chandu,\n\n" +

                            "I would like to share feedback about your portfolio.\n\n" +

                            "Name: " +
                            name +
                            "\n" +

                            "Email: " +
                            email +
                            "\n" +

                            "Brand / Company: " +
                            (
                                brand ||
                                "Not provided"
                            ) +
                            "\n\n" +

                            "Feedback:\n" +
                            message +
                            "\n\n" +

                            "Portfolio:\n" +
                            portfolioLink

                        );


                    /* =================================
                       OPEN EMAIL
                    ================================= */

                    window.location.href =
                        "mailto:chandur9989@gmail.com" +
                        "?subject=" +
                        subject +
                        "&body=" +
                        body;


                    /* =================================
                       STATUS
                    ================================= */

                    feedbackStatus.textContent =
                        "Opening your email app...";


                    setTimeout(
                        () => {

                            feedbackStatus.textContent =
                                "Please press Send in your email app.";

                        },
                        1500
                    );

                }
            );

        }

    }
);