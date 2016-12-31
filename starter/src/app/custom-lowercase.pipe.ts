import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "mylowercase",
    pure: false
})

export class CustomLowercase implements PipeTransform{

    transform(value: string): string{
        return value.toLowerCase()
    }
}

