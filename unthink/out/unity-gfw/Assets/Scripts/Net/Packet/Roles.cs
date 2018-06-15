// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:40:17,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Roles
{
    [RequestMsg(URL = "Roles/GetRoleList")]
    public class GetRoleListRequest
    {
    } 

    public class GetRoleListResponse 
    {
        public int error = default(int);
        public List<Role> roles = default(List<Role>);
    } 

}
