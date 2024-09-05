import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter[count]',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.countChange.emit(this.count + 1)
  }

  decrement() {
    this.countChange.emit(this.count - 1);
  }



}
