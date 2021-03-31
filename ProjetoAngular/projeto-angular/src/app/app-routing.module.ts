import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/post/create/create.component';
import { ListComponent } from './components/post/list/list.component';
import { UpdateComponent } from './components/post/update/update.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'create', component: CreateComponent },
	{ path: 'update/:id', component: UpdateComponent },
	{ path: 'list', component: ListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
