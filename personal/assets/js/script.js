$(document).ready(function() {

	$("#list1").click(function(){
		if($('#pixplored').css('display') == 'none'){ 
   			$('#pixplored').show('slow'); 
			} else { 
   			$('#pixlored').hide('slow'); 
		}
	});

	$("#list2").click(function(){
		if($('#textd').css('display') == 'none'){ 
   			$('#textd').show('slow'); 
			} else { 
   		$('#textd').attr('display', "none"); 
		}
	});

	$("#list3").click(function(){
		if($('#redditd').css('display') == 'none'){ 
   			$('#redditd').show('slow'); 
			} else { 
   		$('#pixlored').hide('slow'); 
		}
	});

	$(".year").hover(function() {
  		$(".year-item").slideDown();
	});

});