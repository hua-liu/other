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
				required: '����������',
				minlength: '���������������ַ�'
				},
			email: {
				required: '����������ʼ�',
				email: '��������ʼ��ĸ�ʽ'
				}
			 }
			});	
			
 });