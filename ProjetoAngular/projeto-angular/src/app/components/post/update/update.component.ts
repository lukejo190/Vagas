import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRedo, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import Swal from "sweetalert2";


@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
	public faRedo = faRedo;
	public faClipboard = faClipboard;

	post: any;
	count: number;

	constructor(private ActivatedRoute: ActivatedRoute, private router: Router) {
		this.count = 0;
	}


	ngOnInit(): void {
		let id = this.ActivatedRoute.snapshot.paramMap.get('id');
		let posts = StorageService.getPosts();
		this.post = posts.find((post: any) => post.id == id);
		this.count = Object.keys(this.post).length;
	}

	update() {
		if (!StorageService.updatePost(this.post)) {
			Swal.fire('Oops...', 'Erro para salvar o post', 'error');
			return;
		}
		this.router.navigate(['/list']);
	}

}
