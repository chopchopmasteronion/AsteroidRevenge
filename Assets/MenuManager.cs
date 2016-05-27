using UnityEngine;
using System.Collections;

public class MenuManager : MonoBehaviour {
	public Menu CurrentMenu;
	bool isPause = false;

	public void Start() {
		if (CurrentMenu != null) 
			ShowMenu (CurrentMenu);
	}

	public void ShowMenu(Menu menu){
		if (CurrentMenu != null) 
			CurrentMenu.isOpen = false;

		CurrentMenu = menu;
		CurrentMenu.isOpen = true;
	}

	public void LoadLevel(string level){
		Application.LoadLevel (level);
	}

	public void exitGame() {
		Application.Quit ();
	}

	public void pauseGame(bool pauseStatus) {
		if (pauseStatus == true) {
			Time.timeScale = 0;
		} else {
			Time.timeScale = 1;
		}
	}
}
