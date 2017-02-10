import { Tictactoeng1Page } from './app.po';

describe('tictactoeng1 App', function() {
  let page: Tictactoeng1Page;

  beforeEach(() => {
    page = new Tictactoeng1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
