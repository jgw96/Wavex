import { Animation } from '@ionic/core';

export function mdTransitionAnimation(AnimationC: Animation, _: HTMLElement, opts: any): Promise<Animation> {

  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = getIonPageElement(enteringEl);

  const rootTransition = new AnimationC();
  rootTransition
    .addElement(ionPageElement)
    .beforeRemoveClass('ion-page-invisible');

  const backDirection = (opts.direction === 'back');

  // animate the component itself
  if (backDirection) {
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');

  } else {
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .fromTo('transform', 'scaleX(0.9) scaleY(0.9)', 'translateX(0%) scaleX(1) scaleY(1)')
      .fromTo('opacity', 0.6, 1);
  }

  // Animate toolbar if it's there
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  if (enteringToolbarEle) {
    const enteringToolBar = new AnimationC();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.add(enteringToolBar);
  }

  // setup leaving view
  if (leavingEl && backDirection) {
    // leaving content
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');

    const leavingPage = new AnimationC();
    leavingPage
      .addElement(getIonPageElement(leavingEl))
      .fromTo('opacity', 1, 0);

    rootTransition.add(leavingPage);
  }

  return Promise.resolve(rootTransition);
}

function getIonPageElement(element: HTMLElement) {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
}