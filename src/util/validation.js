export const validateForm = (formData) => {
  let validationErrors = {};

  if (!formData.firstName) {
    validationErrors.firstName = "First Name is required";
  } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
    validationErrors.firstName = "First Name should contain only letters";
  }

  if (!formData.lastName) {
    validationErrors.lastName = "Last Name is required";
  } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
    validationErrors.lastName = "Last Name should contain only letters";
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
