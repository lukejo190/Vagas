import { Component, OnInit } from '@angular/core';
import { faRedo, faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	public faRedo = faRedo;
	public faClipboard = faClipboard;

	constructor() { }

	ngOnInit(): void {
	}

}
