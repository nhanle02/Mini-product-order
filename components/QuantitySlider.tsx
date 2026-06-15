"use client";

type Props = {
    value: number;
    onChange: (
        value: number
    ) => void;
};

export default function QuantitySlider({
    value,
    onChange,
}: Props) {
    return (
        <div>

            <p>
                Quantity:
                {" "}
                {value}
            </p>

            <input
                type="range"
                min={1}
                max={10}
                value={value}
                onChange={(e) =>
                    onChange(
                        Number(
                            e.target.value
                        )
                    )
                }
                className="w-full"
            />

        </div>
    );
}   