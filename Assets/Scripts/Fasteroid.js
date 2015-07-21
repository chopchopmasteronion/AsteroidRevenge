#pragma strict

public class Fasteroid extends Asteroid {
	var startingForce: int;
	var moveDirection: Vector3;
	
	function Start () {
	startingForce = 5;
	moveDirection.x = 1;
	rigbod = GetComponent.<Rigidbody>();
	rigbod.AddForce(moveDirection * startingForce);
	}
	
	function Update () {
		this.stable();
	}
	
}
