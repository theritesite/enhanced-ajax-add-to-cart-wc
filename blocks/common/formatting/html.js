export const createValidHtml = ( inputHtml ) => {
	// console.log( "creating valid html... heres the old: " + inputHtml );
	// console.log( inputHtml.length );
	if ( inputHtml.length ) {

		var html = inputHtml;
		var div = document.createElement("div");
		div.innerHTML = html;
		var text = div.textContent || div.innerText || "";
		// console.log( "new text" );
		// console.log( text );
		// console.log( div );
		// return ( div );
		return text;
	} else {
		console.error( "Error in creating 'valid' html." );
		return '(no title can display. Error? Check console.)';
	}

};
