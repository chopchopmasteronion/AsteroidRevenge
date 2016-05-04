using UnityEngine;
using System.Collections;

public class SpaceObject : MonoBehaviour {
	public Rigidbody rigbod;
	float leftConstraint = 0.0f;
	float rightConstraint = 960.0f;
	float buffer = 1.0f; // set this so the spaceship disappears offscreen before re-appearing on other side

	void Start () {
		// set Vector3 to ( camera left/right limits, spaceship Y, spaceship Z )
		// this will find a world-space point that is relative to the screen
		leftConstraint = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width * 0.0f, 0.0f, 0.0f)).x;
		rightConstraint = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width * 1.0f, 0.0f, 0.0f)).x;
	}

	void Update () {

		/*
		if (this.gameObject == leftConstraint - buffer) { // ship is past world-space view / off screen
		      shipX = rightConstraint + buffer;  // move ship to opposite side
		  }

		if (this.gameobject.postion == rightConstraint + buffer) {
		  shipX = leftConstraint - buffer;
		}
		*/
	}

	public void stable()
	{
		Vector3 newpos = transform.position;
		newpos.y = 0; 
		transform.position = newpos;
	}
}
