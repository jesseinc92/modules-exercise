// Helper functions

function choice (items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove (items, item) {
    if (items.indexOf(item) === -1) return undefined;
    
    return items.filter(i => i !== item);
}


export { choice, remove };