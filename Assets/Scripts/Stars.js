#pragma strict

function Start () {

}

function Update () {
	this.transform.Rotate(this.transform.forward * .1 * Time.deltaTime, Space.World);
}