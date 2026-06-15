"use client";

import { Product } from "@/lib/types";
import { useState } from "react";

import ImageUpload from "./ImageUpload";
import QuantitySlider from "./QuantitySlider";
import CheckboxGroup from "./CheckboxGroup";
import ProductSelect from "./ProductSelect";

import {
    checkoutFields,
} from "@/lib/formConfig";

type Props = {
    product: Product;
};

type FormValue =
    | string
    | string[]
    | number
    | File
    | null;

export default function CheckoutForm({
    product,
}: Props) {

    const [formData, setFormData] =
        useState({
            customerName: "",
            phone: "",
            color: "Black",
            services: [] as string[],
            quantity: 1,
            logo: null as File | null,
        });

    const [errors, setErrors] =
    useState<Record<string, string>>({});

    const handleChange = (
        name: string,
        value: FormValue
    ) => {

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = () => {

        const newErrors: Record<string,string> = {};

        if (
            !formData.customerName.trim()
        ) {
            newErrors.customerName =
                "Name is required";
        }

        if (
            !formData.phone.trim()
        ) {
            newErrors.phone =
                "Phone is required";
        }

        setErrors(newErrors);

        if (
            newErrors.customerName ||
            newErrors.phone
        ) {
            return;
        }

        const payload = {
            productId: product.id,
            ...formData,
        };

        console.log(payload);

    };

    return (

        <div className="space-y-4">

            {checkoutFields.map(
                (field) => {

                    switch (
                        field.type
                    ) {

                        case "text":    

                            return (

                                <div key={field.name}>

                                    <input
                                        value={formData[field.name as keyof typeof formData] as string}
                                        onChange={(e) =>
                                            handleChange(
                                                field.name,
                                                e.target
                                                    .value
                                            )
                                        }
                                        placeholder={field.label}
                                        className="
                                            border
                                            p-2
                                            w-full
                                        "
                                    />

                                    {
                                        errors[field.name] && (
                                            <p className="text-red-500 text-sm">
                                                {errors[field.name]}
                                            </p>
                                        )
                                    }

                                </div>

                            );

                        case "select":

                            return (

                                <ProductSelect
                                    key={ field.name }
                                    value={ formData.color }
                                    onChange={(value) =>
                                       handleChange(
                                            field.name,
                                            value
                                        )
                                    }
                                />

                            );

                        case "checkbox":

                            return (

                                <CheckboxGroup
                                    key={ field.name }
                                    value={ formData.services }
                                    onChange={(value) =>
                                        handleChange(
                                            field.name,
                                            value
                                        )
                                    }
                                />

                            );

                        case "slider":

                            return (

                                <QuantitySlider
                                    key={field.name} value={formData.quantity}
                                    onChange={(value) =>
                                        handleChange(
                                            field.name,
                                            value
                                        )
                                    }
                                />

                            );

                        case "image":

                            return (

                                <ImageUpload
                                    key={ field.name }
                                    onChange={(value) =>
                                        handleChange(
                                            field.name,
                                            value
                                        )
                                    }
                                />

                            );

                        default:

                            return null;

                    }

                }
            )}

            <button
                onClick={
                    handleSubmit
                }
                className="
                    bg-blue-500
                    text-white
                    px-4
                    py-2
                "
            >
                Submit
            </button>

        </div>

    );

}