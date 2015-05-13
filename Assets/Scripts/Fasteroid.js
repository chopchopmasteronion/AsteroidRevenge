#pragma strict

public class Fasteroid extends Asteroid {
	var spawn: Vector3;
	var dir: Vector3;
	var rigbod: Rigidbody;
	
	function Start () {
	}

	function Update () {
		this.stable();
	}
}
