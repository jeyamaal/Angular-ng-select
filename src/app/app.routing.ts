import {Routes} from "@angular/router";
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SchoolComponent } from "./school/school.component";

// Define the APP routes
const APP_ROUTES:Routes = [
    {path:'home',component:HomeComponent},
    {path:'school',component:SchoolComponent}
];

// Export the Routes
export const routing=RouterModule.forRoot(APP_ROUTES);