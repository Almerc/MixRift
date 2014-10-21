#pragma strict

import UnityEngine.UI;

private var text : Text;

function Start ()
{
	text = GetComponent (Text);
}

function Session_Start() {
       text.text = "SHOOT!";
}

function Session_End() {
       text.text = "WAVE";
}