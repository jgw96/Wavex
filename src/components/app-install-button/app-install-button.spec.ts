import { TestWindow } from '@stencil/core/testing';
import { AppInstallButton } from './app-install-button';

describe('app-install-button', () => {
  it('should build', () => {
    expect(new AppInstallButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppInstallButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppInstallButton],
        html: '<app-install-button></app-install-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
