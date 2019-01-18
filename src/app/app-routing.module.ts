import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { enemyListRoutingDefinition } from './enemy-list/enemy-list.routing'

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            ...enemyListRoutingDefinition,
        ],
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
