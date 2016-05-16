using UnityEngine;
using System.Collections;

public class Spawner : MonoBehaviour
{
	public Transform[] spawnPoints;         // An array of the spawn points this enemy can spawn from.
	public GameObject fasteroid;
	public GameObject ship;
	public int fasteroidCount;
	public int shipCount;

	void Update ()
	{
		Spawn();
	}

	void Spawn ()
	{
		// Find a random index between zero and one less than the number of spawn points.
		int spawnPointIndex = Random.Range (0, spawnPoints.Length);

		// First lets check how many Fasteroids and ships are currently on the screen
		GameObject[] fasteroids = GameObject.FindGameObjectsWithTag("Fasteroid");
		GameObject[] ships = GameObject.FindGameObjectsWithTag("Ship");

		if (fasteroids.Length < fasteroidCount) {
			Instantiate (fasteroid, spawnPoints[spawnPointIndex].position, spawnPoints[spawnPointIndex].rotation);
		}

		if(ships.Length < shipCount){
			Instantiate (ship, spawnPoints[spawnPointIndex].position, spawnPoints[spawnPointIndex].rotation);
		}
	}
}

