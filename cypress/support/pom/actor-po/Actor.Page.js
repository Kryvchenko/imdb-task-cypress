/**
 * Actor's page class for IMDB.com tests with cypress
 */
import constans from "../../../utils/constans";
import BasePage from "../base-po/Base.Page";

class ActorPage extends BasePage {
  get actorHeader() {
    return cy.get("[data-testid='hero__pageTitle'] span");
  }
  get searchInputField() {
    return cy.get("#suggestion-search");
  }
  get selectChoiceField() {
    return cy.get("#react-autowhatever-1--item-0 a");
  }
  get allTopicsBtn() {
    return cy.get(
      '[data-testid="hero-subnav-bar-all-topics-button"] > .ipc-responsive-button__text'
    );
  }
  get featuredFilmSelectBox() {
    return cy
      .get(".faceter-facet-text")
      .contains(constans.featuredFilmSelectBoxText);
  }
  get ratingBtn() {
    return cy.get("div a").contains(constans.ratingBtnText);
  }
  /**
   * Performs search on the Base Page for actor using current actor name
   * @param  {String} name - current actor name
   */
  setNameAndNavigateActorToPage(name) {
    this.searchInputField.type(name);
    this.selectChoiceField.click({ force: true });
  }
  /**
   * Click on the filmographie of an actor
   */
  navigateToFilmographie() {
    this.allTopicsBtn.click();
    this.ratingBtn.click();
  }
  /**
   * Search for featured films only
   */
  selectFeaturedFilms() {
    this.featuredFilmSelectBox.click();
  }
  /**
   * Getting attribute the of the current DOM element for further comparison
   */
  getFisrtAttribute() {
    cy.url().should("include", "title_type=movie", { timeout: 10000 });
    return cy.get(".loadlate").invoke("attr", "alt");
  }
}
export default new ActorPage();
