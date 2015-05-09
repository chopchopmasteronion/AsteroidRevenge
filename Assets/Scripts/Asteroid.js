#pragma strict
public class Asteroid extends MonoBehaviour {
	function Start () {

	}

	function Update () {
		if(this.gameObject.transform.position.y !=10)
		{
		stable();
		}
	}

	public function stable()
	{
		this.gameObject.transform.position.y = 10;
	}
}