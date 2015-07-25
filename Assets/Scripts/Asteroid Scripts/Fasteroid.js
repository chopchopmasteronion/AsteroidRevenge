#pragma strict

public class Fasteroid extends Asteroid {
	var startingForce: int;
	var moveDirection: Vector3;
	var moveTimer: float;
	
	function Start () {
	startingForce = Random.Range(1,3);
	moveDirection = randomMovement();
	rigbod = GetComponent.<Rigidbody>();
	}
	
	function Update () {
		if(moveTimer > 0)
		{
			rigbod.AddForce(moveDirection * startingForce);
			rigbod.AddTorque(moveDirection * startingForce);
			moveTimer-=Time.deltaTime;
		}
		this.stable();
	}
	
	function randomMovement()
	{
	var direction: Vector3;
	direction.x = Random.Range(-2,2);
	direction.z = Random.Range(-2,2);
	return direction;
	}
}
