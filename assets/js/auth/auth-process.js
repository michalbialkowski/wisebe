if ($.cookie('auth') == 'user') {
    
	// $('body').removeClass('guest');
    // $('body').removeClass('manager');
    // $('body').removeClass('admin');
    
	// $('body').addClass('user');
    
    $('header .navbar-brand').attr('href', '/app.html');
    
} else if ($.cookie('auth') == 'manager') {
	
    // $('body').removeClass('guest');
    // $('body').removeClass('user');
    // $('body').removeClass('admin');
    
	// $('body').addClass('manager');
    
    $('header .navbar-brand').attr('href', '/app.html');
    
} else if ($.cookie('auth') == 'admin') {
    
    // $('body').removeClass('guest');
    // $('body').removeClass('user');
    // $('body').removeClass('manager');
    
	// $('body').addClass('admin');
    
    $('header .navbar-brand').attr('href', '/app.html');
    
} else {
    
	// $('body').removeClass('user');
    // $('body').removeClass('manager');
    // $('body').removeClass('admin');
    
	// $('body').addClass('guest');
    
    $('header .navbar-brand').attr('href', '/index.html');
    
}