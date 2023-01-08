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
  visitBasePage(url) {
    cy.visit(url);
  }
  clickOnMenuAndChooseMenuOption(option) {
    this.mainMenuBtn.click({ force: true });
    this.itemListBtn.contains(option).click({ force: true });
  }
  selectItemFromList(item) {
    this.getItemsFromTheList.contains(item).click({ force: true });
  }
}
