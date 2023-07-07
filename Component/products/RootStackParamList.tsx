export enum RootStackScreensEnum {
    Boarding= "Boarding",
    Explore = "Explore",
    Cart = "Cart",
    Favorite = "Favorite",
    Shop = "Shop",
    ScreenHome = "ScreenHome",
    ScreenDetail = "ScreenDetail",
    Account = "Account",
    Oder = "Oder",
    Oder2 = "Oder2",
    TabScreens = "TabScreens",
    SignUp = "SignUp",
    SignPass = "SignPass",
    SignCode= "SignCode",
  }
  
  // tạo 1 type để định nghĩa các params của các màn hình
  export type RootStackParamList = {
    TabScreens:undefined;
    Explore: undefined;
    Cart: undefined;
    Favorite: undefined;
    Shop: undefined;
    ScreenHome: undefined;
    ScreenDetail: undefined;
    Account: undefined;
    Oder: undefined;
    Oder2: undefined;
    Boarding:undefined;
    SignUp:undefined;
    SignPass:undefined;
    SignCode:undefined;
  }