$(document).ready(function(){
    $("#give").click(function(){
        $(this).hide();
        $(".sss").show();
    });
    $(".sss").click(function(){
        $(this).hide();
        $("#give").show();
    });
$("#ccc").click(function(){
    $(this).hide();
    $(".kkk").show();
})
$(".kkk").click(function(){
    $(this).hide();
    $("#ccc").show();
})



});