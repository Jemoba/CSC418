#pragma strict
//import UnityEngine.UI;

public var timer = 1.0;
private var text : UI.Text;
private var menu : GameObject;

function Awake() {
	timer = 5;
}

function Start() {
	timer = 5;
	text = GetComponent(UI.Text);
	menu = GameObject.Find("Game_UI");
	text.color = Color.blue;
	text.text = "Timer :" + timer;
	Debug.Log(timer);
	Update();
}

function Update () {
	while (timer > 60) {
		yield WaitForSeconds(1);
		timer -= 1;
		text.text = "Timer :" + timer;
		Debug.Log(timer);
	}
	while (timer > 30) {
		yield WaitForSeconds(.5);
		text.color = Color.yellow;
		text.text = "Timer :" + timer;
		yield WaitForSeconds(.5);
		text.color = Color.blue;
		text.text = "Timer :" + timer;
		timer -= 1;
		Debug.Log(timer);
	} 
	while (timer > 0) {
		yield WaitForSeconds(.25);
		text.color = Color.yellow;
		text.fontSize = 30;
		text.text = "Timer :" + timer;
		yield WaitForSeconds(.25);
		text.color = Color.blue;
		text.fontSize = 40;
		text.text = "Timer :" + timer;
		yield WaitForSeconds(.25);
		text.color = Color.yellow;
		text.fontSize = 30;
		text.text = "Timer :" + timer;
		yield WaitForSeconds(.25);
		text.color = Color.blue;
		text.fontSize = 40;
		text.text = "Timer :" + timer;
		timer -= 1;
		Debug.Log(timer);
		menu.GetComponent.<Menu_Control>().Level_Complete();
	}
	text.text = "Timer Complete!";
	Debug.Log("Timer Complete!");
	menu.GetComponent.<Menu_Control>().Gameover_Update();
}
