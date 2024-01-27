import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  image: string = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  contentTitle: string = "Notícia";
  description: string = "Olá mundo!";

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(value => console.log(value))
  }
}
