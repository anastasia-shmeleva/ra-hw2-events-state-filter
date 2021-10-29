import PropTypes from 'prop-types';
import './ProjectList.css';

function ProjectList(props) {
   return (
       <div className='container'>
           {props.items.map(item => {
               return <div className='item__container' key={Math.random()}>
                   <img 
                   className='item__item' 
                   src={item.img}
                   alt=''/>
               </div>
           })}
       </div>
   );
}

ProjectList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ProjectList;
