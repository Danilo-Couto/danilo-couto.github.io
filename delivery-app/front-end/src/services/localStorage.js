export const setLocalStorage = (key, item) => {
  const convertedItem = JSON.stringify(item);
  localStorage.setItem(key, convertedItem);
};

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const amountLocalStorage = () => {
  const items = getLocalStorage('cart');

  if (!items) return 0;
  const totalAmount = items.reduce((acc, cur) => {
    acc += cur.amount;
    return acc;
  }, 0);

  return totalAmount.toFixed(2).replace('.', ',');
};
