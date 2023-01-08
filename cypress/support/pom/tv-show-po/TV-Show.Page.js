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
  checkPhotoNameTag(name) {
    return cy.get(".ipc-link.ipc-link--baseAlt").contains(name);
  }
  filterPhotoByActor(name) {
    this.tvShowPhotoGalleryLink.click();
    this.actorPhotosLink.contains(name).click();
  }
  pickUpTheSecondPhoto() {
    this.secondPhotoFromTheList.click({ force: true });
  }
}

export default TVShowPage = new TVShowPage();
