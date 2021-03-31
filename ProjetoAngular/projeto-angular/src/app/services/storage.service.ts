import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor() { }

	public static getPosts():any {
		try {
			return JSON.parse(localStorage.getItem('posts') || '{}');
		} catch (error) {
			console.log(error);
			return {};
		}
	}

	public static updatePost(newPost: any): boolean {
		try {
			let posts = JSON.parse(localStorage.getItem('posts') || '{}');
			for (let i = 0; i < posts.length; i++) {
				if (posts[i].id == newPost.id) {
					posts[i] = newPost;
				}
			}
			localStorage.setItem('posts', JSON.stringify(posts));
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public static addPost(post: object): boolean {
		try {
			let posts = JSON.parse(localStorage.getItem('posts') || '[]');
			console.log(posts);
			posts.push(post);
			localStorage.setItem('posts', JSON.stringify(posts));
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public static deletePost(id: string): boolean {
		try {
			let posts = JSON.parse(localStorage.getItem('posts') || '{}');
			for (let i = 0; i < posts.length; i++) {
				if (posts[i].id == id) {
					posts.splice(i, 1);
				}
			}
			localStorage.setItem('posts', JSON.stringify(posts));
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}

	}
}
