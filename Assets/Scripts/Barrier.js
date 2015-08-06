#pragma strict

function Start () {

}

function Update () {
	this.transform.Rotate(-this.transform.up * 5 * Time.deltaTime, Space.World);
}