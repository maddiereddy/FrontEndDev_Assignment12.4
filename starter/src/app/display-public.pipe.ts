import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "displayPublic",
    pure: false
})

export class displayPublic implements PipeTransform{

    transform(items: any[]): any {
        return items.filter(item => item.type.indexOf('public') !== -1)
    }
}
