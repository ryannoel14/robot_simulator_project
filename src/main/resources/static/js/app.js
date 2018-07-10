$('body').on('click', '.btn', function(e){
	e.preventDefault();
	if ( $(this).hasClass('play') ) {
		$(this).removeClass('play');
		$(this).addClass('pause');
		$(this).parent().removeClass('red-background');
		$(this).parent().addClass('green-background');
		$("h1").text("SIMULATOR IS RUNNING");

	} else {
		$(this).removeClass('pause');
		$(this).addClass('play');
		$(this).parent().removeClass('green-background');
		$(this).parent().addClass('red-background');
		$("h1").text("SIMULATOR IS STOPPED");
	}
});