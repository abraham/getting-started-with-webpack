class Pickle {
  constructor(private picker: Element, private background: HTMLElement) {
    picker.addEventListener('change', this.colorChange.bind(this), false);
    this.background = background;
  }

  colorChange(event: Event): void {
    // `<HTMLInputElement>` tells TypeScript what type `target` is so that it knows there is a `value` property available.
    let input = <HTMLInputElement>event.target;
    this.background.style.backgroundColor = input.value;
  }
}

let picker = document.querySelector('#color-picker');
// The if avoids TypeScript complaining that `picker` might be null.
if (picker) {
  new Pickle(picker, document.body);
}
