using UnityEngine;
using System.Collections;

public class OVRToggle : MonoBehaviour {

	[SerializeField] public GameObject ovrCamera = null;
	[SerializeField] public GameObject baseCamera = null;

	void Start()
	{
		if ( OVRDevice.IsHMDPresent()) {

			ovrCamera.SetActive(true);
			baseCamera.SetActive(false);
		} else {
			ovrCamera.SetActive(false);
			baseCamera.SetActive(true);
		}
	}
	
	void Update()
	{
				if (OVRDevice.IsHMDPresent ()) {
				ovrCamera.SetActive (true);
				baseCamera.SetActive (false);
			} else {
			ovrCamera.SetActive (false);
			baseCamera.SetActive (true);
	}
}
}
