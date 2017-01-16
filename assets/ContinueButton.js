#pragma strict
import UnityEngine.SceneManagement;

var level : int;

function NextLevel () {
	level = SceneManager.GetActiveScene().buildIndex;
	level++;
	SceneManager.LoadScene(level, LoadSceneMode.Single);
}
