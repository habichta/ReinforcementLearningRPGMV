(function() {

    DataManager.prototype.gatherGameStateData = function(){


        console.log($gamePlayer)
        // $gameTemp          = new Game_Temp();
        // $gameSystem        = new Game_System();
        // $gameScreen        = new Game_Screen();
        // $gameTimer         = new Game_Timer();
        // $gameMessage       = new Game_Message();
        // $gameSwitches      = new Game_Switches();
        // $gameVariables     = new Game_Variables();
        // $gameSelfSwitches  = new Game_SelfSwitches();
        // $gameActors        = new Game_Actors();
        // $gameParty         = new Game_Party();
        // $gameTroop         = new Game_Troop();
        // $gameMap           = new Game_Map();
        // $gamePlayer        = new Game_Player();
    
    }

DataManager.prototype.exposeGameState = function(){


}

var scene_manager = SceneManager;

SceneManager.prototype.update = function() {
    try {
        scene_manager.tickStart();
        if (Utils.isMobileSafari()) {
            scene_manager.updateInputData();
        }
        scene_manager.updateManagers();

        scene_manager.updateMain();
        scene_manager.tickEnd();

        DataManager.gatherGameStateData();

    } catch (e) {
        scene_manager.catchException(e);
    }
};



})