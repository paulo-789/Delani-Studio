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
$("#aaa").click(function(){
    $(this).hide();
    $(".bbb").show();
})
$(".bbb").click(function(){
    $(this).hide();
    $("#aaa").show();
})
 $("#mg1").hover(function(){
     $(".overlay1").show();
 })
 $("#mg1").mouseleave(function(){
     $(".overlay1").hide(); 
 });
 $("#mg2").hover(function(){
    $(".overlay2").show();
});
$("#mg2").mouseleave(function(){
    $(".overlay2").hide();
})
$("#mg3").hover(function(){
    $(".overlay3").show();
})
$("#mg3").mouseleave(function(){
    $(".overlay3").hide();
}) 
$("#mg4").hover(function(){
    $(".overlay4").show();
 })
 $("#mg4").mouseleave(function(){
     $(".overlay4").hide(); 
 });
 $("#mg5").hover(function(){
     $(".overlay5").show();
 })
 $("#mg5").mouseleave(function(){
     $(".overlay5").hide(); 
 });
 $("#mg6").hover(function(){
     $(".overlay6").show();
 })
 $("#mg6").mouseleave(function(){
     $(".overlay6").hide(); 
 });
 $("#mg7").hover(function(){
     $(".overlay7").show();
 })
 $("#mg7").mouseleave(function(){
     $(".overlay7").hide(); 
 });
 $("#mg8").hover(function(){
   $(".overlay8").show();
 })
$("#mg8").mouseleave(function(){
    $(".overlay8").hide(); 
 });

$("#submit").click(function(){
  var Name=$("#name").val();
  var Email=$("#email").val();
  var key='1502afa24976cda675f9061a291bea84-us4'
              var Text=$("#message").val();
            if (Name==""&&Email==""&&Text==""){
              alert("please go back and input the correct credentials!")
            }
              else{
   alert( "hello" +"  "  +  Name  + "! " +  "We have received your message.Thank you for reaching out to us")
  }
})
})