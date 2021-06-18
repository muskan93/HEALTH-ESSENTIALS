$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

  });

  var backtotop = document.getElementById("topbtn");

// Currently not working
// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
//         backtotop.style.display = "block";
//     else
//         backtotop.style.display = "none";
// }

function gototop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}