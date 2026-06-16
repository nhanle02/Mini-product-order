"use client";


type Props = {
    value: string;
    options: string[];
    onChange: (
        value: string
    ) => void;
};

export default function ProductSelect({
    value,
    options,
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

            {options.map((option) => (

                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>

            ))}

        </select>
        </div>
    );
}