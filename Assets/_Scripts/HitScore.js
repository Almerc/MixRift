#pragma strict

var hitValue = 1;

function OnTriggerEvent (info : Collider)
{
	if (info.tag == "IKE")
	{
		Debug.Log("HIT WALL");
		ScoreManager.score += hitValue;
	}
}