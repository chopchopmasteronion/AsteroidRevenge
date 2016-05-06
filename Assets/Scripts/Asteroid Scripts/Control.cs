using UnityEngine;
using System;

public class Control : MonoBehaviour
{
	public int speed;
	Vector3 moveDirection;
	public Rigidbody rigbod;

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
