import { TestWindow } from '@stencil/core/testing';
import { PodDetail } from './pod-detail';

describe('pod-detail', () => {
  it('should build', () => {
    expect(new PodDetail()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPodDetailElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PodDetail],
        html: '<pod-detail></pod-detail>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
