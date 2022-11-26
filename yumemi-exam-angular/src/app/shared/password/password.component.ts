import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @Input() label!: string;
  @Output() value = new EventEmitter<string>();
  showPassword: boolean = false;

  onLostFocus($event: string) {
    if ($event.trim().length) {
      this.value.emit($event);
    }
  }

  changeVisibility() {
    this.showPassword = !this.showPassword;
  }
}
