import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  @Input() label!: string;
  @Output() value = new EventEmitter<string>();
  private showPassword: boolean = false;
  type: 'password' | 'text' = 'password';
  buttonLabel: '表示' | '非表示' = '表示';

  onLostFocus($event: string) {
    this.value.emit($event);
  }

  changeVisibility() {
    this.type = this.showPassword ? 'password' : 'text';
    this.buttonLabel = this.showPassword ? '非表示' : '表示';
    this.showPassword = !this.showPassword;
  }
}
