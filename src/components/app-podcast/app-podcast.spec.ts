import { TestWindow } from '@stencil/core/testing';
import { AppPodcast } from './app-podcast';

describe('app-podcast', () => {
  it('should build', () => {
    expect(new AppPodcast()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppPodcastElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppPodcast],
        html: '<app-podcast></app-podcast>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
