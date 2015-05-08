#pragma strict

var contact: ContactPoint;
var rotation: Quaternion;
var position: Vector3;
var explosionPrefab: GameObject;

function Start () {

}

function Update () {
	
}

function OnCollisionEnter(hit: Collision) {
	GameObject.Instantiate(explosionPrefab, transform.position, Quaternion.identity);
	GameObject.Destroy(this.gameObject);
}