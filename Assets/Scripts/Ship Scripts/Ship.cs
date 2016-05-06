// Converted from UnityScript to C# at http://www.M2H.nl/files/js_to_c.php - by Mike Hergaarden
// Do test the code! You usually need to change a few small bits.

using UnityEngine;
using System.Collections;

public class Ship : SpaceObject {
		Vector3 position;
		public GameObject explosionPrefab;
		public GameObject laser;
		public float shootTime;
		public GameObject cannon;
		int turnSpeed;
		int startDir;
		Transform target;
		public Transform[] waypoints;
		int waypointIndex;
		float patrolTimer;
		bool  objectInSight;
		bool  playerInRange;
		float fieldOfViewAngle = 110f;
		public GameObject player;
		private NavMeshAgent nav; 
		private SphereCollider col;
		private float shootTimer;

		void  Start (){
			getCannon();
			player = GameObject.FindGameObjectWithTag("Player");
			shootTimer = shootTime;
			startDir = Random.Range(0,2);
			rigbod = GetComponent<Rigidbody>();
			col = GetComponent<SphereCollider>();
			nav = GetComponent<NavMeshAgent>();
			waypointIndex = Random.Range(0,(waypoints.Length - 1));
		}

		void  Update (){
			stable();
			//Debug.Log(player.transform.position);
			if(playerInRange){
				follow(nav);
			} else {
				patrol();
			}

			if(objectInSight) {
				Shoot();
			}
		}

		void  getCannon (){
			cannon = this.gameObject.transform.GetChild(0).gameObject;
		}

		void  OnCollisionEnter ( Collision hit  ){
			GameObject.Instantiate(explosionPrefab, transform.position, Quaternion.identity);
			GameObject.Destroy(this.gameObject);
		}

		void  Shoot (){
			if(shootTimer < 0) {

				Instantiate(laser, this.cannon.transform.position , this.cannon.transform.rotation);
				shootTimer = shootTime;
			}
			else {
				shootTimer-=Time.deltaTime;
			}

		}


		void  OnTriggerStay ( Collider other  ){
			if(other.gameObject.tag ==  "Fasteroid" || other.gameObject == player) {
				objectInSight = false;
				Vector3 direction = other.transform.position - transform.position;
				float angle = Vector3.Angle(direction, transform.forward);
				if(other.gameObject == player) {
					playerInRange = true;
				}
				if(angle < fieldOfViewAngle * 0.5f)
				{
					RaycastHit hit;   
					// ... and if a raycast towards the player hits something...
					if(Physics.Raycast(transform.position + transform.up, direction.normalized, out hit, col.radius))
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

		void  OnTriggerExit ( Collider other  ){
			// If the player leaves the trigger zone...
			if(other.gameObject.tag ==  "Fasteroid" || other.gameObject == player)
				// ... the player is not in sight.
				objectInSight = false;
			//playerInRange = false;
		}


		void  follow ( NavMeshAgent agent  ){
			//agent = GetComponent.<NavMeshAgent>();
			agent.destination = player.transform.position; 
		}



		void  patrol (){	
			patrolTimer += Time.deltaTime;
			if(patrolTimer >= 10)
			{
				waypointIndex = Random.Range(0,(waypoints.Length - 1));
				patrolTimer = 0;
			}
			nav.destination = waypoints[waypointIndex].position;
		}

	}