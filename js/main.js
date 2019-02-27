

$(document).ready(function(){
	
	
	$("#loading .spinner").fadeOut(2000 , function(){
		
		$("#loading").fadeOut(2000 , function(){
			
			$("body").css("overflow","auto")
		})
	})
})

$(".options-container > i").click(function(){

	$(".options").toggle();
})


var lis = $(".options ul li");

lis.eq(0).css("backgroundColor","yellow")
lis.eq(1).css("backgroundColor","#09c")
lis.eq(2).css("backgroundColor","teal")
lis.eq(3).css("backgroundColor","tomato")
lis.click(function(){
	var color = $(this).css("backgroundColor");
	$("h1,h2,h3,p").css("color",color)
})
	var font = 16;

$("#font-plus").click(function(){
		font = font + 1;
	$("p").css("fontSize",font)
})
$("#font-minus").click(function(){
		font = font - 1;
	$("p").css("fontSize",font)

})









