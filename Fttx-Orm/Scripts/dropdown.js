$(document).ready(function () {
    $(".Jdropdown").each(function () {
    //    $(this).children(".options").children("ul").children("li:first-child").attr("onclick", "gonder('')");
    });

	$(".Jdropdown ul li").click(function(){
	      $(this).parentsUntil().children('span:first').text($(this).text());
	       
	    //$(this).parentsUntil().children("input[type='hidden']").val($(this).attr('id'));
	      $(this).parentsUntil().blur();
	});

	$(".Jdropdown span").click(function () {
		if($(this).hasClass("active")==false)
		{
			$(this).addClass("active");
		}
		else
		{
			$(this).removeClass("active");
			$(this).parentsUntil().blur();
		}	
	});

	$(".Jdropdown .dropdown-a").click(function () {
	    if ($(this).parent().children("span").hasClass("active") == false)
	    {
	        $(this).parent().children("span").addClass("active");
	    }
	    else
	    {
	        $(this).parent().children("span").removeClass("active");
	        $(this).parentsUntil().blur();
	    }
	});

	$(".Jdropdown").blur(function () {
		$(this).children("span").removeClass("active");
	});

	$(".Jdropdown input").keyup(function(){
		var inp = $(this).val().toUpperCase();
		var o = $(this).parent().children(".options").children("ul").children("li");
		o.each(function() {
			if($(this).html().toUpperCase().indexOf(inp) != -1){
				$(this).css("display", "block");
			}
			else{
				$(this).css("display", "none");
			}
		});
	});

});
