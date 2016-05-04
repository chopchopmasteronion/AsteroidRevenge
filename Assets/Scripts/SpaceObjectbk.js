#pragma strict
public class SpaceObjectBK extends MonoBehaviour {
	var rigbod: Rigidbody;
	var leftConstraint : float = 0.0;
  	var rightConstraint : float = 960.0;
  	var buffer : float = 1.0; // set this so the spaceship disappears offscreen before re-appearing on other side

	function Start () {
		// set Vector3 to ( camera left/right limits, spaceship Y, spaceship Z )
      	// this will find a world-space point that is relative to the screen
      	leftConstraint = Camera.main.ScreenToWorldPoint(Vector3(Screen.width * 0.0, 0.0, 0.0)).x;
      	rightConstraint = Camera.main.ScreenToWorldPoint(Vector3(Screen.width * 1.0, 0.0, 0.0)).x;
	}

	function Update () {

	/*
		if (this.gameObject == leftConstraint - buffer) { // ship is past world-space view / off screen
		      shipX = rightConstraint + buffer;  // move ship to opposite side
		  }

		if (this.gameobject.postion == rightConstraint + buffer) {
		  shipX = leftConstraint - buffer;
		}
		*/
	}
	
	public function stable()
	{
		this.gameObject.transform.position.y = 0;
	}
}