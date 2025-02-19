import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { MatCardModule }  from '@angular/material/card';


@Component({
    selector: 'app-products',
    imports: [CommonModule, MatCardModule], 
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    providers: [ApiService ]
})
export class ProductsComponent implements OnInit {
  users: any[] = [];

constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data.data;
    });
  }

 
}

