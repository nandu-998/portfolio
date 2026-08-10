/* =====================================================
   CONTACT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       PORTFOLIO LINK
    ================================================= */

    const portfolioURL =
        "https://nandu-998.github.io/portfolio/";


    const portfolioLink =
        document.getElementById("portfolioLink");


    const copyLinkBtn =
        document.getElementById("copyLinkBtn");


    if (portfolioLink) {
        portfolioLink.value = portfolioURL;
    }


    /* =================================================
       COPY LINK
    ================================================= */

    if (copyLinkBtn) {

        copyLinkBtn.addEventListener("click", async function () {

            try {

                await navigator.clipboard.writeText(
                    portfolioURL
                );

                copyLinkBtn.textContent = "COPIED ✓";

                setTimeout(function () {

                    copyLinkBtn.textContent = "COPY LINK";

                }, 1800);

            } catch (error) {

                portfolioLink.select();

                document.execCommand("copy");

                copyLinkBtn.textContent = "COPIED ✓";

                setTimeout(function () {

                    copyLinkBtn.textContent = "COPY LINK";

                }, 1800);

            }

        });

    }



    /* =================================================
       QR CODE
    ================================================= */

    const qrContainer =
        document.getElementById("qrcode");


    if (qrContainer) {

        qrContainer.innerHTML = "";


        if (typeof QRCode !== "undefined") {

            new QRCode(qrContainer, {

                text: portfolioURL,

                width: 230,

                height: 230,

                colorDark: "#000000",

                colorLight: "#ffffff",

                correctLevel: QRCode.CorrectLevel.H

            });

        } else {

            qrContainer.innerHTML =
                "<p style='color:#000;font-size:12px;text-align:center;'>QR library failed to load</p>";

        }

    }



    /* =================================================
       FORM ELEMENTS
    ================================================= */

    const jobChoice =
        document.getElementById("jobChoice");


    const feedbackChoice =
        document.getElementById("feedbackChoice");


    const jobFormSection =
        document.getElementById("jobFormSection");


    const feedbackFormSection =
        document.getElementById("feedbackFormSection");



    /* =================================================
       SHOW JOB FORM
    ================================================= */

    if (jobChoice) {

        jobChoice.addEventListener("click", function () {

            if (jobFormSection) {

                jobFormSection.classList.remove("hidden");

            }

            if (feedbackFormSection) {

                feedbackFormSection.classList.add("hidden");

            }

            jobFormSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    }



    /* =================================================
       SHOW FEEDBACK FORM
    ================================================= */

    if (feedbackChoice) {

        feedbackChoice.addEventListener("click", function () {

            if (feedbackFormSection) {

                feedbackFormSection.classList.remove("hidden");

            }

            if (jobFormSection) {

                jobFormSection.classList.add("hidden");

            }

            feedbackFormSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    }



    /* =================================================
       JOB FORM
    ================================================= */

    const jobForm =
        document.getElementById("jobForm");


    if (jobForm) {

        jobForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const formData =
                new FormData(jobForm);


            const brandName =
                formData.get("brandName");


            const managerName =
                formData.get("managerName");


            const companyEmail =
                formData.get("companyEmail");


            const contactNumber =
                formData.get("contactNumber");


            const jobRole =
                formData.get("jobRole");


            const offerDetails =
                formData.get("offerDetails");


            const subject =
                encodeURIComponent(
                    "Job Opportunity — " + jobRole
                );


            const body =
                encodeURIComponent(

`JOB OPPORTUNITY

Brand / Company:
${brandName}

HR / Manager:
${managerName}

Company Email:
${companyEmail}

Contact Number:
${contactNumber}

Job Role:
${jobRole}

Offer / Opportunity Details:
${offerDetails}
`
                );


            window.location.href =
                "mailto:chandur9989@gmail.com?subject="
                + subject
                + "&body="
                + body;

        });

    }



    /* =================================================
       FEEDBACK FORM
    ================================================= */

    const feedbackForm =
        document.getElementById("feedbackForm");


    if (feedbackForm) {

        feedbackForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const formData =
                    new FormData(feedbackForm);


                const brand =
                    formData.get("feedbackBrand");


                const name =
                    formData.get("feedbackName");


                const email =
                    formData.get("feedbackEmail");


                const improvement =
                    formData.get("improvement");


                const additional =
                    formData.get("additionalFeedback");


                const subject =
                    encodeURIComponent(
                        "Portfolio Feedback — " + brand
                    );


                const body =
                    encodeURIComponent(

`PORTFOLIO FEEDBACK

Brand:
${brand}

Name:
${name}

Email:
${email}

What Can Be Improved:
${improvement}

Additional Feedback:
${additional}
`
                    );


                window.location.href =
                    "mailto:chandur9989@gmail.com?subject="
                    + subject
                    + "&body="
                    + body;

            }
        );

    }


})