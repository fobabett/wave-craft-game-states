import { WaveCraftAngularPage } from './app.po';

describe('wave-craft-angular App', function() {
  let page: WaveCraftAngularPage;

  beforeEach(() => {
    page = new WaveCraftAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
