#pragma strict

import UnityEngine.UI;

static var highScore : int = 0 ;

private var text : Text;

function Start ()
{
	highScore = PlayerPrefs.GetInt("High Score");
	text = GetComponent (Text);
}

function Update ()
{
	text.text = "High Score : " + highScore;	
}