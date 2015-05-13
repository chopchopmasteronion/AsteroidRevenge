#pragma strict
public class Asteroid extends MonoBehaviour {
	var size: float;
	var fasteroid: GameObject;
	
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
	
	function OnCollisionEnter(hit: Collision) {
		if(hit.gameObject.name == "Laser(Clone)") {
			split();
			//SplitMesh();
		}
	}
	
	function split() {
		setSize(1);
		if(size > 0.0) {
			var astPos = this.transform.localPosition;
			fasteroid.GetComponent(Fasteroid).setSize(size);
			Instantiate(fasteroid, astPos, transform.localRotation);
		}
		else if(size < 0.1) {
			GameObject.Destroy(this.gameObject);
		}
	}
	
	function setSize(decrementor:float) {
		size-=decrementor;
		this.gameObject.transform.localScale.Set(size, size, size);
	}
	
//	function SplitMesh ()
//     {
//         var MF = GetComponent(MeshFilter);
//         var MR = GetComponent(MeshRenderer);
//         var M = MF.mesh;
//         var verts = M.vertices;
//         var normals = M.normals;
//         var uvs = M.uv;
//         for (var submesh = 0; submesh < M.subMeshCount; submesh++)
//         {
//             var indices = M.GetTriangles(submesh);
//             for (var i = 0; i < indices.Length; i += 3)
//             {
//                 var newVerts = new Vector3[3];
//                 var newNormals = new Vector3[3];
//                 var newUvs = new Vector2[3];
//                 for (var n = 0; n < 3; n++)
//                 {
//                     var index = indices[i + n];
//                     newVerts[n] = verts[index];
//                     newUvs[n] = uvs[index];
//                     newNormals[n] = normals[index];
//                 }
//                 var mesh: Mesh;
//                 mesh.vertices = newVerts;
//                 mesh.normals = newNormals;
//                 mesh.uv = newUvs;
//                 
//                 mesh.triangles = [ 0, 1, 2, 2, 1, 0 ];
//                 
//                 var GO = new GameObject("Triangle " + (i / 3));
//                 GO.transform.position = transform.position;
//                 GO.transform.rotation = transform.rotation;
//                 GO.AddComponent(MeshRenderer).material = MR.materials[submesh];
//                 GO.AddComponent(MeshFilter).mesh = mesh;
//                 GO.AddComponent(BoxCollider);
//                 GO.AddComponent(Rigidbody).AddExplosionForce(100, transform.position, 30);
//                 
//                 Destroy(GO, 5 + Random.Range(0.0f, 5.0f));
//             }
//         }
//         MR.enabled = false;
//         
//         Time.timeScale = 0.2f;
//         yield WaitForSeconds(0.8f);
//         Time.timeScale = 1.0f;
//         Destroy(gameObject);
//     }
}