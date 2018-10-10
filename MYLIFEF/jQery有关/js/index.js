// JavaScript Document
$(function(){
	$("#reg_a").click(function(){		
		$(".validate_form").dialog();	
		return false;
	  });
	$(".validate_form").validate({
		 rules:{
			 username: {
				required: true,
				minlength: 6
				},
				email: {
				required: true,
				email: true
				}
			},
		messages:{
			username: {
				required: '请输入姓名',
				minlength: '请至少输入两个字符'
				},
			email: {
				required: '请输入电子邮件',
				email: '请检查电子邮件的格式'
				}
			 }
			});	
			
 });