import {System} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  玩家登陆
     */
    async loginAction() {
        const reqData = <System.loginRequest>(<any>this.post()).data;
        const resData = new System.loginResponse();

        this.success(resData);
    }

    async LogoutAction() {
        const reqData = <System.LogoutRequest>(<any>this.post()).data;
        const resData = new System.LogoutResponse();

        this.success(resData);
    }
}
