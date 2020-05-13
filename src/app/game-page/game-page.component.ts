import { Component, OnInit } from '@angular/core';
import { IPageData } from '../ipage-data'
import { SimpleService } from '../simple.service'


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(service: SimpleService) {
    service.getPageDataFromDB().subscribe(Response => 
      {
         this.pages = Response; 
        console.log(Response)

        //starts the game at the first page of the array.
        
        this.currentPage = Response.find(x => x.pageID == 0)
      
        
      })
      
      
   }

  ngOnInit(): void {
    
    
  }

  
  
  pages: IPageData[]
  
  currentPage: IPageData

  
 
  
   setCurrentPage(pageNumber: number) {
    
    this.currentPage = this.pages.find(x => x.pageID ==  pageNumber)
    console.log(this.currentPage)
  }   
  
}


