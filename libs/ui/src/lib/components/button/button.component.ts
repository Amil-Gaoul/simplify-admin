import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { ButtonAppearance, ButtonSize } from './button.types';

@Component({
    selector: 'ui-button, button[uiButton], a[uiButton]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public appearance: ButtonAppearance = 'primary';
    @Input() public size: ButtonSize = 'medium';

    @HostBinding('class') public get classes() {
        return {
            button: true,
            [`button_${this.appearance}`]: true,
            [`button_${this.size}`]: true
        };
    }
}
