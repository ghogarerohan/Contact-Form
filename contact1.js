 // $ -refernce to J-Query Library, this docuemnt here is what's passed into code and the ready method 

$(document).ready(function () {    
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
		if (localStorage["message"]) {
            $('#message').val(localStorage["message"]);
        }
    }
	init();
});

$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
	
});
