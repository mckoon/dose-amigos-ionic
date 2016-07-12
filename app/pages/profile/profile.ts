import {Component, Type} from "@angular/core";
import {AuthService} from "../../auth-service/auth.service";
import {FeedPage} from "../feed/feed";
import {NavController} from "ionic-angular/index";
import {DoseAmigosToolbar} from "../../dose-amigos-toolbar/dose-amigos-toolbar.component";

@Component(
    {
        templateUrl: 'build/pages/profile/profile.html',
        directives: [
            DoseAmigosToolbar
        ]
    }
)
export class ProfilePage {

    public title: string = "Profile";

    constructor(
        private auth: AuthService,
        private nav: NavController
    ) {

    }
    
    public cancel() {
        this.nav.setRoot(FeedPage);
    }

}
