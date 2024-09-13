$('button').click(function(){
	console.log($('dialog')[0]);
	//$('dialog').show();
	$('dialog')[0].showModal();
});
$('dialog span').click(function(){
	//$('dialog').hide();
	$('dialog')[0].close();
});