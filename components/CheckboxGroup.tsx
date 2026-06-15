"use client";

type Props = {
    value: string[];
    onChange: (
        services: string[]
    ) => void;
};

const servicesList = [
    "Fast Delivery",
    "Gift Wrap",
    "Extended Warranty",
];

export default function CheckboxGroup({
    value,
    onChange,
}: Props) {

    const toggleService = (
        service: string
    ) => {

        if (
            value.includes(service)
        ) {

            onChange(
                value.filter(
                    (item) =>
                        item !== service
                )
            );

            return;
        }

        onChange([
            ...value,
            service,
        ]);
    };

    return (
        <div>

            <p className="font-medium">
                Services
            </p>

            {servicesList.map(
                (service) => (
                    <label
                        key={service}
                        className="block"
                    >
                        <input
                            type="checkbox"
                            checked={value.includes(
                                service
                            )}
                            onChange={() =>
                                toggleService(
                                    service
                                )
                            }
                        />

                        <span className="ml-2">
                            {service}
                        </span>
                    </label>
                )
            )}
        </div>
    );
}