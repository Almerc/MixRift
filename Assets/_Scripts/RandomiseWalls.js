var positions : Array = [-10, 0, 10];

var winWall :  GameObject;
var loseWall : GameObject ;
var loseWall2 : GameObject ;


function Start (){

randomise(positions);
Debug.Log("WinWALL POSITION :" + positions[0]);
winWall.transform.position.z = positions[0];
loseWall.transform.position.z = positions[1];
loseWall2.transform.position.z = positions[2];
}

function Update () {

	if(LoadRadio.hit == true){
	randomise(positions);
	Debug.Log("WinWALL POSITION2 :" + positions[0]);
	winWall.transform.position.z = positions[0];
	loseWall.transform.position.z = positions[1];
	loseWall2.transform.position.z = positions[2];
	}

}

static function randomise(arr : Array){
	
	for (var i = arr.length - 1; i > 0 ; i--){
		var r = Random.Range(0,i);
		var tmp = arr[i];
		arr[i] = arr[r];
		arr[r] = tmp;
	}
}