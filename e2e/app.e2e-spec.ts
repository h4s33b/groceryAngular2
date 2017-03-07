import { GroceriesAppPage } from './app.po';

describe('groceries-app App', function() {
  let page: GroceriesAppPage;

  beforeEach(() => {
    page = new GroceriesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
