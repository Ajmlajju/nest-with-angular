import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  dept = [
    { 
      id: 1,
      title: 'BANKING',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/bfs.png"
    },
    { 
      id: 2,
      title: 'GIS',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/gis.jpg"
    },
    { 
      id: 3,
      title: 'Industial',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/ibu.jpg"
    },
    { 
      id: 4,
      title: 'Health care unit',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/hcu.jpg"
    },
    { 
      id: 5,
      title: 'GIS',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/mbu.jpg"
    },
    { 
      id: 6,
      title: 'Aero space and defence',
      description: "loremkaslhfahfiaofhiaofhoaef",
      img: "../../../assets/abu.jpg"
    },
  ];
}

