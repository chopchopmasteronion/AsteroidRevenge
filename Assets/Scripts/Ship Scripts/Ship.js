#pragma strict
public class Ship extends SpaceObject {
	var position: Vector3;
	var explosionPrefab: GameObject;
	var laser: GameObject;
	var shootTime: float;
	var cannon: GameObject;
	var turnSpeed: int;
	var startDir: int;
	var speed: float;
	private var col : SphereCollider;
	private var shootTimer: float;

	
	//test vars delete these
	var testTime: float; 
	
	function Start () {
		shootTimer = shootTime;
		startDir = Random.Range(0,2);
		rigbod = GetComponent.<Rigidbody>();
		col = GetComponent(SphereCollider);
	}

	function Update () {
		stable();
		patrol();
		Boost(2);
		Shoot();
	}


	function OnCollisionEnter(hit: Collision) {
		GameObject.Instantiate(explosionPrefab, transform.position, Quaternion.identity);
		GameObject.Destroy(this.gameObject);
	}

	function Shoot() {
		if(shootTimer < 0) {
			
			Instantiate(laser, this.cannon.transform.position , this.cannon.transform.rotation);
			shootTimer = shootTime;
			}
		else {
		shootTimer-=Time.deltaTime;
		}
		
	}
	
	function turn(direction:int, ammount:int)
	{	
		if(direction == 1){
			this.transform.Rotate(this.transform.right * ammount * Time.deltaTime, Space.World);
		}
		else{
			this.transform.Rotate(-this.transform.right * ammount * Time.deltaTime, Space.World);
		}

	}
	
	function Boost(speed:int)
	{
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
	}
	
	
	function OnTriggerEnter(other : Collider)
	{
		var direction : Vector3 = other.transform.position - transform.position;
        var angle : float = Vector3.Angle(direction, transform.forward);
		Debug.Log(angle + " at " + other.gameObject.tag);
//		if(other.gameObject.tag == "Barrier")
//		{
//			//turn(1);
//		}
//		else if(other.gameObject.tag == "Asteroid")
//		{
//			if((angle >= 90) &&  (angle <= 270))
//			{
//				Debug.Log("Asteroid in sight");
//				var hit : RaycastHit;
//				if(Physics.Raycast(transform.position + transform.forward, direction.normalized, hit, col.radius))
//	            {
//	                // ... and if the raycast hits the player...
//	                if(hit.collider.gameObject.tag == "Asteroid")
//	                {
//	                    // ... the player is in sight.
//	                    Shoot();
//	                }
//	            }
//				Debug.Log("front");
//				 if(angle <= 180)
//				 {
//				 	Debug.Log("right");
//				 	turn(1);
//				 }
//				 else
//				 {
//				 	Debug.Log("left");
//				 	turn(0);
//				 }
//				}
//		}
//		else if(other.gameObject.tag == "Ship")
//		{
//			turnAway();
//		}
//		else if(other.gameObject.tag == "Fasteroid")
//		{
//			turnTowards();
//		}
	}
	
	function turnTowards()
	{
		Debug.Log("Entered");
	}
	
	function turnAway()
	{}
	
	function follow()
	{}
	
	function patrol()
	{	
		
		
	}
	
}