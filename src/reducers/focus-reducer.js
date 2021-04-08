export default function focusReducer(focusElements, { type, payload }) {
    switch (type) {
        case 'focus':
            return [...focusElements, payload ];
        default:
            throw new Error(`Invalid type for ${this.name} (type = ${type}).`);
    }
}