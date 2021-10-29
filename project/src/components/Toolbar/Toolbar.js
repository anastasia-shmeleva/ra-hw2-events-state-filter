import PropTypes from 'prop-types';
import './Toolbar.css';

function Toolbar(props) {
    
    return (
        <div className='filter__container'>
           {props.filters.map(item => {
               return <button key={Math.random()} 
                              className={props.selected === item ? 'filter__btn active' : 'filter__btn'}
                              onClick={props.onSelectFilter}>{item}</button>
           })}
       </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
}



export default Toolbar;