#pragma strict


var clientid = "9a9c09df6ce3cfa33721c0a9b1568433";

var tracks = [["68424854", "http://4.musicimg.ovi.com/u/1.0/image/381360452/?w=320&q=90"],
		 	  ["12295594",  "http://4.musicimg.ovi.com/u/1.0/image/165480603/?w=320&q=90"],
			  ["13687035",  "http://4.musicimg.ovi.com/u/1.0/image/284687115/?w=320&q=90"],
		 	  ["13660468", "http://4.musicimg.ovi.com/u/1.0/image/262856699/?w=320&q=90"],
		 	  ["3913076", "http://4.musicimg.ovi.com/u/1.0/image/64766675/?w=320&q=90"], 
			  ["15177363", "http://4.musicimg.ovi.com/u/1.0/image/375025023/?w=320&q=90"],
			  ["13715330", "http://4.musicimg.ovi.com/u/1.0/image/383781976/?w=320&q=90"],
			  ["8798824", "http://4.musicimg.ovi.com/u/1.0/image/174117193/?w=320&q=90"],
			  ["54672375", "http://4.musicimg.ovi.com/u/1.0/image/262926875/?w=320&q=90"],
			  ["14994720", "http://4.musicimg.ovi.com/u/1.0/image/350405558/?w=320&q=90"],			  
			  ["19548665", "http://4.musicimg.ovi.com/u/1.0/image/209425969/?w=320&q=90"],
			  ["11928908", "http://4.musicimg.ovi.com/u/1.0/image/330870991/?w=320&q=90"],
			  ["7498423", "http://4.musicimg.ovi.com/u/1.0/image/336535624/?w=320&q=90"],
			  ["8595361", "http://4.musicimg.ovi.com/u/1.0/image/311844258/?w=320&q=90"],
			  ["1683991", "http://4.musicimg.ovi.com/u/1.0/image/10750207/?w=320&q=90"],
			  ["67973474", "http://4.musicimg.ovi.com/u/1.0/image/378870322/?w=320&q=90"],
			  ["7740756", "http://4.musicimg.ovi.com/u/1.0/image/322556856/?w=320&q=90"],
			  ["38294451", "http://4.musicimg.ovi.com/u/1.0/image/294073801/?w=320&q=90"],
			  ["59384661","http://4.musicimg.ovi.com/u/1.0/image/352509034/?w=320&q=90"],
			  ["45304889", "http://4.musicimg.ovi.com/u/1.0/image/316816460/?w=320&q=90"]];

static var hit = false;

var loseWall : GameObject;
var loseWall2 : GameObject;


function Start (){
	getDataFromMixRadio();
}

function Update (){
	if(hit == true){
		GetComponent.<Renderer>().material.mainTexture = Resources.Load("Textures/face");
		getDataFromMixRadio();		
		hit = false;
	}
		
}

function getDataFromMixRadio () {
		randomise(tracks);			 
		loadTexture(this.gameObject,tracks[0][1]);
		loadTexture(loseWall,tracks[1][1]);
		loadTexture(loseWall2,tracks[2][1]);
		playTrack(tracks[0][0]);
		//var url = "http://api.mixrad.io/1.x/gb/creators/"+ aid + "/?domain=music&client_id=" + clientid;
		//http://api.mixrad.io/1.x/gb/product/45304889/sample/?domain=music&client_id=9a9c09df6ce3cfa33721c0a9b1568433
		
			
    }
    
 function loadTexture(wall : GameObject,url){
 	var www : WWW = new WWW (url);
 	
 	yield www;
 	
 	wall.GetComponent.<Renderer>().material.mainTexture = www.texture;
 }
 
 function playTrack (item){
 	var media : AudioClip =  Resources.Load("Music/"+item, AudioClip);
	GetComponent.<AudioSource>().clip = media;
 	GetComponent.<AudioSource>().Play();
 	
 }
 
 static function randomise(arr : Object[]){
	
	for (var i = arr.Length - 1; i > 0 ; i--){
		var r = Random.Range(0,i);
		var tmp = arr[i];
		arr[i] = arr[r];
		arr[r] = tmp;
	}
}