import React from 'react';


class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {filtered: this.props.notes}
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        let {notes} = this.props

        let currentList = [];

        if (e.target.value !== "") {

            for(let i = 0; i < notes.length; i++){
            if(notes[i].title.includes(e.target.value)){
                currentList.push(notes[i])
            }

        }

    
        console.log(currentList)    
       ;
        } else {
        currentList = notes;
        };

        this.setState({
        filtered: currentList
        });


    }

    render(){

        return(
            <div className='searchbarcontainer'>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
            </div>
        )
    }

}

export default SearchBar;