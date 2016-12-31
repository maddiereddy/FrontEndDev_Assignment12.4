import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "truncate",
    pure: false
})

export class Truncate implements PipeTransform{

    transform(val, args) {
        if (args === undefined) {
            return val
        }

        if (val.length > args) {
            return val.substring(0, args)
        } else {
            return val
        }
    }
}
