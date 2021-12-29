window.addEventListener('message', getFromSavodxon, false);

function getFromSavodxon(event) {			
	if(event.origin == "https://savodxon.uz") {
		var data = event.data;
		if (data.type == "returnText") {
			editor.setData(data.value);
			popup.close();
		}
	}
}

function sendToSavodxon() {
	var content = editor.getData();
	var data = {type: 'postText', value: content, alphabet: "lat"};
	document.getElementById('savodxonFrame').contentWindow.postMessage(data, '*');
	popup.open();
}

var popupEl = document.getElementById('popup'); 

// As a native plugin
var popup = new Popup(popupEl, {
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
