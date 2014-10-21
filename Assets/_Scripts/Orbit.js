#pragma strict


function Update () {
	transform.RotateAround (Vector3.zero, Vector3.up, 2 * Time.deltaTime);
	transform.Rotate(Vector3.up * Time.deltaTime * 10, Space.World);
	transform.Rotate(Vector3.right * Time.deltaTime * 10);
}