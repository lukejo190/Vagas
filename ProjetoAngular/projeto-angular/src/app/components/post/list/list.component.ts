import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRedo, faClipboard, faPlusCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import Swal from "sweetalert2";

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public faRedo = faRedo;
	public faClipboard = faClipboard;
	public faPlusCircle = faPlusCircle;
	public faEdit = faEdit;
	public faTrash = faTrash;

	posts: any;
	count: number;

	constructor(private router: Router) {
		this.count = 0;
	}

	ngOnInit(): void {
		this.posts = StorageService.getPosts();
		this.count = Object.keys(this.posts).length;
	}

	sendPostUpdate(post: any): void {
		this.router.navigate(['/update/' + post.id]);
	}

	delete(id: string) {
		for (let i = 0; i < this.posts.length; i++) {
			if (this.posts[i].id == id) {
				this.posts.splice(i, 1);
			}
		}
		if (!StorageService.deletePost(id)) {
			Swal.fire('Oops...', 'Erro para salvar o post', 'error');
			return;
		}
		Swal.fire('', 'post removido com sucesso', 'success');
	}

}
