import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'src/app/services/models/pagination';
import { User } from 'src/app/services/models/User';
import { UserParams } from 'src/app/services/models/UserParams';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faCheckCircle: any= faCheckCircle;
  faStar: any= faStar;
  searchTerm : string="";
  
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;

  Reparteurs !: User[];
  UserParams:UserParams = new UserParams()
  pagination !:Pagination;
  constructor() {
    this.pagination = {
      currentPage : 1,
      itemsPerPage:10,
      totalItems:100,
      totalPages:10
    }
   }

  ngOnInit(): void {
  }


  search(){
    console.log(this.searchTerm);
  }
  pageChanged(event:any){
    this.UserParams.pageNumber=event.page;
    // this.getAllReparateur();
  }
}
