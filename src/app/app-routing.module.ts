import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('./features/movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: 'contact-form',
        loadChildren: () =>
          import('./features/contact-form/contact-form.module').then(
            (m) => m.ContactFormModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
