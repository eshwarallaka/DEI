
$(document).ready(function(){
$("#registerform").hide();
	var login = $('#loginform');
	var recover = $('#registerform');
	var speed = 400;

	$('#reg').click(function(){
		
		$("#loginform").slideUp();
		$("#registerform").fadeIn();
	});
	$('#to-login').click(function(){
		
		$("#registerform").hide();
		$("#loginform").fadeIn();
	});
	
	
	$('#to-login').click(function(){
	
	});
    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });

        
        
    }
});