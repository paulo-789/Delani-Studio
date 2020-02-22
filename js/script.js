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

$("#submit").click(function(){
  var Name=$("#name").val();
  var Email=$("#email").val();
  var Text=$("#message").val();
if (Name==""&&Email==""&&Text==""){
  alert("please fill the form corect details")
}
  else{
   alert("hello" + Name + "we  have recived your massage")
  }
})
})