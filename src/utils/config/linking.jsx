const config = {
  screens: {
    Login: "login",
    Register: "register",
    AppTabRoute: {
      screens: {
        Home: "",
        Community: "community",
        Auction: "auction",
        Account: "account",
      },
    },
    CommunityRoute: {
      screens: {
        CommunityAdd: "community/add",
        CommunitySearch: "community/search",
      },
    },
    AccountRoute: {
      screens: {
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
