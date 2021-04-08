export default function itemsReducer(items, { type, payload }) {
    switch (type) {
        case 'add':
            if (payload.name) {
                return [...items, { content: "", ...payload}];
            }
            return items;
        case 'edit':
            return items.map((item) => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        ...payload
                    }
                }
                return item;
            })
        case 'remove':
            return items.filter(item => item.id !== payload.id);
        default:
            throw new Error(`Invalid type for ${this.name} (type = ${type}).`);
    }
}