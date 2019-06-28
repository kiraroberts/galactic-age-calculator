export const today = function () {
  const dateInput = new Date();
  const dateCalculator = dateInput.getDate();
  return dateCalculator
};

export const currentDate = function () {
  const dateInput = new Date();
  const day = dateInput.getDate();
  const month = dateInput.getMonth();
  const year = dateInput.getFullYear();
};
