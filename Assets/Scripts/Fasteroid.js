#pragma strict

public class Fasteroid extends Asteroid{
	var size: int;
	var spin: int;
	var spawn: Vector3;

	function Start () {
	size = Random.Range(1,10);
	spin = Random.Range(1,10);
	spawn.Set(Random.Range(0,30),0,Random.Range(0,30));

	}

	function Update () {
		this.stable();
	}
}
