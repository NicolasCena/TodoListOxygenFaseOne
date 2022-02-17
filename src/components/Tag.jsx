//style
import '../styles/tag.css';

export const Tag = ({index, tag}) => {

  return (
    <div className="tag__container" style={{ backgroundColor: tag.colorTag}}>
        <p key={index} className="tag__title" >{tag.tag}</p>
    </div>
  )
}
