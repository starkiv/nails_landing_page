$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    // Fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    })

    function checkScroll(scrollOffset) {

        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= introH) {
            header.addClass("header_fixed");
        } else {
            header.removeClass("header_fixed");
        }

    }


    // Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });



    // Menu nav toggle
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    //Collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('collapse');

        $this.toggleClass("active");
    })

});
















