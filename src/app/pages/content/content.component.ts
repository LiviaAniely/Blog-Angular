import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { data } from "../../data/data";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  image: string = "";
  contentTitle: string = "";
  description: string = "";
  private id: string | null = "0";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get("id");

    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null){
    const result = data.filter(article => article.id === Number(this.id))[0];

    this.image = result.photo;
    this.contentTitle = result.title;
    this.description = result.description;
  }
}
