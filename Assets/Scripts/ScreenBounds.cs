using UnityEngine;
using System.Collections;

public class ScreenBounds : MonoBehaviour
{	
	public float leftConstraint = 0.0f;
	public float rightConstraint = 0.0f;
	public float topConstraint = 0.0f;
	public float bottomConstraint = 0.0f;
	public float buffer = 1.0f; // set this so the spaceship disappears offscreen before re-appearing on other side
	public float distanceY = 100.0f;

	void Awake() 
	{
		// set Vector3 to ( camera left/right limits, spaceship Y, spaceship Z )
		// this will find a world-space point that is relative to the screen

		// using the camera's position from the origin (world-space Vector3(0,0,0)
		//leftConstraint = Camera.main.ScreenToWorldPoint( new Vector3(0.0f, 0.0f, 0 - Camera.main.transform.position.z) ).x;
		//rightConstraint = Camera.main.ScreenToWorldPoint( new Vector3(Screen.width, 0.0f, 0 - Camera.main.transform.position.z) ).x;

		// using a specific distance
		leftConstraint = Camera.main.ScreenToWorldPoint( new Vector3(0.0f, distanceY, 0.0f) ).x;
		rightConstraint = Camera.main.ScreenToWorldPoint( new Vector3(Screen.width, distanceY, 0.0f) ).x;
		topConstraint = Camera.main.ScreenToWorldPoint (new Vector3 (0.0f, Screen.height, distanceY) ).z;
		bottomConstraint = Camera.main.ScreenToWorldPoint (new Vector3 (0.0f, 0.0f, distanceY) ).z;

	}

	void Update() 
	{
		Debug.Log ("top constraint " + topConstraint);
		if (this.transform.position.x < leftConstraint - buffer) { // ship is past world-space view / off screen
			this.transform.position = new Vector3(rightConstraint + buffer, 0.0f, this.transform.position.z);  // move ship to opposite side
      }
 
      	if (this.transform.position.x > rightConstraint + buffer) {
			this.transform.position = new Vector3(leftConstraint - buffer, 0.0f, this.transform.position.z);
      }

		if (this.transform.position.z < bottomConstraint - buffer) { // ship is past world-space view / off screen
			this.transform.position = new Vector3(this.transform.position.x, 0.0f, topConstraint + buffer);  // move ship to opposite side
		}

		if (this.transform.position.z > topConstraint + buffer) { // ship is past world-space view / off screen
			this.transform.position = new Vector3(this.transform.position.x, 0.0f, bottomConstraint - buffer);  // move ship to opposite side
		}

	}

}