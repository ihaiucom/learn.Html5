/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 **/
 
/// <summary>
/// 物品状态
/// </summary>
public enum EItemState
{
    /// <summary>
    /// 正常状态
    /// </summary>
    normal = 0,
    /// <summary>
    /// 被锁定
    /// </summary>
    locked = 1,
    /// <summary>
    /// 冷却中
    /// </summary>
    countdown = 2,
}    

public enum EHero
{
    A = 0,
    B = 1,
    C = 2,
}    

/// <summary>
///  通用枚举
/// </summary>
public class ECommon
{
    /// <summary>
    /// 名字最大长度
    /// </summary>
    public static int MaxNameLenth = 20;
    /// <summary>
    ///  默认名字
    /// </summary>
    public static string DefaultName = "Brad Pitt";
    /// <summary>
    ///  移动速度
    /// </summary>
    public static double MoveSpeed = 1.3;
    /// <summary>
    ///  开启跳跃
    /// </summary>
    public static bool CanJump = false;
}    

/// <summary>
/// 工具自动生成的枚举，记录协议版本号
/// </summary>
public class ProtoVersion
{
    /// <summary>
    /// 协议版本号数字表示
    /// </summary>
    public static int versionCode = 48;
    /// <summary>
    /// 协议版本号字符表示
    /// </summary>
    public static string versionName = "0.4.8";
}    

/// <summary>
/// 工具自动生成的枚举，枚举所有的存库对象
/// </summary>
public class DBOType
{
    /// <summary>
    ///  玩家物品的结构
    /// </summary>
    public static string Item = "Item";
    public static string Task = "Task";
}    



