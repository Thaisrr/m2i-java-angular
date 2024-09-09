import {Component, OnInit} from '@angular/core';
import {TrashbagService} from "../../../utils/services/trashbag.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TrashBag} from "../../../utils/types/trash.type";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit{
  id?: string | null;
  bag$?:Observable<TrashBag>;

  constructor(
    private route: ActivatedRoute,
    private trashService: TrashbagService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe({
    //   next: params => {
    //     this.id = params.get('id')
    //     if(this.id) {
    //       this.trashService.getOne(this.id).subscribe({
    //         next: res => this.bag = res,
    //       })
    //     }
    //   }
    // });

    this.route.paramMap.subscribe({
      next: params => {
        const id = params.get('id')
        if(id) {
          this.bag$ = this.trashService.getOne(id)
        }
      }
    })
  }

  remove(id: string) {
    this.trashService.remove(id).subscribe({
      next: () => {
        this.router.navigate(['/trash'])
      }
    })
  }

}
