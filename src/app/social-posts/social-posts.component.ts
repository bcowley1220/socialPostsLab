import { Component, OnInit } from "@angular/core";
import { Posts } from "../Interfaces/posts";
@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  constructor() {}

  // !Declaring Area
  posts: Posts[] = [
    {
      title: "Biggus",
      thought:
        " Anybody else feel like a little... giggle... when I mention my fwiend... Biggus... Dickus?"
    },
    {
      title: "Emporer",
      thought: "I will not have my fwends widiculed by the common soldiewy."
    },
    {
      title: "French Soldier",
      thought:
        "I don't want to talk to you no more, you empty-headed animal food trough wiper!"
    },
    {
      title: "Politics",
      thought:
        "Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
    }
  ];
  // show: boolean = false;
  showForm: boolean = false;

  // !Methods
  toggleForm() {
    // console.log("toggleForm is working");
    this.showForm = !this.showForm;
  }
  // !Handlers
  addThoughtHandler(newThought) {
    // console.log("addThought is working");
    this.posts.push(newThought);
  }
  deleteThoughtHandler(index) {
    // console.log("deleteThought is working");
    this.posts.splice(index, 1);
  }
  onSubmitHandler() {
    this.showForm = true;
  }
  // onSubmit() { this.submitted = true; }

  ngOnInit() {
    console.log(this.posts);
    // this.toggleForm();
    // this.addThought();
    // this.deleteThoughtHandler();
  }
}

// onRemoveHandler(index) {
//   this.listOfBooks.splice(index, 1);
// }

// onAddHandler(newBook: object): void {
//   console.log(newBook);
//   this.listOfBooks.push(newBook);
//   this.toggleForm();
// }

// toggleForm(): void {
//   this.showForm = !this.showForm;
// }
