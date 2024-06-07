import { colors } from "../../themes/colors";

export const loginForm = {
  title: "Login",
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ],
  defaultValues: {
    email: "",
    password: "",
  },
  withFooter: true,
  submitButton: {
    label: "Sign In",
    color: colors.Main,
  },
};

export const registerForm = {
  title: "Register",
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Confirm Password",
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Full Name",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Gender",
      items: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      type: "date",
      name: "dob",
      placeholder: "Date of Birth",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Address",
    },
  ],
  defaultValues: {
    email: "",
    password: "",
    password_confirmation: "",
    fullName: "",
    gender: null,
    dob: undefined,
    address: "",
  },
  withFooter: false,
  submitButton: {
    label: "Sign Up",
    color: colors.Main,
  },
};

export const accountEditForm = {
  headerData: {
    withBack: true,
    title: "Edit Account",
    buttonData: {
      type: "text",
      label: "Edit",
    },
  },
  inputs: [
    {
      type: "profile",
      name: "profilePic",
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Your Name",
    },
  ],
  defaultValues: {
    profilePic: "",
    fullName: "",
  },
};

export const accountEditAddressForm = {
  headerData: {
    withBack: true,
    title: "Address",
    buttonData: {
      type: "text",
      label: "Edit",
    },
  },
  inputs: [
    {
      type: "textarea",
      name: "address",
      placeholder: "Your Address",
    },
  ],
  defaultValues: {
    address: "",
  },
};
