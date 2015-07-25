#pragma strict
public class SpaceObject extends MonoBehaviour {
	var rigbod: Rigidbody;
	
	function Start () {
	
	}

	function Update () {

	}
	
	public function stable()
	{
		this.gameObject.transform.position.y = 10;
	}
}