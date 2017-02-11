class Cube {
  constructor() {
    this.setElements();
    this.bindEvents();
  }

  setElements() {
    this.cube = document.getElementById('cube');
    this.Yslider = document.getElementById('y-rotation-slider');
  }

  bindEvents() {
    this.Yslider.addEventListener('change', this.handleSliderChange.bind(this, 'y'));
  }

  handleSliderChange(axis, e) {
    const { value } = e.target;

    switch (axis) {
      case 'y':
        this.cube.style.setProperty('--rotateY', `${value}deg`);

        break;

      case 'x':
        console.log('not implemented yet');

        break;
    }

  }
}

new Cube();
