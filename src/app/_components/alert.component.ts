import {ChangeDetectorRef, Component, OnInit, OnDestroy, Input} from "@angular/core";
import  {Router, NavigationStart} from "@angular/router";
import {Subscription} from "rxjs";

import {Alert, AlertType} from "@app/_models";
import {AlertService} from "@app/_services";

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    standalone: false
})
export class AlertComponent implements OnInit, OnDestroy {
    private scheduleDetectChanges() {
        
        setTimeout(() => this.cdr.detectChanges());
    }
    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts : Alert[] = [];
    alertSubcription = Subscription;
    routeSubscription = Subscription;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private cdr: ChangeDetectorRef
    )
}