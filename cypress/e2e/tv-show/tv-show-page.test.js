/// <reference types="cypress" />
import TVShowPage from "../../support/pom/tv-show-po/TV-Show.Page";
import constans from "../../utils/constans";

describe("Visit a Top 250 TV shows section", () => {
  before(() => {
    TVShowPage.visitBasePage("/");
  });
  it("Should allow open a tv-show page and view photo of an actor", () => {
    TVShowPage.clickOnMenuAndChooseMenuOption(constans.tvShowBtnText);
    TVShowPage.checkQuantityOfItemsInTheList.then((res) => {
      expect(res.length).to.eq(constans.tvShowsQuantity);
    });
    TVShowPage.selectItemFromList("Breaking Bad");
  });
});
