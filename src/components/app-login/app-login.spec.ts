import { TestWindow } from '@stencil/core/testing';
import { AppLogin } from './app-login';

describe('app-login', () => {
  it('should build', () => {
    expect(new AppLogin()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppLoginElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppLogin],
        html: '<app-login></app-login>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
