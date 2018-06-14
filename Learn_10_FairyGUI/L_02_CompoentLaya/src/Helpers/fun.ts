function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function isNullOrEmpty(x: string)
{
    return x == null || x == undefined || x == "";
}