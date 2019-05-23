import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpapiService } from '../services/yelpapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private yelpapiservice: YelpapiService, private fb: FormBuilder) { }

  form: FormGroup;
  restaurant: any;
  one = '⭐';
  oneAndHalf = '⭐½';
  two = '⭐⭐';
  twoAndHalf = '⭐⭐½';
  three = '⭐⭐⭐';
  threeAndHalf = '⭐⭐⭐½';
  four = '⭐⭐⭐⭐';
  fourAndHalf = '⭐⭐⭐⭐½';
  five = '⭐⭐⭐⭐⭐';

  ngOnInit() {
    this.form = this.fb.group({
      state: new FormControl(),
      city: new FormControl(),
      price: new FormControl()
    })
  }

  submitForm() {
    this.yelpapiservice.getMeTheRestaurantDataNow(this.form.value.state, this.form.value.city, this.form.value.price).subscribe(restaurant => {
      this.restaurant = restaurant.businesses;
      let singleOneOut = this.restaurant[Math.floor(Math.random() * this.restaurant.length)]

      if(singleOneOut.is_closed) {
        this.restaurant = '';
      } else {
        this.restaurant = singleOneOut;
      }
    });
  }
}
