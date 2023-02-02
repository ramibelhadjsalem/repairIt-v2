import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/models/User';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-reparateur',
  templateUrl: './cart-reparateur.component.html',
  styleUrls: ['./cart-reparateur.component.scss']

})
export class CartReparateurComponent implements OnInit {
  @Input() Model?: User
  faCheckCircle: any= faCheckCircle;
  faStar: any= faStar;
  verified: string = "";
  constructor(private route: Router) {

  }

  ngOnInit(): void {
    // if(!this.Model.photoUrl){
    //   this.Model.photoUrl="../../../../../../assets/images/profile-2.png"
    // 
    if (this.Model == null) {
      this.Model = {
        id: 100,
        email: "foulen@gmail.com",
        firstName: "foulen",
        lastName: "ben foulen",
        description: "reparateur x y z",
        phoneNumber: "5000000",
        photoUrl: '../../../../../../assets/images/profile-2.png',
        rating: 3.5,
        verifed: true,
        tasks: "we do al times",
        addressLong: 15,
        addressLarg: 14,
        userRoles:[],
        cinFileUrl: "",
        mfFileUrl: "",
        username:"foulen ben foulen"

      }
    }

  }
  navigateToProfile(id: any) {
    this.route.navigateByUrl("/profile/" + id)
  }

}
