import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatCheckboxModule, MatTableModule } from '@angular/material'
import { EnemyListComponent } from './enemy-list.component'
import { EnemyListService } from './services/enemy-list.service'
import { LoaderService } from './services/loader.service'

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCheckboxModule,
        FormsModule,
    ],
    declarations: [
        EnemyListComponent,
    ],
    exports: [
        EnemyListComponent,
    ],
    providers: [
        EnemyListService,
        LoaderService,
    ],
})
export class EnemyListModule {}
