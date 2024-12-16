import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Import standalone AppComponent
import { RegistrarseComponent } from './registrarse/registrarse.component'; // Import standalone RegistrarseComponent
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

const appRoutes: Routes = [
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/registrarse', pathMatch: 'full' }, // Default route (optional)
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for two-way data binding
    RouterModule.forRoot(appRoutes), // Configure routes
    RegistrarseComponent,  // Import RegistrarseComponent directly here
  ],
  providers: [],
})
export class AppModule { }
