

//---------Navbar Color---------//

$(document).ready(function() {

        $(window).scroll(function() {

            var scroll = $(window).scrollTop();

            if (scroll > 800) {
                $("#navbar").addClass("navbar-dark");
                $("#navbar").addClass("bg-dark");
            } else {
                $("#navbar").removeClass("bg-dark");
                $("#navbar").removeClass("navbar-dark");
            }

        });

/*        $(#navbar).scroll(function() {

        	var scroll = $(window).scrollTop();

        	if (scroll > 800) {
        		$("#home-link").removeClass("active");
        		$("#service-link").addClass("active");
        	}else {
        		$("#service-link").removeClass("active");
        		$("#home-link").addClass("active");
        	}

        	if (scroll > 2000) {
        		$("#service-link").removeClass("active");
        		$("#about-us-link").addClass("active");
        	}else {
        		$("#about-us-link").removeClass("active");
        		$("#service-link").addClass("active");
        	}

        	if (scroll > 3000) {
        		$("#about-us-link").removeClass("active");
        		$("#contact-link").addClass("active");
        	}else {
        		$("#contact-link").removeClass("active");
        		$("#about-us-link").addClass("active");
        	}

        })*/

    });