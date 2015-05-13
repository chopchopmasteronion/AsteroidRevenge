#pragma strict
var speed: int;
var vertical;
var horizontal;
var moveDirection: Vector3;
var rigbod: Rigidbody;

function Start() {
	rigbod = GetComponent.<Rigidbody>();
}

function Update () {
    moveDirection.z = Input.GetAxis("Vertical");
    moveDirection.x = Input.GetAxis("Horizontal");
    rigbod.AddForce(moveDirection * speed);
    rigbod.AddTorque(moveDirection * speed);
}

function getVelocity() {
	return rigbod.velocity;
}
