// JavaScript Document

$(function(){
	$('#con_btns a').click(function(){
		$(this).addClass('cur').siblings('a').removeClass('cur');
		$('#tab').children().eq($(this).index()).addClass('show').siblings('.tab_box').removeClass('show');
		
	});	
	function maodian(id){
		$(id).click(function(){
			$('html,body').animate({
				scrollTop:$($(this).attr('href')).offset().top
				
			},{
				duration:500,
				easing:'swing'	
			});
			return false;
		});
	};
	maodian('#nav_1');
	maodian('#nav_2');
	maodian('#nav_3');
	maodian('#nav_4');
	maodian('#toTop');
	window.onscroll=function(){
		var sT = document.documentElement.scrollTop||document.body.scrollTop;
		if(sT>100){
			$('#toTop').css('display','block')
		}else{
			$('#toTop').css('display','none')
		}
	}
})

