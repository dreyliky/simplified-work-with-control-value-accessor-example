import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public formGroup = new FormGroup({
        title: new FormControl(''),
        author: new FormControl(''),
        content: new FormControl('Your story...')
    });
}
