"use client";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const colors = [
    "Black",
    "White",
    "Blue",
    "Red",
];

export default function ProductSelect({
    value,
    onChange,
}: Props) {
    return (
        <div>
            <label className="block mb-2">
                Color
            </label>

            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="border p-2 w-full"
            >
                {colors.map((color) => (
                    <option
                        key={color}
                        value={color}
                    >
                        {color}
                    </option>
                ))}
            </select>
        </div>
    );
}