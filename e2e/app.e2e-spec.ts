import { AngularFireQuickStartPage } from './app.po';

describe('angular-fire-quick-start App', function() {
  let page: AngularFireQuickStartPage;

  beforeEach(() => {
    page = new AngularFireQuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
