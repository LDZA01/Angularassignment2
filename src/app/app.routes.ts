import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: '', redirectTo: '/reactive-form', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
