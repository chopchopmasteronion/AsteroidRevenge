#pragma strict
public class Laser extends MonoBehaviour {

	public var dir: Vector3;
	var speed: int;
	var timeToLive: float;

	function Start () {
	}

	function Update () {
		this.transform.Translate(-this.transform.forward * speed * Time.deltaTime); //negative cause retarded
		timeToLive-=Time.deltaTime;
		if(timeToLive < 0) {
			GameObject.Destroy(this.gameObject);
		}	
	}
	
	function OnCollisionEnter(hit: Collision) {
		GameObject.Destroy(this.gameObject);
	}
}


