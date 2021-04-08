import uuid from "react-uuid";

export default function alertsReducer(toasts, { type, payload }) {
    switch (type) {
        case 'add':
            const id = uuid();
            return [...toasts, { ...payload, id }];
        case 'set':
            return [payload];
        case 'delete':
            return toasts.filter((toast) => toast.id !== payload.id);
        default:
            throw new Error(`Invalid type for ${this.name} (type = ${type}).`);
    }
}