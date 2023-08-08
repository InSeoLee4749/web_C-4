$(document).ready(function(){

    $(".notice li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })

    setInterval(function(){
        $(".slid-wrapper").animate({"marginLeft" : -800},400,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-left",0)
        })
    },3000)
    
    
})