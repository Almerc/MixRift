#pragma strict

 function loadTexture(url){
 	var www : WWW = new WWW (url);
 	
 	yield www;
 	
 	www.LoadImageIntoTexture(GetComponent.<Renderer>().material.mainTexture);
 }