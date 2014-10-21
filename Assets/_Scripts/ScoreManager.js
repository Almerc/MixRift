#pragma strict

import UnityEngine.UI;

static var score : int;

private var text : Text;

function Start ()
{
	text = GetComponent (Text);
	score = 0;
}

function Update ()
{
	text.text = "Score: " + score;	
}