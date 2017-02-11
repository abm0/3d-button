'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cube = function () {
  function Cube() {
    _classCallCheck(this, Cube);

    this.setElements();
    this.bindEvents();
  }

  _createClass(Cube, [{
    key: 'setElements',
    value: function setElements() {
      this.cube = document.getElementById('cube');
      this.Yslider = document.getElementById('y-rotation-slider');
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      this.Yslider.addEventListener('change', this.handleSliderChange.bind(this, 'y'));
    }
  }, {
    key: 'handleSliderChange',
    value: function handleSliderChange(axis, e) {
      var value = e.target.value;


      switch (axis) {
        case 'y':
          this.cube.style.setProperty('--rotateY', value + 'deg');

          break;

        case 'x':
          console.log('not implemented yet');

          break;
      }
    }
  }]);

  return Cube;
}();

new Cube();