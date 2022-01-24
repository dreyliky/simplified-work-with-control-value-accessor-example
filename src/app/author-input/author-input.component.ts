import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-author-input',
    templateUrl: './author-input.component.html',
    styleUrls: ['./author-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorInputComponent),
            multi: true
        }
    ]
})
export class AuthorInputComponent implements ControlValueAccessor {
    public value: string | undefined;

    private onChange!: (value: string) => void;
    private onTouched!: () => void;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public onInputValueChange(event: Event): void {
        const targetDivElement = event.target as HTMLInputElement;
        const value = targetDivElement.value;

        this.onChange(value);
    }

    public writeValue(value: string): void {
        this.value = value;

        this.changeDetector.detectChanges();
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
