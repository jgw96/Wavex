import { TestWindow } from '@stencil/core/testing';
import { TrackDetail } from './track-detail';

describe('track-detail', () => {
  it('should build', () => {
    expect(new TrackDetail()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTrackDetailElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TrackDetail],
        html: '<track-detail></track-detail>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
