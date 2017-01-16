#pragma strict
import UnityEngine.SceneManagement;

private var scene : Scene;

function ReloadScene() {
	scene = SceneManager.GetActiveScene();
	SceneManager.LoadScene(scene.name);

}
