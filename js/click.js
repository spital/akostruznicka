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
        $('#page').animate({left: "171px"}, 500);
        },
    function()
        {
        $('#page').animate({left: "0px"}, 500);
        }
);

$('#li3').toggle(
    function()
        {
        $('#page').animate({left: "171px"}, 500);
        },
    function()
        {
        $('#page').animate({left: "0px"}, 500);
        }
);

$('#logo').click(function(){  
 window.location="index.php";
});

});
