import {StringValidator} from "./Validation"

export class AA implements StringValidator
{
    isAcceptable(s: string): boolean
    {
        return true;
    }
}