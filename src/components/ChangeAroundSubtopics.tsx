import { IChangeSubtopic } from '../types/PropTypes';

const NextSubtopic = (props: IChangeSubtopic) => {
    if (props.currentSubtopicPageIndex >= props.subtopics.length - 1) {
      return <></>;
    } else {
      const nextSubtopic = props.subtopics[props.currentSubtopicPageIndex + 1];
      return (
        <p
          onClick={() => props.changeSubtopicPageIndex(props.currentSubtopicPageIndex + 1)}
          className='handlechange-subtopic'
        >
          {nextSubtopic.title + " 👉"}
        </p>
      );
    }
  };
  
  const PrevSubtopic = (props: IChangeSubtopic) => {
    if (props.currentSubtopicPageIndex <= 0) {
      return <></>;
    } else {
      const prevSubtopic = props.subtopics[props.currentSubtopicPageIndex - 1];
      return (
        <p
          onClick={() => props.changeSubtopicPageIndex(props.currentSubtopicPageIndex - 1)}
          className='handlechange-subtopic'
        >
          {"👈 " + prevSubtopic.title}
        </p>
      );
    }
  };

export default function ChangeAroundSubtopics(props: IChangeSubtopic) {
  return (
    <div className="subtopic-change">
        <PrevSubtopic
          subtopics={props.subtopics}
          changeSubtopicPageIndex={props.changeSubtopicPageIndex}
          currentSubtopicPageIndex={props.currentSubtopicPageIndex}
        />
        <NextSubtopic
          subtopics={props.subtopics}
          changeSubtopicPageIndex={props.changeSubtopicPageIndex}
          currentSubtopicPageIndex={props.currentSubtopicPageIndex}
        />
      </div>
  )
}
