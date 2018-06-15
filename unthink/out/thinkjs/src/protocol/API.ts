/**
 *  MADE BY GENERATOR AT 2018-6-14 11:40:17,
 *  PLEASE DO NOT REWRITE.
 */
 
import * as SS from "./SharedStruct";
import * as SE from "./SharedEnum";

export namespace System {

    export class loginRequest { // 请求登陆 
        name: string = ""; 
        pwd: string = ""; 
    } 

    export class loginResponse {  
        error: number = 0; //错误类型
    }  
    
    export class LogoutRequest {  
    } 

    export class LogoutResponse {  
        error: number = 0; 
    }  
    
}

export namespace Test {

    export class EchoRequest {  
        msg: string = ""; // 回显消息
        time: number = 0; //时间戳
    } 

    export class EchoResponse {  
        msg: string = ""; //客户端发来的消息
        time: number = 0; //客户端发来的时间戳
    }  
    
}

export namespace Roles {

    export class GetRoleListRequest {  
    } 

    export class GetRoleListResponse {  
        error: number = 0; 
        roles: Array<SS.Role> | null = null; 
    }  
    
}

        
        