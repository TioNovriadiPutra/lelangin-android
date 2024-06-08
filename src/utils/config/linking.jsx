const config = {
  screens: {
    Login: "login",
    Register: "register",
    HomeRoute: {
      screens: {
        Home: "",
      },
    },
    CommunityRoute: {
      screens: {
        Community: "community",
        CommunityAdd: "community/add",
      },
    },
    AccountRoute: {
      screens: {
        Account: "account",
        AccountEdit: "account/edit",
        AccountEditAddress: "account/edit/address",
      },
    },
  },
};

export const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config,
};
