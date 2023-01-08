/// <reference types="cypress" />
import TopBoxPage from "../../support/pom/top-box-po/Top-Box.Page";
import constants from "../../utils/constans";
import data from "../../utils/data";

describe("Visit the Top Box Page and try to rate movie", () => {
  beforeEach(() => {
    TopBoxPage.visitBasePage("/");
  });
  data.map((el) => {
    it(`Should try open ${el.topBoxMovie} page from the top box list and rate it without registration`, () => {
      TopBoxPage.clickOnMenuAndChooseMenuOption(constants.topBoxBtnText);
      TopBoxPage.checkQuantityOfItemsInTheList.then((res) => {
        expect(res.length).to.eq(constants.moviesQuantity);
        TopBoxPage.selectItemFromList(el.topBoxMovie);
        TopBoxPage.rateItemFromTheList();
        TopBoxPage.createNewAccBtn
          .contains(constants.createNewAccBtnText)
          .should("be.visible");
      });
    });
  });
});
