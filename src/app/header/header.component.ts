import { Component , EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})

export class HeaderComponent {
 title= ' ';
 @Output() menuClicked = new EventEmitter<String>();
 onFeatureSelection(feature: string) {
    this.menuClicked.emit(feature);
 }
}
