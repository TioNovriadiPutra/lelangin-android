const config = {
  screens: {
    Login: "login",
    Register: "register",
    MainApp: {
      screens: {
        Home: "home",
        Community: "community",
        Auction: "auction",
        Account: "account",
      },
    },
    CommunityAdd: "community/add",
    AuctionAdd: "auction/add",
    AccountEdit: "account/edit",
    AccountEditAddress: "account/address",
  },
};

export const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config,
};
