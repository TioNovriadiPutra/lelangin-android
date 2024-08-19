import { AddAuction } from "@interfaces/data/auctionInterface";
import { Login, Register } from "@interfaces/data/authInterface";
import { AddCommunity } from "@interfaces/data/communityInterface";
import { UpdateUser, UpdateUserAddress } from "@interfaces/data/userInterface";
import { AppFormType, AuthFormType } from "@interfaces/formInterface";
import { colors } from "@themes/colors";

export const loginForm: AuthFormType<Login> = {
  title: "Login",
  withFooter: true,
  buttonData: {
    label: "Sign In",
    color: colors.Black,
  },
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
  defaultValue: {
    email: "",
    password: "",
  },
};

export const registerForm: AuthFormType<Register> = {
  title: "Register",
  withFooter: false,
  buttonData: {
    label: "Sign Up",
    color: colors.Black,
  },
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
  defaultValue: {
    email: "",
    password: "",
    password_confirmation: "",
    fullName: "",
    gender: null,
    dob: undefined,
    address: "",
  },
};

export const editAccountForm: AppFormType<UpdateUser> = {
  title: "Edit Account",
  buttonData: {
    type: "submit",
    label: "Edit",
    color: colors.Accent,
  },
  inputs: [
    {
      type: "profile",
      name: "profilePic",
      placeholder: "Profile Picture",
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Full Name",
    },
  ],
  defaultValue: {
    profilePic: null,
    fullName: "",
  },
};

export const editAddressForm: AppFormType<UpdateUserAddress> = {
  title: "Edit Address",
  buttonData: {
    type: "submit",
    label: "Edit",
    color: colors.Accent,
  },
  inputs: [
    {
      type: "text",
      name: "address",
      placeholder: "Address",
    },
  ],
  defaultValue: {
    address: "",
  },
};

export const addCommunityForm: AppFormType<AddCommunity> = {
  title: "Add Community",
  buttonData: {
    type: "submit",
    label: "Add",
    color: colors.Accent,
  },
  inputs: [
    {
      type: "thumbnail",
      name: "thumbnail",
      placeholder: "Community Thumbnail",
    },
    {
      type: "text",
      name: "communityName",
      placeholder: "Community Name",
    },
  ],
  defaultValue: {
    thumbnail: null,
    communityName: "",
  },
};

export const addAuctionForm: AppFormType<AddAuction> = {
  title: "Add Auction",
  buttonData: {
    type: "submit",
    label: "Add",
    color: colors.Accent,
  },
  inputs: [
    {
      type: "galleries",
      name: "auctionImages",
      placeholder: "Auction Images",
    },
    {
      type: "text",
      name: "auctionName",
      placeholder: "Auction Title",
    },
    {
      type: "dropdown",
      name: "categoryId",
      placeholder: "Category",
      items: [],
    },
    {
      type: "dropdown",
      name: "communityId",
      placeholder: "Community",
      items: [],
    },
    {
      type: "textarea",
      name: "description",
      placeholder: "Description",
    },
    {
      type: "currency",
      name: "startBid",
      placeholder: "Start Bid",
    },
    {
      type: "switch",
      name: "buyNow",
      placeholder: "Buy Now",
    },
    {
      type: "currency",
      name: "buyNowPrice",
      placeholder: "Buy Now Price",
    },
    {
      type: "time",
      name: "timer",
      placeholder: "Set Timer",
    },
  ],
  defaultValue: {
    auctionImages: [],
    auctionName: "",
    categoryId: null,
    communityId: null,
    description: "",
    startBid: undefined,
    buyNow: false,
    buyNowPrice: undefined,
    timer: "",
  },
};
