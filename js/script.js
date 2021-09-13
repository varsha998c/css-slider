window.addEventListener("load", () => {
    let open = document.querySelector("a.open-btn");
    let close = document.querySelector("a.close-btn");
    let slider = document.querySelector("nav.slider-container");
    open.addEventListener("click", () => {
        slider.classList.toggle("active");
    });
    close.addEventListener("click", () => {
        slider.classList.toggle("active");
    });
    $(".left-arrow").click(function(e) {
        e.preventDefault();
        $(".multiple-items").slick("slickPrev");
    });
    $(".right-arrow").click(function(e) {
        e.preventDefault();
        $(".multiple-items").slick("slickNext");
    });
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".variable-width").slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
