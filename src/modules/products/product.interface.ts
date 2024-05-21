interface Variant {
    type: string;
    value: string;
}

interface Inventory {
    quantity: number;
    inStock: boolean;
}

interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
}


