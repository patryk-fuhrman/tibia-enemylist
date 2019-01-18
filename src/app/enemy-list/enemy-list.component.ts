import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import { Enemy } from './models/enemy'
import { EnemyListService } from './services/enemy-list.service'

@Component({
    templateUrl: './enemy-list.component.html',
    styleUrls: ['./enemy-list.component.scss'],
})
export class EnemyListComponent implements OnDestroy {

    public enemies: Observable<Enemy[]> = this.enemyListService.getHuntedPlayers()

    public displayedColumns: string[] = ['name', 'level', 'vocation', 'reason', 'payment', 'created_at']

    private destroyed$: Subject<void> = new Subject()

    constructor(
        private enemyListService: EnemyListService,
    ) {}

    public ngOnDestroy(): void {
        this.destroyed$.next()
    }
}
