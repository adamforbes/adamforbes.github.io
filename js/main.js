$(document).ready(function(){
    $('.up-down').mouseover(function(){
        $('.default').stop().animate({
            height: 0    
        }, 200);                        
    }).mouseout(function(){
        $('.default').stop().animate({
            height: 200 
        }, 200)    
    })
});