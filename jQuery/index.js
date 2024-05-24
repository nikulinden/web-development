// $("body").keydown(function(event) {
//     $("h1").html(event.key)
// });

$("button").on("click", function(){
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5}); // only take numaric values
    $("h1").slideUp(). slideDown().animate({opacity: 0.5});
});