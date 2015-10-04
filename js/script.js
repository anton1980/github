  
jQuery(document).ready(function($){	
	
	// Admin Bar Fix
    $(function(){
    if($('#adminbar').length > 0){
        $('html').addClass('admin');
    }
    });


	
	$(".mobile-open").click(function(){
		$("nav").toggleClass("active"); 
		$("html").toggleClass("active"); 
		$(".overlay").toggleClass("active"); 
		$(this).toggleClass("active"); return false;
	});	
	
		
	$(".overlay").click(function(){
		$("nav").toggleClass("active"); 
		$(".mobile-open").toggleClass("active"); 
		$("html").toggleClass("active"); 
		$(this).toggleClass("active"); return false;
	});	
	
		
	

    // hide address bar when page loads on mobile devices
    window.top.scrollTo(0, 1);

    // fix zoom issue when switching to landscape on iOS
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }

	var $window = $(window); 
	
	
	

	// rewrites                                        
    $('.remember label').replaceWith(' Remember me.');   // login page
    $('.commentsHead').replaceWith(' <h3 class="commentsHead">Comments</h3> ');  // comments header
    $('.productDetailQuantity label').replaceWith(' QTY: ');  // products quantity
    $('th.cartDescription').replaceWith(' <th colspan="2" class="cartDescription">ITEM</th> ');  // checkout products description
    $('th.cartQuantity').replaceWith(' <th class="cartQuantity">QTY</th> ');  // checkout products quantity

    $('.blogBack a').replaceWith(' <a href="javascript: history.back();">Back</a> '); 
    $('.commentsForm > p label').replaceWith('<label>Name:</label>'); 
    $('.commentsForm p ~ p label').replaceWith('<label>Email/URL:</label>'); 
    $('.commentsForm p ~ p ~ p label').replaceWith('<label>Comment:</label>'); 



});



document.createElement("article");
document.createElement("section");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("aside");