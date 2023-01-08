import constants from "../../../utils/constans";
import BasePage from "../base-po/Base.Page";

class TopBoxPage extends BasePage {
  constructor() {
    super();
  }
  get createNewAccBtn() {
    return cy.get(":nth-child(4) > .list-group-item");
  }
  // get getItemsTheList() {
  //   return cy.get(this.titleColumnLink);
  // }
  get getRateBtn() {
    return cy.get('[data-testid="hero-rating-bar__user-rating__unrated"]');
  }
  get fiveStarRate() {
    return cy.get(".ipc-starbar__rating__button:nth-child(5)");
  }
  get confirmRateBtn() {
    return cy.get(".ipc-rating-prompt__rating-container > .ipc-button");
  }
  // selectItemFromList(movie) {
  //   this.getItemsFromTheList.contains(movie).click({ force: true });
  // }
  rateItemFromTheList() {
    // this.getItemsFromTheList.contains(movie).click({ force: true });
    this.getRateBtn.contains(constants.rateSelector).click({
      force: true
    });
    this.fiveStarRate.click({
      multiple: true,
      force: true
    });
    this.confirmRateBtn.click({
      force: true
    });
  }
}

export default new TopBoxPage();
