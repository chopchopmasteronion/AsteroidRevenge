#pragma strict
var cam: Camera;
var asteroid: GameObject;
var camDist: int;
var variableCamDist: float;
var maxDist: int;
var minDist: int;
var astPos: Vector3;

function Start () {
cam = GetComponent.<Camera>();
	astPos = asteroid.transform.position;
	astPos.y+= camDist;
	cam.transform.position= astPos;
}

function Update () {
follow();
}

function follow() {
	astPos = asteroid.transform.position;
	//astPos.y+= camDist;
	cam.transform.position.x= astPos.x;
	cam.transform.position.z= astPos.z;
	topDist(asteroid.GetComponent(Control).getVelocity());
}

function topDist(astVel: Vector3) {
	var astVelX = astVel.x;
	var astVelZ = astVel.z;
	if(astVelX<0) {
	astVelX=astVelX*-1;
	}
	if(astVelZ<0){
	astVelZ=astVelZ*-1;
	}
	if(astVelX > 50) {
		zoom(1);
		}
	else if(astVelZ > 50){
		zoom(1);
		}
	else if(astVelZ + astVelX > 50){
		zoom(1);
		}
	else {
		zoom(-1);
	}
}

function zoom(direction: int){ //greator than zero zooms out less than zero zooms in
 if(direction > 0){
 	if(cam.transform.position.y < maxDist){
 		Debug.Log("zoom out");
 		cam.transform.Translate(0, variableCamDist, 0);
 	}
 }
 else if(direction < 0){
 	if(cam.transform.position.y > minDist){
 	 	Debug.Log("zoom in");
 		cam.transform.Translate(0, -variableCamDist, 0);
 	}
 }
}