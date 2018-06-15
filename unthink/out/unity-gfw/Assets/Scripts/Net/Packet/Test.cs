// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:40:17,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Test
{
    [RequestMsg(URL = "Test/Echo")]
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

}
