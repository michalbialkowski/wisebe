let searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('email')) {
    let email = searchParams.get('email');
    
    if (email == 'user@wisebe.app') { // User
        
        $.cookie('auth', 'user', { expires: 365 });
        window.location.replace('/app.html');
        
    } else if (email == 'manager@wisebe.app') { // Manager
        
        $.cookie('auth', 'manager', { expires: 365 });
        window.location.replace('/app.html');
        
    } else if (email == 'admin@wisebe.app') { // Admin
        
        $.cookie('auth', 'admin', { expires: 365 });
        window.location.replace('/app.html');
        
    } else {
        
        window.location.replace('/logout-process.html');
        
    }
}