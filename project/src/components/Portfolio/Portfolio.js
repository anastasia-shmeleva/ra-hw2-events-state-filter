import React from 'react';
import ProjectList from "../ProjectList/ProjectList";
import data from '../../data';
import Toolbar from '../Toolbar/Toolbar';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: 'All',
            filteredItems: data,
        };
    }

    onSelectFilter(e) {
        const state = e.target.innerText;
        this.setState(() => ({ filter: state, filteredItems: data.filter(item => state === 'All' ? data : item.category === state)}));
    }

    render() {
        return (
            <>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.filter}
                    onSelectFilter={(e) => this.onSelectFilter(e)}/>
                <ProjectList items={this.state.filteredItems}/>
            </>
        )
    }
}

export default Portfolio;