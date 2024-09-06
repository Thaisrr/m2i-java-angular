import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChildComponent} from "../../components/child/child.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [
    ChildComponent,
    FormsModule
  ],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
    name? : string;

    constructor() {
      console.log('Lifecyle - constructor')
      setTimeout(() => {
        this.name = 'toto';
      }, 5000)
    }

    ngOnInit() {
      console.log('Lifecycle - on Init');
      window.addEventListener('mousemove', this.handleMove )
    }

    handleMove(e: MouseEvent) {
      console.log(e.x, e.x)
    }


    ngOnChanges(changes: SimpleChanges) {
      // Ne se déclanche pas car pas d'Input
      console.log('Lifecycle - on Change', changes)
    }

    ngOnDestroy() {
      console.log('Lifecycle - on Destroy');
      window.removeEventListener('mousemove', this.handleMove)
    }
}
