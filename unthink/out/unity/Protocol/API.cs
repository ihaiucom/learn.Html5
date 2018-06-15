/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 **/
 
using System.Collections.Generic;

public class SystemPxy {
    
    /// <summary>
    ///  请求登陆
    /// </summary>
    public class LoginRequest
    {
        public string name = default(string);
        public string pwd = default(string);
    } 

    public class LoginResponse
    {
        /// <summary>
        /// 错误类型
        /// </summary>
        public int error = default(int);
    } 

    /// <summary>
    ///  玩家登陆
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<LoginResponse> Login(string name, string pwd)
    {
        var url = ServerContext.UrlPathJoin("System", "login");
        var req = new LoginRequest()
        {
            name = name,
            pwd = pwd,
        };
        return new ServerResponse<LoginResponse>(url, req);
    } 

    public class LogoutRequest
    {
    } 

    public class LogoutResponse
    {
        public int error = default(int);
    } 

    public static ServerResponse<LogoutResponse> Logout()
    {
        var url = ServerContext.UrlPathJoin("System", "Logout");
        var req = new LogoutRequest()
        {
        };
        return new ServerResponse<LogoutResponse>(url, req);
    } 

}

public class TestPxy {
    
    public class EchoRequest
    {
        /// <summary>
        ///  回显消息
        /// </summary>
        public string msg = default(string);
        /// <summary>
        /// 时间戳
        /// </summary>
        public int time = default(int);
    } 

    public class EchoResponse
    {
        /// <summary>
        /// 客户端发来的消息
        /// </summary>
        public string msg = default(string);
        /// <summary>
        /// 客户端发来的时间戳
        /// </summary>
        public int time = default(int);
    } 

    /// <summary>
    ///  回显
    /// </summary>
    /// <param name="msg"> 回显消息</param> 
    /// <param name="time">时间戳</param> 
    /// <returns></returns>
    public static ServerResponse<EchoResponse> Echo(string msg, int time)
    {
        var url = ServerContext.UrlPathJoin("Test", "Echo");
        var req = new EchoRequest()
        {
            msg = msg,
            time = time,
        };
        return new ServerResponse<EchoResponse>(url, req);
    } 

}

public class RolesPxy {
    
    public class GetRoleListRequest
    {
    } 

    public class GetRoleListResponse
    {
        public int error = default(int);
        public List<Role> roles = default(List<Role>);
    } 

    /// <summary>
    /// 选择角色
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetRoleListResponse> GetRoleList()
    {
        var url = ServerContext.UrlPathJoin("Roles", "GetRoleList");
        var req = new GetRoleListRequest()
        {
        };
        return new ServerResponse<GetRoleListResponse>(url, req);
    } 

}

        
        