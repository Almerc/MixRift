#pragma strict

var Camera1 : GameObject;
var Camera2 : GameObject;
var ToggleObjects : GameObject[];

var ToggleTag : String;

function Start () {
  ToggleObjects = GameObject.FindGameObjectsWithTag(ToggleTag);
  activateObjects(true);
}

function Update () {  
  if(Camera1.active == true){
    activateObjects(true);
} else {
	activateObjects(false);
}
}

function activateObjects (toggle : boolean){
for (var Obj : GameObject in ToggleObjects)  { 
			Obj.active = toggle;
		};
}