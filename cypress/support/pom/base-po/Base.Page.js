/**
 * Base page class for IMDB.com tests with cypress
 */
export default class BasePage {
  constructor() {
    this.titleColumnLink = ".titleColumn a";
  }
  get getItemsFromTheList() {
    return cy.get(this.titleColumnLink);
  }
  get checkQuantityOfItemsInTheList() {
    return cy.get(this.titleColumnLink).each((el) => {
      let arr = [];
      arr.push(el.text());
    });
  }
  get mainMenuBtn() {
    return cy.get(".ipc-responsive-button__text");
  }
  get itemListBtn() {
    return cy.get(".ipc-list-item__text");
  }
  /**
   * Opens a desired url
   */
  visitBasePage(url) {
    cy.visit(url);
  }
  /**
   * Performs search on the multiple buttons in main menu and click on option
   * @param  {String} option - button text
   */
  clickOnMenuAndChooseMenuOption(option) {
    this.mainMenuBtn.click({ force: true });
    this.itemListBtn.contains(option).click({ force: true });
  }
  /**
   * Performs search of the item(movie, tv-show) and selects it
   * @param  {String} item - button text
   */
  selectItemFromList(item) {
    this.getItemsFromTheList.contains(item).click({ force: true });
  }
}
