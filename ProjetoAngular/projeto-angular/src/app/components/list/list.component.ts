import { Component, OnInit } from '@angular/core';
import { faRedo, faClipboard, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public faRedo = faRedo;
	public faClipboard = faClipboard;
	public faPlusCircle = faPlusCircle;

	constructor() { }

	ngOnInit(): void {
	}

}
