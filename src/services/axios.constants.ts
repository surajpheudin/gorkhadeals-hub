export const api = {
    isLogin: "is-login",
    logout: "logout",
    createShop: "shop",
    getShops: "shop",
    getShopInvitations: "shop",
    getShop: "shop/:id",
    inviteMember: "shop/:id/invite",
    acceptMemberInvitation: "shop/:id/accept",
    getShopMembers: "shop/:id/members",
    removeShopMember: "shop/:id/member",

    addProduct: "product",
    getProducts: "product",
    getProduct: "product/:id",
    getProductCategories: "product/category",
    delteProduct: "product/:id",
};

export const ACCESS_TOKEN = "access_token";
