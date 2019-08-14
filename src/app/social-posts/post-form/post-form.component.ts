import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Input() shwForm: boolean;
  @Output() addThought = new EventEmitter<any>();
  @Output() togForm = new EventEmitter<any>();
  @Output() submitHandler = new EventEmitter<any>();
  constructor() {}

  anotherThought(thoughtForm: NgForm): void {
    console.log("anotherThought is working");
    this.addThought.emit({
      title: thoughtForm.value.title,
      thought: thoughtForm.value.thought
    });
  }
  togglForm(shwForm: boolean) {
    // console.log()
    this.togForm.emit(shwForm);
  }
  submitted() {
    this.submitHandler.emit();
  }

  ngOnInit() {}
}

// addBook(bookForm: NgForm): void {
//   this.onAdd.emit({
//     title: bookForm.value.title,
//     author: bookForm.value.author
//   });
// }
