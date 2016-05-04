using UnityEngine;
using System;

public class Control : Asteroid
{
	int speed;
	Vector3 moveDirection;
	Rigidbody rigbod;

	void Start () {
		rigbod = GetComponent<Rigidbody>();
	}

	void Update () {
		moveDirection.z = Input.GetAxis("Vertical");
		moveDirection.x = Input.GetAxis("Horizontal");
		rigbod.AddForce(moveDirection * speed);
		rigbod.AddTorque(moveDirection * speed);
	}

	Vector3 getVelocity() {
		return rigbod.velocity;
	}
}


