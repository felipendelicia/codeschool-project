export interface ISubjectPageProps {
    subject: string
}

export interface IContentProps {
    subtopics: {id:number, title:string, content:string}[],
    currentSubtopicPageIndex:number,
    changeSubtopicPageIndex:(page:number)=>void
}

export interface ISidebarProps {
    subtopics: {id:number, title:string, content:string}[],
    currentSubtopicPageIndex:number,
    changeSubtopicPageIndex:(page:number)=>void
}

export interface IDropdownMenu {
    handleClick: ()=>void,
    showDropMenu: boolean
}

export interface IChangeSubtopic {
    subtopics: {id:number, title:string, content:string}[],
    changeSubtopicPageIndex:(page:number)=>void,
    currentSubtopicPageIndex: number,

}