// const createVariationName = ( {
export const createTitle = ( {
	product = [],
	variation = [],
	titleType = 'full',
} ) => {
	const parentName = product.name;
	var varName = '';

	console.log( "creating title from " + product.id + " using titletype: " + titleType + " and parent name: " + parentName );
	if ( variation && parentName && titleType !== 'base' ) {
		// console.log( "title type is not base" );
		if ( variation.attributes /*&& variation.attributes.length > 0 */) {
			varName = '' + variation.attributes.map( ( attribute ) => " " + attribute.option );
			console.log( "we are in varname and it is: " + varName );
		}
		if ( ( parentName ) && ( varName ) && titleType === 'full' ) {
			console.log( parentName + ' - ' + varName );
			return parentName + ' - ' + varName;
		} else if ( varName && titleType === 'att' ) {
			console.log( varName );
			return varName;
		} else {
			console.log( "product: " );
			console.log( product );
			console.log( "variation: " );
			console.log( variation );
			console.log( "title type: " + titleType );
			if ( product ) {
				if ( ! parentName ) {
					return "Error: product name is null";
				}
				return "Error: Variation attributes are null";
			}
		}
	} else if ( product ) {
		if ( parentName ) {
			// console.log( "fall through" );
			// console.log( parentName );
			return parentName;
		}
		else {
			console.log( "product: " + product );
			return "Error: product name is null";
		}
	}
	else {
		return 'Error: product is null';
	}
};

