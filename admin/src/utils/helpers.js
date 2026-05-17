export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);

export const sortBy = (items, key, direction = "asc") =>
  [...items].sort((a, b) => {
    const left = a[key];
    const right = b[key];
    if (left === right) return 0;
    const result = left > right ? 1 : -1;
    return direction === "asc" ? result : -result;
  });
