#pragma strict
public class Ship extends MonoBehaviour {
	var contact: ContactPoint;
	var rotation: Quaternion;
	var position: Vector3;
	var explosionPrefab: GameObject;
	var laser: GameObject;
	var shootTime: float;
	private var shootTimer: float;

	function Start () {
		shootTimer = shootTime;
	}

	function Update () {
		stable();
		Shoot();
	}

	function OnCollisionEnter(hit: Collision) {
		GameObject.Instantiate(explosionPrefab, transform.position, Quaternion.identity);
		GameObject.Destroy(this.gameObject);
	}

	function Shoot() {
		if(shootTimer < 0) {
			var shipPos = this.transform.localPosition;
			Instantiate(laser, shipPos, transform.localRotation);
			shootTimer = shootTime;
			}
		else {
		shootTimer-=Time.deltaTime;
		}
		
	}
	
	public function stable()
	{
		this.gameObject.transform.position.y = 10;
	}

}