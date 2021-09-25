export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export class ValidatableImpl {
    constructor(private validation: Validatable) {
    }

    isValid(): boolean {
        const validation = this.validation;
        if (typeof validation.value === `string`) {
            if (validation.required && validation.value.toString().trim().length === 0) return false;
            if (validation.minLength != null && validation.value.length < validation.minLength) return false;
            if (validation.maxLength != null && validation.value.length > validation.maxLength) return false;
        }

        if (typeof validation.value === `number`) {
            if (validation.required && isNaN(+validation.value)) return false;
            if (validation.min != null && validation.value < validation.min) return false;
            if (validation.max != null && validation.value > validation.max) return false;
        }

        return true;
    }
}
