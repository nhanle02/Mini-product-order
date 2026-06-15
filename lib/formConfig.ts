import { FieldConfig } from "./types";

export const checkoutFields: FieldConfig[] = [
    {
        name: "customerName",
        label: "Customer Name",
        type: "text",
    },
    {
        name: "phone",
        label: "Phone",
        type: "text",
    },
    {
        name: "color",
        label: "Color",
        type: "select",
        options: [
            "Black",
            "White",
            "Blue",
        ],
    },
    {
        name: "services",
        label: "Services",
        type: "checkbox",
        options: [
            "Gift Wrap",
            "Express Shipping",
        ],
    },
    {
        name: "quantity",
        label: "Quantity",
        type: "slider",
    },
    {
        name: "logo",
        label: "Custom Logo",
        type: "image",
    },
];