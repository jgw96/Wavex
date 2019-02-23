import { TestWindow } from '@stencil/core/testing';
import { PopoverPage } from './popover-page';

describe('popover-page', () => {
  it('should build', () => {
    expect(new PopoverPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPopoverPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PopoverPage],
        html: '<popover-page></popover-page>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
