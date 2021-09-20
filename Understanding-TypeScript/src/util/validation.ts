namespace App {
    export interface Validatable {
        value: string | number;
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    }

    export class ValidatableImpl {
        value: string | number;
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;

        constructor(args: Validatable) {
            this.value = args.value;
            this.required = args.required;
            this.minLength = args.minLength;
            this.maxLength = args.maxLength;
            this.min = args.min;
            this.max = args.max;
        }

        isValid(): boolean {


            if (typeof this.value === `string`) {
                if (this.required && this.value.toString().trim().length === 0) return false;
                if (this.minLength != null && this.value.length < this.minLength) return false;
                if (this.maxLength != null && this.value.length > this.maxLength) return false;
            }

            if (typeof this.value === `number`) {
                if (this.required && isNaN(+this.value)) return false;
                if (this.min != null && this.value < this.min) return false;
                if (this.max != null && this.value > this.max) return false;
            }

            return true;
        }
    }
}