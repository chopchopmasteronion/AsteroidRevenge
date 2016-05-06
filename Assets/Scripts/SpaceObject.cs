using UnityEngine;
using System.Collections;

public class SpaceObject : MonoBehaviour {
	public Rigidbody rigbod;


	void Start () {
		// set Vector3 to ( camera left/right limits, spaceship Y, spaceship Z )
		// this will find a world-space point that is relative to the screen
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
