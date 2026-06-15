export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type FieldType =
    | "text"
    | "checkbox"
    | "select"
    | "slider"
    | "image";
    
export type FieldConfig = {
    name: string;
    label: string;
    type: FieldType;
    options?: string[];
};

export type CheckoutPayload = {
    productId: number;
    customerName: string;
    phone: string;
    color: string;
    services: string[];
    quantity: number;
    image: File | null;
};