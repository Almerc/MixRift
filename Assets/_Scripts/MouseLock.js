
	function Update () {
		if (Input.GetMouseButtonDown (0)){
			Screen.lockCursor = true;
			}
	
		if (Input.GetKeyDown ("escape")){
			Screen.lockCursor = false;
			}

	}