import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPageData, IButtonData } from './ipage-data';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class SimpleService {

  constructor(private httpClient: HttpClient) { }


  public getPageDataFromArray(): Observable<IPageData[]> {
    var response = this.httpClient.get<IMainPageData>('http://localhost:60106/api/pages/getarray')
    .pipe(map(pages => {
      return pages.pageData.map(page => {
        return { 
        pageID: page.pageID,
        pageTitle: page.pageTitle,
        pageDescription: page.pageDescription,
        ending: page.ending,
        result: page.result,
        victory: page.victory,
        buttonData: page.buttonData.map(data => {
          
          return { buttonID: data.buttonID, buttonDescription: data.buttonDescription,
             buttonDestinationPage: data.buttonDestinationPage } as IButtonData

          }) //End of map(buttonData

        } as IPageData
      
      }) //End of (map(pages 
      
    })) //End of .Pipe(map(pages => {

      console.log("hello" + response)
    return response;
  } //End of getPageData




   //Problem: pageData skal væk, da api'en ikke indeholder PageData som start
  //Der bliver ikke prikket ind til dataen ordentligt. 
  public getPageDataFromDB(): Observable<IPageData[]> {
    var response = this.httpClient.get<IPageData[]>('http://localhost:60106/api/pages')
    .pipe(map(pages => {
        return pages.map(page => {

          return { 
            pageID: page.pageID,
            pageTitle: page.pageTitle,
            pageDescription: page.pageDescription,
            ending: page.ending,
            result: page.result,
            victory: page.victory,
            buttonData: page.buttonData.map(data => {
              
              return { buttonID: data.buttonID, buttonDescription: data.buttonDescription,
                 buttonDestinationPage: data.buttonDestinationPage } as IButtonData
    
              }) //End of map(buttonData
    
            } as IPageData

        })
        
      
       //End of (map(pages  
      
    })) //End of .Pipe(map(pages => {

      console.log("hello" + response)
    return response;
  } //End of getPageDataFromDB
  

}

export interface IMainPageData {
  pageData: IPageData[]
}
