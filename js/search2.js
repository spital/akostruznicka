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

$('#opal').click(function(){  
 window.location="opal";
});
$('#amethyst').click(function(){  
 window.location="amethyst";
});
$('#link_last').click(function(){  
 window.location="saphire";
});

$('#b1').click(function(){  
 window.location="fotogalerie/opal";
});
$('#b2').click(function(){  
 window.location="fotogalerie/amethyst";
});
$('#b3').click(function(){  
 window.location="fotogalerie/saphire";
});

});
