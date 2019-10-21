import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators'
import { Enemy } from './models/enemy'
import { EnemyListService } from './services/enemy-list.service'

@Component({
    selector: 'app-enemy-list',
    templateUrl: './enemy-list.component.html',
    styleUrls: ['./enemy-list.component.scss'],
})
export class EnemyListComponent implements OnInit, OnDestroy {

    public onlineOnly: boolean = false

    public enemies: Enemy[] = []

    public displayedColumns: string[] = ['name', 'level', 'vocation', 'reason', 'payment', 'created_at']

    private destroyed$: Subject<void> = new Subject()

    constructor(
        private enemyListService: EnemyListService,
    ) { }

    public ngOnInit(): void {
        this.getEnemies(false)
    }

    public ngOnDestroy(): void {
        this.destroyed$.next()
    }

    public toggleOnlineOnly(checked: boolean): void {
        this.getEnemies(checked)
    }

    public getEnemies(online: boolean): void {
        this.enemyListService
            .getHuntedPlayers(online)
            .pipe(
                takeUntil(this.destroyed$),
                take(1),
            )
            .subscribe(enemies => this.enemies = enemies)
    }
}
