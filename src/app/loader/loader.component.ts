import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { LoaderService } from './../enemy-list/services/loader.service'

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

    public isShown$: Observable<boolean> = this.loaderService.show$

    constructor(
        private loaderService: LoaderService,
    ) {}
}
