import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public faSearch = faSearch;

	posts: any;
	count: number;

	constructor() { 
		this.count = 0;
	}

	ngOnInit(): void {
		this.posts = StorageService.getPosts();
		this.count = Object.keys(this.posts).length;
	}
}
