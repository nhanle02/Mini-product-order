"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    onChange: (
        file: File | null
    ) => void;
};

export default function ImageUpload({
    onChange,
}: Props) {

    const [previewUrl, setPreviewUrl] =
        useState("");

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file =
            e.target.files?.[0] ?? null;

        onChange(file);

        if (file) {

            setPreviewUrl(
                URL.createObjectURL(file)
            );

        } else {

            setPreviewUrl("");

        }

    };

    const handleRemove = () => {

        onChange(null);

        setPreviewUrl("");

    };

    return (
        <div className="space-y-4">

            <label className="block font-medium">
                Upload Custom Logo
            </label>

            <label
                className="
                    inline-block
                    px-4
                    py-2
                    bg-blue-600
                    text-white
                    rounded-lg
                    cursor-pointer
                    hover:bg-blue-700
                    transition
                "
            >
                Choose Image

                <input
                    type="file"
                    accept="image/*"
                    onChange={
                        handleFileChange
                    }
                    className="hidden"
                />
            </label>

            {previewUrl && (

                <div className="space-y-3">

                    <Image
                        src={previewUrl}
                        alt="Preview"
                        width={192}
                        height={192}
                        className="
                            h-48
                            w-48
                            object-cover
                            rounded-lg
                            border
                            shadow
                        "
                        unoptimized
                    />

                    <button
                        type="button"
                        onClick={
                            handleRemove
                        }
                        className="
                            px-3
                            py-2
                            bg-red-500
                            text-white
                            rounded-lg
                            hover:bg-red-600
                        "
                    >
                        Remove Image
                    </button>

                </div>

            )}

        </div>
    );
}