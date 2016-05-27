using UnityEngine;
using System.Collections;

public class Fasteroid : Asteroid {
	int startingForce;
	Vector3 moveDirection;
	public float moveTimer;

	// Use this for initialization
	void Start () {
		startingForce = Random.Range(0,2);
		moveDirection = randomMovement();
		rigbod = GetComponent<Rigidbody>();
		source = GetComponent<AudioSource>();
	}
	
	// Update is called once per frame
	void Update () {
		if(moveTimer > 0)
		{
			rigbod.AddForce(moveDirection * startingForce);
			rigbod.AddTorque(moveDirection * startingForce);
			moveTimer-=Time.deltaTime;
		}
		this.stable();
	}

	Vector3 randomMovement()
	{
		Vector3 direction = new Vector3();
		direction.x = Random.Range(-2,2);
		direction.z = Random.Range(-2,2);
		return direction;
	}
}
