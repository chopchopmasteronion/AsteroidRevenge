#pragma strict
public class Ship extends MonoBehaviour {
	var contact: ContactPoint;
	var rotation: Quaternion;
	var position: Vector3;
	var explosionPrefab: GameObject;
	var laser: GameObject;
	var shootTime: float;
	var cannon: GameObject;
	var spinSpeed: int;
	var startDir: int;
	var rigbod: Rigidbody;
	var speed: float;
	private var shootTimer: float;

	function Start () {
		shootTimer = shootTime;
		startDir = Random.Range(0,2);
		rigbod = GetComponent.<Rigidbody>();
	}

	function Update () {
		stable();
		Shoot();
		Spin(startDir);
		Boost(speed);
	}


	function OnCollisionEnter(hit: Collision) {
		GameObject.Instantiate(explosionPrefab, transform.position, Quaternion.identity);
		GameObject.Destroy(this.gameObject);
	}

	function Shoot() {
		if(shootTimer < 0) {
			
			Instantiate(laser, this.cannon.transform.position, this.cannon.transform.rotation);
			shootTimer = shootTime;
			}
		else {
		shootTimer-=Time.deltaTime;
		}
		
	}
	
	function Spin(direction:int)
	{	
		Debug.Log(direction);
		if(direction == 1){
			this.transform.Rotate(this.transform.forward * spinSpeed * Time.deltaTime, Space.World);
		}
		else{
			this.transform.Rotate(-this.transform.forward * spinSpeed * Time.deltaTime, Space.World);
		}

	}
	
	function Boost(speed:int)
	{
		rigbod.AddForce(-this.transform.up * speed);
	}
	
	public function stable()
	{
		this.gameObject.transform.position.y = 10;
	}

}