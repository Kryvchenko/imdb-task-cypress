/// <reference types="cypress" />
import TVShowPage from "../../support/pom/tv-show-po/TV-Show.Page";
import constans from "../../utils/constans";
import data from "../../utils/data";

describe("Visit a Top 250 TV shows section", () => {
  beforeEach(() => {
    TVShowPage.visitBasePage("/");
  });
  data.map((el) => {
    it(`Should allow open the ${el.top250TVShows} tv-show page and view photo of ${el.top250TVShowsActor}`, () => {
      TVShowPage.clickOnMenuAndChooseMenuOption(constans.tvShowBtnText);
      TVShowPage.checkQuantityOfItemsInTheList.then((res) => {
        expect(res.length).to.eq(constans.tvShowsQuantity);
      });
      TVShowPage.selectItemFromList(el.top250TVShows);
      TVShowPage.filterPhotoByActor(el.top250TVShowsActor);
      TVShowPage.pickUpTheSecondPhoto();
      TVShowPage.checkPhotoNameTag(el.top250TVShowsActor).should(
        "have.text",
        el.top250TVShowsActor
      );
    });
  });
});
