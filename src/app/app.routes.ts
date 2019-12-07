import {Routes} from '@angular/router';
import {BodyComponent} from './body/body.component';
import { LansamentosComponent } from './lansamentos/lansamentos.component';

export const ROUTES: Routes = [
    {path: 'meutoptress', component: BodyComponent},
    {path: 'lansamentoss', component: LansamentosComponent}
];
