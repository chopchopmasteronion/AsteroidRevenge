#pragma strict
public class Ship extends SpaceObject {
	var position: Vector3;
	var explosionPrefab: GameObject;
	var laser: GameObject;
	var shootTime: float;
	var cannon: GameObject;
	var turnSpeed: int;
	var startDir: int;
	var target: Transform;
	var waypoints: Transform[];
	var waypointIndex: int;
	var patrolTimer: float;
	var objectInSight: boolean;
	var playerInRange: boolean;
	var fieldOfViewAngle: float = 110f;
	var player: GameObject;
	private var nav : NavMeshAgent; 
	private var col : SphereCollider;
	private var shootTimer: float;
	
	function Start () {
		getCannon();
		player = GameObject.FindGameObjectWithTag("Player");
		shootTimer = shootTime;
		startDir = Random.Range(0,2);
		rigbod = GetComponent.<Rigidbody>();
		col = GetComponent(SphereCollider);
		nav = GetComponent(NavMeshAgent);
		waypointIndex = Random.Range(0,(waypoints.length - 1));
	}

	function Update () {
		stable();
		Debug.Log(player.transform.position);
		if(playerInRange){
			follow(nav);
		} else {
			patrol();
		}
		
		if(objectInSight) {
			Shoot();
		}
	}
	
	function getCannon() {
		cannon = this.gameObject.transform.GetChild(0).gameObject;
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
	
	
	function OnTriggerStay(other : Collider)
	{
		if(other.gameObject.tag ==  "Fasteroid" || other.gameObject == player) {
			objectInSight = false;
			var direction : Vector3 = other.transform.position - transform.position;
	        var angle : float = Vector3.Angle(direction, transform.forward);
	        if(other.gameObject == player) {
	        	playerInRange = true;
	        }
	        if(angle < fieldOfViewAngle * 0.5f)
	        {
	            var hit : RaycastHit;   
	            // ... and if a raycast towards the player hits something...
	            if(Physics.Raycast(transform.position + transform.up, direction.normalized, hit, col.radius))
	            {
	                // ... and if the raycast hits the player...
	                if(other.gameObject.tag ==  "Fasteroid" || other.gameObject == player)
	                {
	                    // ... the player is in sight.
	                    objectInSight = true;
	                    // Set the last global sighting is the players current position.
	                    //lastPlayerSighting.position = player.transform.position;

	                }
	            }
	        }
		}
	}
	
	function OnTriggerExit (other : Collider)
	{
	    // If the player leaves the trigger zone...
	    if(other.gameObject.tag ==  "Fasteroid" || other.gameObject == player)
	        // ... the player is not in sight.
	        objectInSight = false;
	        //playerInRange = false;
	}

	
	function follow(agent : NavMeshAgent)
	{
		//agent = GetComponent.<NavMeshAgent>();
        agent.destination = player.transform.position; 
	}
	

	
	function patrol()
	{	
		patrolTimer += Time.deltaTime;
		if(patrolTimer >= 10)
        {
	        waypointIndex = Random.Range(0,(waypoints.length - 1));
	        patrolTimer = 0;
	    }
        	nav.destination = waypoints[waypointIndex].position;
	}
	
}