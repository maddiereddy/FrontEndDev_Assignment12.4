import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "myuppercase",
    pure: false
})

export class CustomUppercase implements PipeTransform{

    transform(value: string): string{
        return value.toUpperCase()
    }
}
