import React from 'react';

var AnnounceSlide = function AnnounceSlide(_ref) {
  var message = _ref.message;
  var styles = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    padding: 0,
    margin: '-1px',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: styles,
    tabIndex: -1
  }, message);
};

export var defaultRenderAnnounceSlideMessage = function defaultRenderAnnounceSlideMessage(_ref2) {
  var currentSlide = _ref2.currentSlide,
      slideCount = _ref2.slideCount;
  return "Slide ".concat(currentSlide + 1, " of ").concat(slideCount);
};
export default AnnounceSlide;