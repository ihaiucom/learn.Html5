/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 */

import * as SE from "./SharedEnum";

export class DBBase { // 所有入库对象应该继承此类 
}

export class DBObject extends DBBase { // 普通数据对象基类
    uuid: string = ""; 
}

export class ShardDBObject extends DBBase { // 分库分表数据对象基类
    uuid: string = ""; 
    entityId: number = 0; 
}

export class Item extends ShardDBObject { // 玩家物品的结构
    cid: number = 0; //对应的策划表id
    count: number = 0; // 物品的数量
    state: SE.EItemState = 0; // 对应物品的状态。 
}

export class Task extends ShardDBObject { 
    cid: number = 0; 
    phase: number = 0; // 或者定义一个对应枚举
}

export class Role { 
    id: number = 0; 
    name: string = ""; 
}



