#pragma strict
public class Asteroid extends MonoBehaviour {
	var size: float;
	var fasteroid: GameObject;
	var rigbod: Rigidbody;
	var splitForce: float;
	var contact: ContactPoint;
	
	function Start () {
		this.gameObject.transform.localScale = new Vector3(size, size, size);
		rigbod = GetComponent.<Rigidbody>();
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
	
	function OnCollisionEnter(hit: Collision){
		Debug.Log("hit1");
		contact = hit.contacts[0];
		Debug.Log("hit2");
		if(hit.gameObject.name == "Laser(Clone)" || hit.gameObject.name == "barrier"){
			split(contact.point);
		}
	}
	
	function split(splitPoint: Vector3) {
		var astObj: GameObject;
		decrementSize(1);
		splitPoint = Quaternion.Euler(0, -90, 0) * splitPoint/10;
		Debug.Log(splitPoint);
		if(size > 0.0) {
			var astPos = this.transform.localPosition + splitPoint;
			astObj=Instantiate(fasteroid, astPos, transform.localRotation);
			astObj.GetComponent(Fasteroid).setSize(size);
			astObj.GetComponent(Rigidbody).AddForce(splitPoint * splitForce);
			this.rigbod.AddForce(-splitPoint * splitForce);
		}
		else if(size < 0.1) {
			GameObject.Destroy(this.gameObject);
		}
	}
	
	function decrementSize(decrementor:float) {
		size-=decrementor;
		this.gameObject.transform.localScale = new Vector3(size, size, size);
	}
	
	function setSize(s: float) {
		size = s;
		this.gameObject.transform.localScale = new Vector3(size, size, size);
	}
}