import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public faSearch = faSearch;

	constructor() { }

	ngOnInit(): void {
	}

	cards = [
		{tittle: "teste1", text: "texto test1", id: 1},
		{tittle: "teste2", text: "texto test2", id: 2},
		{tittle: "teste3", text: "texto test3", id: 3},
		{tittle: "teste4", text: "texto test1", id: 4},
		{tittle: "teste5", text: "texto test2", id: 5},
		{tittle: "teste6", text: "texto test3", id: 6},
	];
}
