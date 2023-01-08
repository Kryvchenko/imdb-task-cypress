/// <reference types="cypress" />
import ActorPage from "../../support/pom/actor-po/Actor.Page";
const data = require("../../utils/data");

describe("Visit actor`s page and sort his filmographie", () => {
  beforeEach(() => {
    ActorPage.visitBasePage("/");
  });
  data.map((el) => {
    it(`Should allow to open actor ${el.actorName} page and sort filmographie by rating including only featured movies`, () => {
      ActorPage.setNameAndNavigateActorToPage(el.actorName);
      ActorPage.actorHeader.then((header) => {
        expect(header.text()).to.eq(el.actorName);
      });
      ActorPage.navigateToFilmographie();
      ActorPage.selectFeaturedFilms();
      ActorPage.getFisrtAttribute().then((alt) => {
        expect(alt).to.eq(el.firstFeaturedMovie);
      });
    });
  });
});
