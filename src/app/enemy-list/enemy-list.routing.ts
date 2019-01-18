import { Routes } from '@angular/router'
import { EnemyListComponent } from './enemy-list.component'

export const enemyListRoutingDefinition: Routes = [
    {
        path: 'enemy-list',
        component: EnemyListComponent,
    },
    {
        path: '',
        redirectTo: 'enemy-list',
        pathMatch: 'full',
    },
]
