let btnExpand = document.getElementsByClassName('js-expand');
let btnClose = document.getElementsByClassName("js-close");

//Seteando el click en los botones que tengan la clase js-expand
for (let i = 0; i < btnExpand.length; i++) {
	btnExpand[i].onclick = setBtnExpand;
}

//Seteando el click en los botoenes que tengan la clase js-close
for (let i = 0; i < btnClose.length; i++) {
	btnClose[i].onclick = setBtnClose;
}

function setBtnExpand(e) {
	let element = e.target;

	if ( element.nodeName == "I" || element.nodeName == "SPAN" ){
		element = e.target.parentElement;
	}

	let getClosest = function ( elem, selector ) {

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	        Element.prototype.matches =
	            Element.prototype.matchesSelector ||
	            Element.prototype.mozMatchesSelector ||
	            Element.prototype.msMatchesSelector ||
	            Element.prototype.oMatchesSelector ||
	            Element.prototype.webkitMatchesSelector ||
	            function(s) {
	                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                    i = matches.length;
	                while (--i >= 0 && matches.item(i) !== this) {}
	                return i > -1;
	            };
	    }

	    // Get closest match
	    for ( ; elem && elem !== document; elem = elem.parentNode ) {
	        if ( elem.matches( selector ) ) return elem;
	    }

	    return null;

	};

	let mainBlock = getClosest(element, ".js-mainBlock");

	let expandBlock = mainBlock.getElementsByClassName("js-block-expand")[0];
	let btnExpandIcon = mainBlock.getElementsByClassName("js-expand-icon")[0];
	let btnExpandLabel = mainBlock.getElementsByClassName("js-expand-label")[0];;
	let textChange = '';
	
	btnExpandIcon.classList.toggle("fa-compress");

	if(btnExpandLabel.textContent=="Maximizar"){
		expandBlock.style.width = "65%";
		textChange = "Minimizar";
	}
	else{
		expandBlock.style.width = "35%";
		textChange = "Maximizar";
	}
	btnExpandLabel.textContent=textChange;

	console.log(element,"elemento");
}

function setBtnClose(e) {
	e.preventDefault();
	let element = e.target;

	if ( element.nodeName == "I" || element.nodeName == "SPAN" ){
		element = e.target.parentElement;
	}

	/**CLOSURE para obtener el element designado mas cercano
	 * Get the closest matching element up the DOM tree.
	 * @private
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	let getClosest = function ( elem, selector ) {

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	        Element.prototype.matches =
	            Element.prototype.matchesSelector ||
	            Element.prototype.mozMatchesSelector ||
	            Element.prototype.msMatchesSelector ||
	            Element.prototype.oMatchesSelector ||
	            Element.prototype.webkitMatchesSelector ||
	            function(s) {
	                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                    i = matches.length;
	                while (--i >= 0 && matches.item(i) !== this) {}
	                return i > -1;
	            };
	    }

	    // Get closest match
	    for ( ; elem && elem !== document; elem = elem.parentNode ) {
	        if ( elem.matches( selector ) ) return elem;
	    }

	    return null;

	};
	/****************************************************/

	let mainBlock = getClosest(element, ".js-mainBlock");
	mainBlock.outerHTML = "";
}