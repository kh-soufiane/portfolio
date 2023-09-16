import './index.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  faBriefcase,
  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { experiences } from '../../models/experience';

const Experience = () => {
  
  const constructTimeLine = () =>
  experiences.map((exper, i) => {
    return (
<VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  var(--arrow-color)' }}
        date={exper.date}
        iconStyle={{ background: 'var(--icon-background)', color: 'var(--icon-color)' }}
        icon={<FontAwesomeIcon icon={faBriefcase} color='var(--icon-color)' />}
      >
        <h3 className="vertical-timeline-element-title">{exper.title}</h3>
        <p>
          {exper.description}
        </p>
            
        <h4 className="vertical-timeline-element-subtitle"><a rel='noreferrer' target='_blank' href={exper.link}>{exper.subTitle}</a></h4>
        <img src={exper.image} alt={exper.subTitle} className='company-image' />
      </VerticalTimelineElement>
      
    );
  });

  return (
    <div className='timeline-container'>
    <VerticalTimeline>{constructTimeLine()}</VerticalTimeline>
    </div>
    )
}

export default Experience