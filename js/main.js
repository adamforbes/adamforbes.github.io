$(document).ready(function(){
    $('.up-down').mouseover(function(){
        $('.default').stop().animate({height: 300}, 200);                        
    }).mouseout(function(){
        $('.default').stop().animate({height: 500}, 200);    
    })
});