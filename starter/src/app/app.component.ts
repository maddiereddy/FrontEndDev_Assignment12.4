import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    private users: any[] = [
        {name: 'Mahesh', type: 'private', description: 'He is an employee of Acadgild and is a wonderful teacher'},
        {name: 'Naren', type: 'public', description: 'Naren is an employee of Facebook and is a design engineer'},
        {name: 'Amit', type: 'private', description: 'Amit is a student at MIT and loves to parasail and bungee jump on weekends'},
        {name: 'Sara', type: 'private', description: 'She is an employee of Acadgild, is a wonderful mentor and loves to paint'},
        {name: 'Raina', type: 'public', description: 'Raina is an actress and has been in more that fifty movies in Bollywood'},
        {name: 'Veda', type: 'public', description: 'Veda is a grandmother with 12 grandchildren and 4 children and loves to knit'},
        {name: 'Damodar', type: 'public', description: 'He is an owner of a printing press and lives in Mumbai'},
        {name: 'Darla', type: 'private', description: 'Darla owns a Starbucks and loves to hike in the mountains on weekends'}
  ]

    private friends: any[] = [
        {name: 'Avnesh', hobby: 'Coding'},
        {name: 'Kaushik', hobby: 'Coding'},
        {name: 'Archana', hobby: 'Cooking'},
        {name: 'Piyush', hobby: 'Singing'},
        {name: 'Archit', hobby: 'Sports'},
        {name: 'Hema', hobby: 'Hiking'},
        {name: 'Damodar', hobby: 'Gossiping'},
        {name: 'Anna', hobby: 'Biking'}
    ]
}
