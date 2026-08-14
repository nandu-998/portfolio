/* =========================================================
   CHANDU VM PORTFOLIO
   GALLERY JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GALLERY DATA
    ===================================================== */

    const galleryData = {

        planogram: [

            {
                image: "assets/p1.jpeg",
                title: "PLANOGRAM 01"
            },

            {
                image: "assets/p2.jpeg",
                title: "PLANOGRAM 02"
            },

            {
                image: "assets/p3.jpeg",
                title: "PLANOGRAM 03"
            },

            {
                image: "assets/p4.jpeg",
                title: "PLANOGRAM 04"
            },

            {
                image: "assets/p5.jpeg",
                title: "PLANOGRAM 05"
            },

            {
                image: "assets/p6.jpeg",
                title: "PLANOGRAM 06"
            },

            {
                image: "assets/p7.jpeg",
                title: "PLANOGRAM 07"
            }

        ],


        display: [

            {
                image: "assets/d1.jpg",
                title: "DISPLAY 01"
            },

            {
                image: "assets/d2.jpg",
                title: "DISPLAY 02"
            },

            {
                image: "assets/d3.jpg",
                title: "DISPLAY 03"
            },

            {
                image: "assets/d4.jpg",
                title: "DISPLAY 04"
            },

            {
                image: "assets/d5.jpg",
                title: "DISPLAY 05"
            },

            {
                image: "assets/d6.jpg",
                title: "DISPLAY 06"
            },

            {
                image: "assets/d7.jpg",
                title: "DISPLAY 07"
            },

            {
                image: "assets/d8.jpg",
                title: "DISPLAY 08"
            },

            {
                image: "assets/d9.jpg",
                title: "DISPLAY 09"
            },

            {
                image: "assets/d10.jpg",
                title: "DISPLAY 10"
            },

            {
                image: "assets/d11.jpg",
                title: "DISPLAY 11"
            },

            {
                image: "assets/d12.jpg",
                title: "DISPLAY 12"
            }

        ],


        mannequin: [

            {
                image: "assets/m1.jpg",
                title: "MANNEQUIN STYLING 01"
            },

            {
                image: "assets/m2.jpg",
                title: "MANNEQUIN STYLING 02"
            },

            {
                image: "assets/m3.jpg",
                title: "MANNEQUIN STYLING 03"
            },

            {
                image: "assets/m4.jpg",
                title: "MANNEQUIN STYLING 04"
            },

            {
                image: "assets/m5.jpg",
                title: "MANNEQUIN STYLING 05"
            },

            {
                image: "assets/m6.jpg",
                title: "MANNEQUIN STYLING 06"
            }

        ],


        nso: [

            {
                image: "assets/nso1.jpg",
                title: "NSO 01"
            },

            {
                image: "assets/nso2.jpg",
                title: "NSO 02"
            },

            {
                image: "assets/nso3.jpg",
                title: "NSO 03"
            },

            {
                image: "assets/nso4.jpg",
                title: "NSO 04"
            },

            {
                image: "assets/nso5.jpg",
                title: "NSO 05"
            },

            {
                image: "assets/nso6.jpg",
                title: "NSO 06"
            }

        ]

    };


    /* =====================================================
       CURRENT STATE
    ===================================================== */

    let currentCategory = "planogram";

    let currentIndex = 0;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const galleryImage =
        document.getElementById("galleryImage");


    const galleryTitle =
        document.getElementById("imageTitle");


    const currentNumber =
        document.getElementById("currentNumber");


    const totalNumber =
        document.getElementById("totalNumber");


    const imageLoading =
        document.getElementById("imageLoading");


    const imageFrame =
        document.getElementById("imageFrame");


    const previousButton =
        document.getElementById("previousImage");


    const nextButton =
        document.getElementById("nextImage");


    const fullscreenButton =
        document.getElementById("fullscreenImage");


    const categoryButtons =
        document.querySelectorAll(".category-btn");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !galleryImage ||
        !galleryTitle ||
        !currentNumber ||
        !totalNumber ||
        !imageLoading ||
        !imageFrame
    ) {

        console.error(
            "Gallery error: Required HTML elements are missing."
        );

        return;
    }


    /* =====================================================
       GET CURRENT ITEMS
    ===================================================== */

    function getCurrentItems() {

        return galleryData[currentCategory] || [];

    }


    /* =====================================================
       PRELOAD IMAGE
    ===================================================== */

    function preloadImage(src) {

        return new Promise(function (resolve, reject) {

            const img = new Image();

            img.onload = function () {

                resolve(img);

            };

            img.onerror = function () {

                reject(
                    new Error(
                        "Image could not load: " + src
                    )
                );

            };

            img.src = src;

        });

    }


    /* =====================================================
       SHOW IMAGE
    ===================================================== */

    async function showImage() {

        const items = getCurrentItems();

        if (!items.length) {

            console.error(
                "No images found for category:",
                currentCategory
            );

            return;

        }


        const item = items[currentIndex];

        if (!item) {
            return;
        }


        /* LOADING */

        galleryImage.classList.remove("loaded");

        imageLoading.classList.remove("hidden");


        try {

            await preloadImage(item.image);


            /*
             * Small delay creates a smooth
             * image transition.
             */

            requestAnimationFrame(function () {

                galleryImage.src = item.image;

                galleryImage.alt = item.title;

                galleryTitle.textContent =
                    item.title;


                currentNumber.textContent =
                    String(currentIndex + 1)
                        .padStart(2, "0");


                totalNumber.textContent =
                    String(items.length)
                        .padStart(2, "0");


                galleryImage.onload =
                    function () {

                        galleryImage.classList.add(
                            "loaded"
                        );

                        imageLoading.classList.add(
                            "hidden"
                        );

                    };

            });


        } catch (error) {

            console.error(error);

            imageLoading.textContent =
                "IMAGE NOT FOUND";

            galleryImage.classList.remove(
                "loaded"
            );

        }

    }


    /* =====================================================
       CATEGORY SWITCH
    ===================================================== */

    function changeCategory(category) {

        if (!galleryData[category]) {

            console.error(
                "Unknown category:",
                category
            );

            return;

        }


        currentCategory = category;

        currentIndex = 0;


        /* Update active button */

        categoryButtons.forEach(
            function (button) {

                const isActive =
                    button.dataset.category ===
                    category;

                button.classList.toggle(
                    "active",
                    isActive
                );

            }
        );


        /* Show first image */

        showImage();

    }


    /* =====================================================
       CATEGORY BUTTON CLICK
    ===================================================== */

    categoryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const category =
                        button.dataset.category;

                    changeCategory(category);

                }
            );

        }
    );


    /* =====================================================
       NEXT IMAGE
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                const items =
                    getCurrentItems();

                if (!items.length) {
                    return;
                }


                currentIndex++;

                if (
                    currentIndex >=
                    items.length
                ) {

                    currentIndex = 0;

                }


                showImage();

            }
        );

    }


    /* =====================================================
       PREVIOUS IMAGE
    ===================================================== */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                const items =
                    getCurrentItems();

                if (!items.length) {
                    return;
                }


                currentIndex--;

                if (currentIndex < 0) {

                    currentIndex =
                        items.length - 1;

                }


                showImage();

            }
        );

    }


    /* =====================================================
       FULLSCREEN
    ===================================================== */

    async function openFullscreen() {

        try {

            if (
                !document.fullscreenElement
            ) {

                await imageFrame.requestFullscreen();

            } else {

                await document.exitFullscreen();

            }

        } catch (error) {

            /*
             * Fallback for browsers that
             * block fullscreen.
             */

            imageFrame.classList.toggle(
                "fullscreen-mode"
            );

        }

    }


    if (fullscreenButton) {

        fullscreenButton.addEventListener(
            "click",
            openFullscreen
        );

    }


    /* =====================================================
       CLICK IMAGE = FULLSCREEN
    ===================================================== */

    imageFrame.addEventListener(
        "click",
        function (event) {

            /*
             * Don't trigger when clicking
             * browser fullscreen controls.
             */

            if (
                event.target === galleryImage ||
                event.target === imageFrame
            ) {

                openFullscreen();

            }

        }
    );


    /* =====================================================
       FULLSCREEN CHANGE
    ===================================================== */

    document.addEventListener(
        "fullscreenchange",
        function () {

            if (
                document.fullscreenElement
            ) {

                imageFrame.classList.add(
                    "fullscreen-mode"
                );

            } else {

                imageFrame.classList.remove(
                    "fullscreen-mode"
                );

            }

        }
    );


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            /*
             * Don't interfere while typing
             * inside an input.
             */

            const tag =
                document.activeElement.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA"
            ) {

                return;

            }


            if (
                event.key === "ArrowRight"
            ) {

                if (nextButton) {

                    nextButton.click();

                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                if (previousButton) {

                    previousButton.click();

                }

            }


            if (
                event.key === "Escape"
            ) {

                if (
                    document.fullscreenElement
                ) {

                    document.exitFullscreen();

                }

                imageFrame.classList.remove(
                    "fullscreen-mode"
                );

            }

        }
    );


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    imageFrame.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    imageFrame.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const distance =
            touchEndX - touchStartX;


        /*
         * Minimum swipe distance
         */

        if (Math.abs(distance) < 50) {
            return;
        }


        if (distance < 0) {

            if (nextButton) {
                nextButton.click();
            }

        } else {

            if (previousButton) {
                previousButton.click();
            }

        }

    }


    /* =====================================================
       INITIAL LOAD
    ===================================================== */

    changeCategory("planogram");


});
