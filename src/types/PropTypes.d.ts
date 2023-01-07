export interface ILearnProps {
    subject: string
}

export interface IContentProps {
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