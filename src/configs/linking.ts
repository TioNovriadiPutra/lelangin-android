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
    AuctionDetail: "auction/:id",
    AuctionPayment: "auction/payment/:id",
    AccountEdit: "account/edit",
    AccountEditAddress: "account/address",
    AccountMyOrder: "account/order",
    SuccessPage: "success",
  },
};

export const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config,
};
