import { PageHolder } from "./abstract.classes";
import { Cart } from "./cart.page";
import { Checkout } from "./checkout.page";
import { Login } from "./login.page";
import { Register } from "./register.page";
import { Shop } from "./shop.page";

export class Application extends PageHolder {
    public cart = new Cart(this.page);
    public login = new Login(this.page);
    public register = new Register(this.page);
    public shop = new Shop(this.page);
    public checkout = new Checkout(this.page);
}
