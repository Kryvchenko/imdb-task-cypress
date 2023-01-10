/**
 * TVShowPage page class for IMDB.com tests with cypress
 */
import BasePage from "../base-po/Base.Page";

class TVShowPage extends BasePage {
  get tvShowPhotoGalleryLink() {
    return cy.get("[data-testid='Photos'] .ipc-title-link-wrapper");
  }
  get actorPhotosLink() {
    return cy.get("#media_index_name_filters a");
  }
  get secondPhotoFromTheList() {
    return cy.get("#media_index_thumbnail_grid a:nth-child(2)");
  }

  /**
   * Performs click on the photo of an actor from current iteration cycle
   * @param  {String} name - button text
   */
  checkPhotoNameTag(name) {
    return cy.get(".ipc-link.ipc-link--baseAlt").contains(name);
  }
  /**
   * Filtering the photos of actors from the list
   * @param  {String} name - button text
   */
  filterPhotoByActor(name) {
    this.tvShowPhotoGalleryLink.click();
    this.actorPhotosLink.contains(name).click();
  }
  /**
   * Click on second photo from the list
   */
  pickUpTheSecondPhoto() {
    this.secondPhotoFromTheList.click({ force: true });
  }
}

export default TVShowPage = new TVShowPage();
