import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'app-content-input',
    templateUrl: './content-input.component.html',
    styleUrls: ['./content-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentInputComponent implements ControlValueAccessor {
    public value: string | undefined;

    private onChange!: (value: string) => void;
    private onTouched!: () => void;

    constructor(
        @Self() private readonly ngControl: NgControl,
        private readonly changeDetector: ChangeDetectorRef
    ) {
        this.ngControl.valueAccessor = this;
    }

    public onEditorValueChange(event: Event): void {
        const targetDivElement = event.target as HTMLDivElement;
        const content = targetDivElement.innerText;

        this.onChange(content);
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
