#pragma strict
import UnityEngine.SceneManagement;

private var timing : GameObject;
private var gameOver : GameObject;
private var loading : GameObject;

function Start () {
	timing = GameObject.Find("Timer_Panel");
	gameOver = GameObject.Find("GameOver_Panel");
	loading = GameObject.Find("LevelComplete_Panel");
	timing.SetActive(true);
	gameOver.SetActive(false);
	loading.SetActive(false);
}

function Gameover_Update () {
	timing.SetActive(false);
	gameOver.SetActive(true);
}

function Level_Complete () {
	timing.SetActive(false);
	loading.SetActive(true);
}

