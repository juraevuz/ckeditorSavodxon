window.addEventListener('message', getFromSavodxon, false);
alphabet = "lat";

function getFromSavodxon(event) {			
	if(event.origin == "https://savodxon.uz") {
		var data = event.data;
		if (data.type == "returnText") {
			alphabet = data.alphabet;
			editor.setData(data.value);
			popup.close();
		}
		if (data.type == "reload") {
			popup.close();
		}
	}
}

function sendToSavodxon() {
	var content = editor.getData();
	var data = {type: 'postText', value: content, alphabet: alphabet};
	document.getElementById('savodxonFrame').contentWindow.postMessage(data, '*');
	popup.open();
}

var popupEl = document.getElementById('popup'); 
var overlaryEl = document.getElementById('overlay'); 

// As a native plugin
var popup = new Popup(popupEl, overlaryEl, {
  width: 800,
  height: 500
});

let editor;

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( newEditor => {
        editor = newEditor;
    } )
    .catch( error => {
        console.error( error );
    } );
