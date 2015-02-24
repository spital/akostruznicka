// JavaScript Popup 
$(document).ready(function() {
$('#toggle').toggle(
    function()
        {
        $('#search').animate({right: "-10px"}, 500);
        },
    function()
        {
        $('#search').animate({right: "-190px"}, 500);
        }
);

$('#toggle2').toggle(
    function()
        {
        $('#news').animate({right: "-10px"}, 500);
        },
    function()
        {
        $('#news').animate({right: "-265px"}, 500);
        }
);

$('#toggle3').toggle(
    function()
        {
        $('#newsletter').animate({left: "0px"}, 500);
        },
    function()
        {
        $('#newsletter').animate({left: "-213px"}, 500);
        }
);



});
