using UnityEngine;
using System.Collections;

public class Asteroid : SpaceObject {
	float size;
	GameObject fasteroid;
	float splitForce;
	ContactPoint contact;
	NavMeshAgent nav;

	// Use this for initialization
	void Start () {
		this.gameObject.transform.localScale = new Vector3(size, size, size);
		rigbod = GetComponent<Rigidbody>();
	}
	
	// Update is called once per frame
	void Update () {
		if(this.gameObject.transform.position.y !=0)
		{
			stable();
		}
	}


	void OnCollisionEnter(Collision hit){
		contact = hit.contacts[0];
		if(hit.gameObject.name == "Laser(Clone)" || hit.gameObject.name == "barrier"){
			split(contact.point);
		}
	}

	void split(Vector3 splitPoint) {
		GameObject astObj;
		decrementSize(1);
		splitPoint = Quaternion.Euler(0, -90, 0) * splitPoint/10;
		if(size > 0.0) {
			var astPos = this.transform.localPosition + splitPoint;
			astObj=(GameObject)Instantiate(fasteroid, astPos, transform.localRotation);
			astObj.GetComponent<Fasteroid>().setSize(size);
			astObj.GetComponent<Rigidbody>().AddForce(splitPoint * splitForce);
			this.rigbod.AddForce(-splitPoint * splitForce);
		}
		else if(size < 0.1) {
			GameObject.Destroy(this.gameObject);
		}
	}

	void decrementSize(float decrementor) {
		size-=decrementor;
		this.gameObject.transform.localScale = new Vector3(size, size, size);
	}

	void setSize(float s) {
		size = s;
		this.gameObject.transform.localScale = new Vector3(size, size, size);
	}
}
