import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import Swal from "sweetalert2";
import { v4 as uuid } from 'uuid';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	public faEdit = faEdit;
	public faSave = faSave;

	tittle: string;
	category: string;
	description: any;
	date: any;
	abstract: any;

	constructor(private route: Router) { 
		this.tittle = '';
		this.category = '';
	}

	ngOnInit(): void {
	}

	save() {
		if (!this.tittle.length) {
			Swal.fire('Oops...', 'Titulo não fornecido', 'error');
			return;
		}

		if (!this.category.length) {
			Swal.fire('Oops...', 'Categoria não fornecida', 'error');
			return;
		}

		if (!this.category.length) {
			Swal.fire('Oops...', 'data não fornecida', 'error');
			return;
		}

		let requestPost = {
			id: uuid(),
			tittle: this.tittle,
			category: this.category,
			description: this.description,
			abstract: this.abstract,
			date: this.date
		}
		
		if (!StorageService.addPost(requestPost)) {
			Swal.fire('Oops...', 'Erro para salvar o post', 'error');
			return;
		}
		this.route.navigate(['']);
	}

}
