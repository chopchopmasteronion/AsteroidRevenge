#pragma strict

function Start () {

}

function Update () {
	this.transform.Rotate(-this.transform.forward * 5 * Time.deltaTime, Space.World);
}