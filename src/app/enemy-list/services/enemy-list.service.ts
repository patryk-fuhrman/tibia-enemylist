import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Enemy } from '../models/enemy'
import { Attributes } from './../models/attributes'
import { LoaderService } from './loader.service'

@Injectable()
export class EnemyListService {

    constructor(
        private httpClient: HttpClient,
        private loaderService: LoaderService,
    ) { }

    public getHuntedPlayers(): Observable<any> {
        return this.httpClient
            .get<{data: [{id: number, type: string, attributes: Attributes}]}>(`${environment.apiBaseUrl}/enemies`)
            .pipe(
                map(data => data.data),
                map(json => json.map(data => new Enemy(data.id, data.type, data.attributes))),
                tap(() => this.loaderService.show$.next(false)),
            )
    }
}
