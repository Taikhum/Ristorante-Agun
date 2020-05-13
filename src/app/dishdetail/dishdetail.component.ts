import { Component, OnInit, ViewChild, Inject, inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Comment } from '../shared/comment';
 @Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages={
    'author':{
      'required' : 'Author is required.',
      'minlength' : 'Author must atleast 2 character long.'
    },
    'comment':{
      'required':'Comment is required.'
    }
  };

@ViewChild('cform') commentFormDirective;
  commentForm: FormGroup;
  comment:Comment;
  dish:Dish;
  dishIds:string[];
  prev:string;
  next:string;

  constructor(private dishservice: DishService, @Inject ('baseURL') private baseURL,
    private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder) {this.createForm(); }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe((dishIds)=>this.dishIds=dishIds);
    this.route.params.pipe(switchMap((params: Params)=> this.dishservice.getDish(params['id'])))
     .subscribe((dish)=>{this.dish =dish; this.setPrevNext(dish.id);});
  }
setPrevNext(dishId:string)
{
  const index=this.dishIds.indexOf(dishId);
  this.prev=this.dishIds[(this.dishIds.length+ index-1)%this.dishIds.length];
  this.next=this.dishIds[(this.dishIds.length+ index-1)%this.dishIds.length];

}
  goBack(): void {
    this.location.back();
  }

  createForm():void{
    this.commentForm= this.fb.group({
      author:['',[Validators.required, Validators.minLength(2)]],
      comment:['',Validators.required],
      rating:['5'],
    });
    this.commentForm.valueChanges
    .subscribe(data=> this.onValueChanged(data));
  this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] = messages[key] ;
            }
          }
        }
      }
    }
  }
onSubmit(){
    this.comment=this.commentForm.value;
    var d = new Date();
    this.comment.date= d.toISOString();
  this.dish.comments.push(this.comment);
        this.commentForm.reset({
      author:'',
      comment:'',
      rating:'5',
    });
    this.commentFormDirective.resetForm ();
  }
}
