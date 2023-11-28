$(document).ready(function(){

// alert("hello world");
$('#btn').on ("click", function(){
    alert("Are you redy");
})
// show-Hide
$('#Hide').on ("click", function(){
    $('#h2').fadeOut();
});
$('#show').on ("click", function(){
    $('#h2').fadeIn();
});
$('#togg').on ("click", function(){
    $('#h2').fadeToggle(500);
});

$("p").on("click",function(){
    $(this).slideUp();
});

// slide-down
$("#flip").on("click",function(){
    $("#panel").slideDown("slow");
});
// enimation
$("button").on("click",function(){
    $("div").animate({ left:'250px'});
});

$( ".pb" ).append( "<strong>Hello</strong>" );
})
