import {Roles} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     * 选择角色
     */
    async GetRoleListAction() {
        const reqData = <Roles.GetRoleListRequest>(<any>this.post()).data;
        const resData = new Roles.GetRoleListResponse();

        this.success(resData);
    }
}
