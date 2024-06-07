export const accountMenuList = [
  {
    icon: require("../../assets/images/address.png"),
    label: "Address",
    subLabel: "My address",
    destination: "AccountEditAddress",
  },
  {
    icon: require("../../assets/images/myOrders.png"),
    label: "My Orders",
    subLabel: "Orders and invoices",
    destination: "Default",
  },
  {
    icon: require("../../assets/images/help.png"),
    label: "Help & Support",
    subLabel: "Orders and invoices",
    destination: "Default",
  },
  {
    icon: require("../../assets/images/logout.png"),
    label: "Logout",
    subLabel: "Sign out account",
  },
];

export const logoutConfirmationData = {
  title: "Log out",
  description: "Are you sure you want to log out? We'll miss you!",
  confirmLabel: "Log out",
};
