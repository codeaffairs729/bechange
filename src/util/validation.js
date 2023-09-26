export const validateForm = (formData) => {
  let validationErrors = {};

  if (!formData.firstName) {
    validationErrors.firstName = "First Name is required";
  }
  if (!formData.lastName) {
    validationErrors.lastName = "Last Name is required";
  }
  if (!formData.email) {
    validationErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validationErrors.email = "Invalid email address";
  }
  if (!formData.isPrivacyChecked) {
    validationErrors.isPrivacyChecked = "Accept Privacy Policy";
  }

  return validationErrors;
};
