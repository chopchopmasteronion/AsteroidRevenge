#pragma strict

function Start () {

}

function Update () {
	if(this.gameObject.transform.position.y !=10)
	{
	stable();
	}
}

function stable()
{
	this.gameObject.transform.position.y = 10;

}