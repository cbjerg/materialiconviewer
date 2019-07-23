import { AppPage } from './app.po';

describe('material-icons-viewer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('headline should be Icons', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Icons');
  });
});
