/**
 * 全局变量, 慎用.Created by geliang@matchvs.com on 2018/6/27 
 */
class GameData {

    public static FPS: number = 10; //logic fps
    public static BUFFER_TIME: number = 100;//buffer delay for network flutter 



    // room
    public static debug: boolean = true;

    public static userId: number = 0;
    public static userName: string = "";
    public static avatarUrl: string = "avatar_png";
    public static token: string = "";



    public static MAX_BLOOD: number = 20;
    public static BASE_SCORE: number = 1;
    public static Gold4Relive: number = 10;
    public static TIME_MIN_INTVRAL_ENEMY_CREATE = 0.2;
    public static SPEED_MAX_RUN_MULTIPLE: number = 2;
    public static GAME_TOTAL_TIME: number = 100;



    // 状态 用于状态标识 
    public static GAME_STATUS_PLAY: number = 5;
    public static GAME_STATUS_SINGLE: number = -1;
    public static GAME_STATUS_OVER: number = 6;
    public static GAME_STATUS_PLAY_DEAD: number = 7;
    public static gameStatus: number = GameData.GAME_STATUS_SINGLE;


    public static closeMusic: Boolean = false;
    public static closeBgMusic: Boolean = false;


    public static bgSpeed: number = 1;
    public static enemySpeed: number = 30;//enemy run speed
    public static createEnemyInterval: number = 1;//secend


}