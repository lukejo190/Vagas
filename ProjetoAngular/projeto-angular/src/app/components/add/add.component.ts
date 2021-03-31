import { Component, OnInit } from '@angular/core';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	public faEdit = faEdit;
	public faSave = faSave;

	constructor() { }

	ngOnInit(): void {
	}

}
