import { ModalPage } from './app.po';

describe('modal App', () => {
  let page: ModalPage;

  beforeEach(() => {
    page = new ModalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
