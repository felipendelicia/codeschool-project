export interface ILearnProps {
    subject: string
}

export interface IContentProps {
    contents: {id:number, title:string, content:string}[],
    subtopic: {id:number, title:string, content:string},
    currentSubtopicPage:number,
    changeSubtopicPage:(page:number)=>void
}

export interface ISidebarProps {
    contents: {id:number, title:string, content:string}[],
    currentSubtopicPage:number,
    changeSubtopicPage:(page:number)=>void
}

export interface IDropdownMenu {
    handleClick: ()=>void,
    showDropMenu: boolean
}

export interface IChangeSubtopic {
    contents: {id:number, title:string, content:string}[],
    changeSubtopicPage:(page:number)=>void,
    currentSubtopicPage: number,

}