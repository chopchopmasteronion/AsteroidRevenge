using UnityEngine;
using System.Collections;

public class ScreenBounds : MonoBehaviour
{	
	public float leftConstraint = 0.0f;
	public float rightConstraint = 0.0f;
	public float topConstraint = 0.0f;
	public float bottomConstraint = 0.0f;
	public float buffer = 1.0f; // set this so the spaceship disappears offscreen before re-appearing on other side
	public float distanceZ = -41.1f; // this is the z-axis of asteroid

	void Awake() 
	{
		// left and right constraints are normal because the x-axis is in fact the x-axis
		leftConstraint = Camera.main.ScreenToWorldPoint( new Vector3(0.0f, 0.0f, distanceZ) ).x;
		rightConstraint = Camera.main.ScreenToWorldPoint( new Vector3(Screen.width, 0.0f, distanceZ) ).x;
		// top and bottom contraints are weird because we are using the z-axis as our y-axis.
		//	In a normal graph, y-axis would be y-axis. What have we done? (We set the y-axis as the z-axis ;)
		topConstraint = Camera.main.ScreenToWorldPoint (new Vector3 (0.0f, Screen.height, 0.0f) ).z;
		bottomConstraint = Camera.main.ScreenToWorldPoint (new Vector3 (0.0f, 0.0f, Screen.height) ).z;
	}

	void Update() 
	{
		GameObject astObj = GameObject.Find("Asteroid");
		var asteroidX = astObj.transform.position.x;
		var asteroidZ = astObj.transform.position.z;

		if (asteroidX < leftConstraint - buffer) { // ship is past world-space view / off screen
			asteroidX = rightConstraint + buffer;  // move ship to opposite side
			astObj.transform.position = new Vector3 (asteroidX, astObj.transform.position.y, astObj.transform.position.z);
      	}
 
		if (asteroidX > rightConstraint + buffer) {
			asteroidX = leftConstraint - buffer;
			astObj.transform.position = new Vector3 (asteroidX, astObj.transform.position.y, astObj.transform.position.z);
     	}

		if (asteroidZ > topConstraint + buffer) {
			asteroidZ = bottomConstraint + buffer;
			astObj.transform.position = new Vector3 (astObj.transform.position.x, astObj.transform.position.y, asteroidZ);
		}

		if (asteroidZ < bottomConstraint + buffer) {
			asteroidZ = topConstraint + buffer;
			astObj.transform.position = new Vector3 (astObj.transform.position.x, astObj.transform.position.y, asteroidZ);
		}
	}
}		