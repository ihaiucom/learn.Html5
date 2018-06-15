/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 */

export enum EItemState { //物品状态
    normal = 0, //正常状态
    locked = 1, //被锁定
    countdown = 2, //冷却中
}

export enum EHero { 
    A = 0, 
    B = 1, 
    C = 2, 
}

export class ECommon { // 通用枚举
    static MaxNameLenth = 20; //名字最大长度
    static DefaultName = "Brad Pitt"; // 默认名字
    static MoveSpeed = 1.3; // 移动速度
    static CanJump = false; // 开启跳跃
}

export class ProtoVersion { //工具自动生成的枚举，记录协议版本号
    static versionCode = 48; //协议版本号数字表示
    static versionName = "0.4.8"; //协议版本号字符表示
}

export class DBOType { //工具自动生成的枚举，枚举所有的存库对象
    static Item = "Item"; // 玩家物品的结构
    static Task = "Task"; 
}

export class DBOShared { //工具自动生成的枚举，枚举所有的存库对象的元信息
    static Item = { dbname: 'gamedb',tbname: 'Item',shared: true }; // 玩家物品的结构
    static Task = { dbname: 'gamedb',tbname: 'Task',shared: true }; 
}


