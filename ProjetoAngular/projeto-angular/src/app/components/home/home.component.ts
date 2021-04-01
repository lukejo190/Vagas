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
	optionSearch: string;
	valueSearch: string;

	constructor() { 
		this.optionSearch = "";
		this.valueSearch = "";
	}

	ngOnInit(): void {
		this.posts = StorageService.getPosts();
	}
}
