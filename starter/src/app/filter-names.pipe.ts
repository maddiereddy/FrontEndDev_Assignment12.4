import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "filterNames",
    pure: false
})

export class FilterNames implements PipeTransform{

    transform(items: any[], args: string[]): any {
        return items.filter(item => item.name.charAt(0) === args[0])
    }
}
