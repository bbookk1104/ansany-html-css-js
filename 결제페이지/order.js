$(".order-toggle").children().eq(0).on("click",function(){
    $(".orderer").slideToggle(300);
    $(this).toggleClass("toggle-arrows");
    
});
$(".order-toggle").children().eq(1).on("click",function(){
  $(".delivery").slideToggle(300);
  $(this).css("transform","rotate(180deg)");
});
$(".order-toggle").children().eq(2).on("click",function(){
  $(".discount").slideToggle(300);
  $(this).css("transform","rotate(180deg)");
});

$("#payment").on("click",function(){
  if($("#payment-agree").is(":checked")){
    location.href="/order_complete.html";
  }else{
    alert("필수확인 항목을 확인해 주세요.");
  }
});
// 주소 api
function execPostCode(){
  daum.postcode.load(function(){
    new daum.Postcode({
      oncomplete: function(data){

        // $("#sample4_postcode").val();
        $("#sample4_Address").val(data.zonecode);
        $("#sample4_detailAddress").focus();
      }
    }).open();
  });
}

