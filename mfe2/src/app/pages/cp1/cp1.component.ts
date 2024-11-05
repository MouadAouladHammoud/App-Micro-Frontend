import { Component, OnInit } from '@angular/core';
import { Cp1Service } from '../../services/cp1.service';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.scss']
})

export class Cp1Component implements OnInit {
  
  data: any;
  constructor(private cp1Service: Cp1Service) { }

  ngOnInit(): void {
    this.cp1Service.fetchData().subscribe({
      next: (response) => this.data = response,
      error: (err) => console.error('Error:', err),
    });
  }

}
