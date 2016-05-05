// Converted from UnityScript to C# at http://www.M2H.nl/files/js_to_c.php - by Mike Hergaarden
// Do test the code! You usually need to change a few small bits.

using UnityEngine;
using System.Collections;

public class CameraControl : MonoBehaviour {

	public Camera cam;
	public GameObject asteroid;
	public int camDist;
	public float variableCamDist;
	public int maxDist;
	public int minDist;
	public Vector3 astPos;

	void  Start (){
		cam = GetComponent<Camera>();
		astPos = asteroid.transform.position;
		astPos.y+= camDist;
		cam.transform.position= astPos;
	}

	void  Update (){
		//follow();
	}

	void  follow (){
		if(asteroid != null) {
			astPos = asteroid.transform.position;
			cam.transform.position= astPos;
			cam.transform.position= astPos;
			//topDist(asteroid.GetComponent<Control>().getVelocity());
		}
	}

	void  topDist ( Vector3 astVel  ){
		Vector3 astVelX= astVel;
		Vector3 astVelZ= astVel;
		if(astVelX.x<0) {
			astVelX=astVelX*-1;
		}
		if(astVelZ.z<0){
			astVelZ=astVelZ*-1;
		}
		if(astVelX.x > 50) {
			zoom(1);
		}
		else if(astVelZ.z > 50){
			zoom(1);
		}
		else if(astVelZ.z + astVelX.x > 50){
			zoom(1);
		}
		else {
			zoom(-1);
		}
	}

	void  zoom ( int direction  ){ //greator than zero zooms out less than zero zooms in
		if(direction > 0){
			if(cam.transform.position.y < maxDist){
				//cam.transform.position.y+=variableCamDist * Time.deltaTime;
			}
		}
		else if(direction < 0){
			if(cam.transform.position.y > minDist){
				//cam.transform.position.y+=-variableCamDist * Time.deltaTime;
			}
		}
	}
}