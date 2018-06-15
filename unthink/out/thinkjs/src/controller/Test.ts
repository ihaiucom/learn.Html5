import {Test} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  回显
     */
    async EchoAction() {
        const reqData = <Test.EchoRequest>(<any>this.post()).data;
        const resData = new Test.EchoResponse();

        this.success(resData);
    }
}
