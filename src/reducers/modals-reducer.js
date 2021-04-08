import uuid from "react-uuid";

export default function modalsReducer(modals, { type, payload }) {
    switch (type) {
        case 'add':
            const id = uuid();
            return [...modals, { ...payload, id }];
        case 'set':
            return [payload];
        case 'delete':
            return modals.filter((modal) => modal.id !== payload.id);
        default:
            throw new Error(`Invalid type for ${this.name} (type = ${type}).`);
    }
}