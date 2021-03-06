import {Component, Input} from "@angular/core";
import {AmigoShareRequest} from "../amigo-share-request/amigo-share-request";

/**
 * AmigoShareRequestCardComponent for rendering an AmigoShareRequest as a card.
 */
@Component(
    {
        selector: "amigo-share-request-card",
        templateUrl: "build/amigo-share-request-card/amigo-share-request-card.component.html"
    }
)
export class AmigoShareRequestCardComponent {

    @Input()
    public amigoShareRequest: AmigoShareRequest;

    @Input()
    public accept: (AmigoShareRequest) => void;

    @Input()
    public decline: (AmigoShareRequest) => void;

    public acceptRequest() {
        this.accept(this.amigoShareRequest);
    }

    public declineRequest() {
        this.decline(this.amigoShareRequest);
    }

}
