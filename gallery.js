/* =========================================
   CHANDU VM GALLERY
========================================= */


/* =========================================
   GALLERY DATA
========================================= */

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
            image: "assets/d4.jpg",
            title: "MANNEQUIN STYLING 04"
        },

        {
            image: "assets/d5.jpg",
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


/* =========================================
   STATE
========================================= */

let currentCategory =
    "planogram";

let currentIndex =
    0;


/* =========================================
   ELEMENTS
========================================= */

const galleryImage =
    document.getElementById(
        "galleryImage"
    );

const imageTitle =
    document.getElementById(
        "imageTitle"
    );

const currentNumber =
    document.getElementById(
        "currentNumber"
    );

const totalNumber =
    document.getElementById(
        "totalNumber"
    );

const imageLoading =
    document.getElementById(
        "imageLoading"
    );

const categoryButtons =
    document.querySelectorAll(
        ".category-btn"
    );

const previousImage =
    document.getElementById(
        "previousImage"
    );

const nextImage =
    document.getElementById(
        "nextImage"
    );

const fullscreenImage =
    document.getElementById(
        "fullscreenImage"
    );


/* =========================================
   CURRENT LIST
========================================= */

function getCurrentGallery() {

    return galleryData[
        currentCategory
    ];

}


/* =========================================
   PRELOAD
========================================= */

function preloadImage(
    index
) {

    const gallery =
        getCurrentGallery();


    if (
        index < 0 ||
        index >= gallery.length
    ) {

        return;

    }


    const image =
        new Image();


    image.decoding =
        "async";


    image.src =
        gallery[index].image;

}


/* =========================================
   PRELOAD NEARBY
========================================= */

function preloadNearby() {

    const gallery =
        getCurrentGallery();


    const next =
        (currentIndex + 1) %
        gallery.length;


    const previous =
        (
            currentIndex -
            1 +
            gallery.length
        ) %
        gallery.length;


    preloadImage(next);

    preloadImage(previous);

}


/* =========================================
   SHOW IMAGE
========================================= */

function showImage() {

    const gallery =
        getCurrentGallery();


    const item =
        gallery[currentIndex];


    if (!item) {

        return;

    }


    imageLoading.classList.add(
        "show"
    );


    galleryImage.classList.add(
        "loading"
    );


    const newImage =
        new Image();


    newImage.decoding =
        "async";


    newImage.onload =
        function () {

            galleryImage.src =
                item.image;


            galleryImage.alt =
                item.title;


            imageTitle.textContent =
                item.title;


            currentNumber.textContent =
                String(
                    currentIndex + 1
                ).padStart(2, "0");


            totalNumber.textContent =
                String(
                    gallery.length
                ).padStart(2, "0");


            imageLoading.classList.remove(
                "show"
            );


            requestAnimationFrame(
                () => {

                    galleryImage.classList.remove(
                        "loading"
                    );

                }
            );


            preloadNearby();

        };


    newImage.onerror =
        function () {

            console.error(
                "Image not found:",
                item.image
            );


            imageLoading.textContent =
                "IMAGE NOT FOUND";


            galleryImage.classList.remove(
                "loading"
            );

        };


    newImage.src =
        item.image;

}


/* =========================================
   CATEGORY CHANGE
========================================= */

categoryButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                if (
                    !galleryData[category]
                ) {

                    return;

                }


                currentCategory =
                    category;


                currentIndex =
                    0;


                categoryButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                showImage();

            }
        );

    }
);


/* =========================================
   NEXT
========================================= */

nextImage.addEventListener(
    "click",
    () => {

        const gallery =
            getCurrentGallery();


        currentIndex++;


        if (
            currentIndex >=
            gallery.length
        ) {

            currentIndex = 0;

        }


        showImage();

    }
);


/* =========================================
   PREVIOUS
========================================= */

previousImage.addEventListener(
    "click",
    () => {

        const gallery =
            getCurrentGallery();


        currentIndex--;


        if (
            currentIndex < 0
        ) {

            currentIndex =
                gallery.length - 1;

        }


        showImage();

    }
);


/* =========================================
   FULLSCREEN
========================================= */

fullscreenImage.addEventListener(
    "click",
    () => {

        if (
            galleryImage.requestFullscreen
        ) {

            galleryImage.requestFullscreen();

        }

    }
);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight"
        ) {

            nextImage.click();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousImage.click();

        }

    }
);


/* =========================================
   INITIAL LOAD
========================================= */

showImage();
