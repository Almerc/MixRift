var speed = 3.0 ;
var ballPrefab:GameObject;
var autoDestroy = 30;
var hitValue = 1;

private var ballRay : Ray;
private var ballRayHit : RaycastHit;
private var range : float = 100f;

public var failSound : AudioClip;
public var winSound : AudioClip;

function Update ()
{

	if (Input.GetMouseButtonDown(0))
	{
		var ball = Instantiate(ballPrefab, transform.position, Quaternion.identity);
		ballRay.origin = transform.position;
		ballRay.direction = transform.forward;
		
		if(Physics.Raycast (ballRay,ballRayHit,range))
		{
			if(ballRayHit.collider.tag == "WIN")
			{
				Score();
			}
			
			if(ballRayHit.collider.tag == "LOSE")
			{
				GameOver();
			}
		}
		
		ball.GetComponent.<Rigidbody>().AddForce(transform.forward * 2000);
		
		Destroy (ball, autoDestroy);
	}	
}

function PushDetector_Push()
    {
        Debug.Log("A PUSH HAPPENED!!");
        var ball = Instantiate(ballPrefab, transform.position, Quaternion.identity);
        
        ballRay.origin = transform.position;
		ballRay.direction = transform.forward;
		
		if(Physics.Raycast (ballRay,ballRayHit,range))
		{
			if(ballRayHit.collider.tag == "WIN")
			{
				Score();
			}
			
			if(ballRayHit.collider.tag == "LOSE")
			{
				GameOver();
			}
		}
		
		ball.GetComponent.<Rigidbody>().AddForce(transform.forward * 2000);
		
		Destroy (ball, autoDestroy);
    }
    
function Score ()
{
	yield WaitForSeconds (1);
	GetComponent.<AudioSource>().clip = winSound;
	GetComponent.<AudioSource>().Play();
	ScoreManager.score += hitValue;
	LoadRadio.hit = true;
	
}

function GameOver ()
{
	yield WaitForSeconds (1);
	GetComponent.<AudioSource>().clip = failSound;
	GetComponent.<AudioSource>().Play();
	updateHighScore();
	ScoreManager.score = 0;
	LoadRadio.hit = true;
}

function updateHighScore (){
	if(ScoreManager.score > HighScoreManager.highScore) 
    {
        HighScoreManager.highScore = ScoreManager.score;
        PlayerPrefs.SetInt("High Score", HighScoreManager.highScore);
        Debug.Log("High Score is " + HighScoreManager.highScore ); 
    } 
 }
