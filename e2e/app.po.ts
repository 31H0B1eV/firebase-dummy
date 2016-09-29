import { browser, element, by } from 'protractor/globals';

export class ContactsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cnt-root h1')).getText();
  }
}
