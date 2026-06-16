export const validateName = (name: string) => {
    const value = name.trim();

    if (!value) return "Name is required";
    if (/\d/.test(value)) return "Name cannot contain numbers";
    if (value.length <= 2 || value.length >= 30)
        return "Name must be 3-29 characters";

    return "";
};

export const validatePhone = (phone: string) => {
    const value = phone.trim();

    if (!value) return "Phone is required";
    if (!/^\d+$/.test(value)) return "Phone must contain only numbers";
    if (value.length < 10 || value.length > 11)
        return "Phone must be 10 or 11 digits";

    return "";
};