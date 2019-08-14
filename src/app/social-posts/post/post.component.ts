import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: object;
  @Input() postIndex: number;
  @Output() deleteThought = new EventEmitter<void>();
  constructor() {}

  onDeleteThought(postIndex): void {
    this.deleteThought.emit(postIndex);
    // console.log("deleteThought is working");
  }

  ngOnInit() {
    console.log(this.post);
    console.log(this.postIndex);
  }
}

// @Input() book: object;
// @Input() bookIndex: number;
// @Output() onRemove = new EventEmitter<any>();
// constructor() {}

// removeBook(index: number): void {
//   console.log(index);
//   this.onRemove.emit({ index });
// }
