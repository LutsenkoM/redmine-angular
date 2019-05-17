import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Array<{ text: string, date: any }> = [];
  newComment: string;
  date = new Date();

  @Input() id: number;
  @Input() name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

      if (JSON.parse(localStorage.getItem(`comments-project#${this.id}`))) {
          this.comments = (JSON.parse(localStorage.getItem(`comments-project#${this.id}`)));
      } else {
          this.comments = [];
      }
  }

    public addComment() {
        this.comments.push({text: this.newComment, date: this.date});
        localStorage.setItem(`comments-project#${this.id}`, JSON.stringify(this.comments));
        this.newComment = '';
    }

}
