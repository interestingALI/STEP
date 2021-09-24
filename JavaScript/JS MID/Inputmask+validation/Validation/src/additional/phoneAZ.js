/**
 * Azerbaijani telephone numbers have 9 digits.
 *
 * Mobile phone numbers starts with following digits:
 * 70, 77, 50, 51, 55, 60.       *12
 *
 */
$.validator.addMethod( "phoneAZ", function( phone_number, element ) {
	phone_number = phone_number.replace(/\D/g, '');
	return this.optional( element ) || /^(07[07]|05[015]|060|012)\b\d{7}\b$/.test( phone_number );
}, "Please specify a valid phone number" );
