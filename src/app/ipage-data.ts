export interface IPageData {

    pageID: number,
    pageTitle: string,
    pageDescription: string, 
    ending: boolean,
    result: boolean,
    victory: boolean,
    buttonData: IButtonData[],
    


}

export interface IButtonData {
    buttonID: number,
    buttonDescription: string,
    buttonDestinationPage: number

}


