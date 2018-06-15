/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;


/// <summary>
///  所有入库对象应该继承此类 
/// </summary>
public class DBBase 
{
}

/// <summary>
///  普通数据对象基类
/// </summary>
public class DBObject  : DBBase
{
    public string uuid = default(string);
}

/// <summary>
///  分库分表数据对象基类
/// </summary>
public class ShardDBObject  : DBBase
{
    public string uuid = default(string);
    public long entityId = default(long);
}

/// <summary>
///  玩家物品的结构
/// </summary>
public class Item  : ShardDBObject
{
    /// <summary>
    /// 对应的策划表id
    /// </summary>
    public int cid = default(int);
    /// <summary>
    ///  物品的数量
    /// </summary>
    public int count = default(int);
    /// <summary>
    ///  对应物品的状态。 
    /// </summary>
    public EItemState state = 0;
}

public class Task  : ShardDBObject
{
    public int cid = default(int);
    /// <summary>
    ///  或者定义一个对应枚举
    /// </summary>
    public int phase = default(int);
}

public class Role 
{
    public int id = default(int);
    public string name = default(string);
}



