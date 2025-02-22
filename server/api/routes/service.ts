import { ServiceController } from "../controllers/service";
import { StrictlyAuthorizedRoutes } from "../middlewares/strictlyAuthorizedRoutes";

export class ServiceRoutes {
  public service: ServiceController = new ServiceController();

  public routes(app): void {
    app.use(StrictlyAuthorizedRoutes);
    app.route("/").get(this.service.getServices);
    app.route("/asana/link").post(this.service.linkAsana);
    app.route("/discord/link").post(this.service.linkDiscord);
    app.route("/github/link").post(this.service.linkGithub);
    app.route("/heroku/link").post(this.service.linkHeroku);
    app.route("/asana/link").post(this.service.linkAsana);
    app.route("/zoom/link").post(this.service.linkZoom);
    app.route("/zoho/link").post(this.service.linkZoho);
    app.route("/zoho/getProfiles").post(this.service.getZohoProfiles);
    app.route("/zoho/getRoles").post(this.service.getZohoRoles);
  }
}
