import { AccountMenu } from "@interfaces/pageInterface";

export const accountMenu: AccountMenu[] = [
  {
    icon: require("@assets/images/address.png"),
    label: "Address",
    subLabel: "My address",
    destination: "AccountEditAddress",
  },
  {
    icon: require("@assets/images/order.png"),
    label: "My Orders",
    subLabel: "Orders & invoices",
    destination: "AccountMyOrder",
  },
  {
    icon: require("@assets/images/help.png"),
    label: "Help & Support",
    subLabel: "Orders & invoices",
  },
  {
    icon: require("@assets/images/logout.png"),
    label: "Logout",
    subLabel: "Sign out account",
  },
];
