import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child[data]',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() data? :string;

  constructor() {
    console.log('Child - constructor')
  }

  ngOnInit() {
    console.log('Child - on init')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child - on Change', changes);
    const previous = changes['data'].previousValue;
    console.log(previous);
    const newValue = changes['data'].currentValue;
    console.log(newValue);
    const isFistChange = changes['data'].isFirstChange();
    console.log(isFistChange);
  }

  ngOnDestroy() {
    console.log('Child - On destroy');
  }

}
