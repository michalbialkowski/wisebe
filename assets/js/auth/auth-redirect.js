if ($.cookie('auth') == 'user') {
	window.location.replace('/app-user.html');
} else if ($.cookie('auth') == 'manager') {
	window.location.replace('/app-manager.html');
} else if ($.cookie('auth') == 'admin') {
	window.location.replace('/app-admin.html');
}