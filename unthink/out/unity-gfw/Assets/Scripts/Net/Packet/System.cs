// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:40:17,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.System
{
    /// <summary>
    ///  请求登陆
    /// </summary>
    [RequestMsg(URL = "System/login")]
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

    [RequestMsg(URL = "System/Logout")]
    public class LogoutRequest
    {
    } 

    public class LogoutResponse 
    {
        public int error = default(int);
    } 

}
