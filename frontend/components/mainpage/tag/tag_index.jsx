import React from 'react';

class TagIndex extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            openModal: false,
            searched: false
        }
    }

    plusSign(){
        if(!this.state.openModal){
            return <i className="fas fa-plus"></i>
        }else{
            return <i className="fas fa-minus"></i>
        }
    }

    tagList(){
        let {tags} = this.props
        
        if(tags.length > 0){

            tags.map(tag => {
                return tag.name
            }
        })

    }
    render(){
        console.log(this.state.openModal)

        return(
            <div>
                <div className='above-line'>

                    <h2 className='tag-header'>Tags</h2>
                    <div className='icon-placeholder' onClick={() => this.setState({openModal: !this.state.openModal})}>{this.plusSign()}</div>
                </div>

                <hr className='tag-idx-line'></hr>

                <div className='tag-search'>
                    <input
                        type='text'
                        placeholder='Search for tags...'
                        className='tag-searchbar'
                    ></input>

                    <ul className={this.state.searched ? 'results' : 'waiting'}>
                        {this.tagList()}
                    </ul>


                </div>
            </div>
        )
    }


}

export default TagIndex;