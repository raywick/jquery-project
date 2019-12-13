var name = document.getElementsById("#inputName");

if(name != '/^[a-zA-Z]+$/;') {
	
	alert('Please introduce a valid name');
}












// JavaScript validation
/*//Name without characters and numbers
var nameregex = /^[a-zA-Z ]+$/;

$.validator.addMethod("validname", function( value, element ) {
return this.optional( element ) || nameregex.test( value );
});

//Email
var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

$.validator.addMethod("validemail", function( value, element ) {
return this.optional( element ) || eregex.test( value );
});

$("#form").validate({

rules:
{
name: {
required: true,
minlength: 4
},
email: {
required: true,
validemail: true
},
city: {
required: true,
minlength: 2,
maxlength: 20
},
},
messages:
{
name: {
required: "Don't be shy and let us know your name",
minlength: "Your name is to short"
},
email: {
required: "We need your mail to reach you out.",
validemail: "Upps your email doesn't look valid"
},
city: {
required: "We will like to know from where you're",
minlength: "Is your city name that short?",
maxlength: "Is your city name that long?"
},
},
/*errorPlacement : function(error, element) {
$(element).closest('.form-group').find('.help-block').html(error.html());
},
highlight : function(element) {
$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
},
unhighlight: function(element, errorClass, validClass) {
$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
$(element).closest('.form-group').find('.help-block').html('');
},

submitHandler: function(form) {
form.action="pagina que envia el correo.php";
form.submit();

alert('ok');
}
});
})*/

bootstrapValidate('inputName', 'min:4:Your name is to short. Enter at least 4 characters');
bootstrapValidate('inputName', "max:20:Wow your name is so long. Let's try just one name and last name");
bootstrapValidate('inputEmail', "email: Upps your email doesn't look valid");
bootstrapValidate('inputCity', 'min:2:Is your city name that short?');
bootstrapValidate('inputCity', "max:15: Wow I don't know with a name that long");