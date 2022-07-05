const pattern = {
  PRICE_PATTERN: /^\d+(?:[.,]\d+)*$/,
  EMAIL_PATTERN: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  PASSWORD_PATTERN: /^.{6,}$/,
};

const helper = (data) => {
  let valid = true;
  data.map((input) => {
    input.error = false;
    if ((input.required && input.value === "") || input.value === null) {
      input.error = true;
      input.errorText = `${input.label} is required.`;
      valid = false;
    }
    if (
      input.type === "password" &&
      input.value.length < 8 &&
      !(
        /[A-Z]/.test(input.value) &&
        /[0-9]/.test(input.value) &&
        /[!@#$%^&*]/.test(input.value)
      )
    ) {
      input.error = true;
      input.errorText = `Please enter valid ${input.label}`;
      valid = false;
    }
    return input;
  });
  data.valid = valid;
  return data;
};
export default helper;
