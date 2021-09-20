namespace App {
    export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const origin = descriptor.value;
        return {
            configurable: true,
            get() {
                return origin.bind(this);
            }
        }
    }
}