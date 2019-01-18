import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class LoaderService {
    public show$: BehaviorSubject<boolean> = new BehaviorSubject(true)
}
