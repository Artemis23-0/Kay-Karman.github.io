window.addEventListener('load', function() {
	var splash = document.querySelector('.splash');

	// Delay the removal of the splash screen by 2 seconds
	setTimeout(function() {
		splash.style.display = 'none';
		window.location.href = 'pages/home.html'; // Redirect to the main page
	}, 2000);
});