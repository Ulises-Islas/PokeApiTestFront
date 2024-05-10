import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'pokemon-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  pokemonId: string = '';

  @Input()
  placeholder: string = '';

  ngOnInit(): void {
      this.debouncer.pipe(debounceTime(300)).subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  search() {
    this.onEnter.emit(this.pokemonId);
  }

  keyPressed() {
    this.debouncer.next(this.pokemonId);
  }

}
