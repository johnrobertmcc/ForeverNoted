import React from 'react';
import TagModalContainer from './tag_modal_container';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class TagIndex extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            tagList: this.props.tags,
            openModal: false,
            searched: false
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidUpdate(){
        console.log(this.state.openModal)
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
        let allTags;

        allTags = this.state.searched ? this.state.tagList : tags
        if(allTags.length > 0){

            return allTags.map(tag => {
                return (
                <li key={tag.id} className='ind-tag'>
                    <Link to={{pathname:`/main/notes/tags/${tag.id}`,
                                    state: {
                                        fromTags: true,
                                        tagId: tag.id
                                    }
                                }}
                    >
                    {tag.name}
                    </Link>
                    
                </li>)
            }
         )
        }
    }

    handleSearch(e){

        let {tags} = this.props
 
        let currentList = [];

        if (e.target.value !== "") {
            for(let i = 0; i < tags.length; i++){
    
                if(tags[i].name.includes(e.target.value)){
                    currentList.push(tags[i])
                }
            };

        } else {
            currentList = tags;
        };
        this.setState({
            searched: true,
            tagList: currentList
        })

        if(e.target.value ===''){
            this.setState({
                searched: false
            })

        }
    }

    changeClass(){
        if(this.state.searched){
            return 'results'
        }else{
            return 'waiting'
        }
    }

    tagModal(){
        if(this.state.openModal){
            return(
                <TagModalContainer />
            )
        }
    }


    allTags(){

    if(!this.state.openModal && !this.state.searched){

        return( this.props.tags.map(tag => {
            return(
                <li key={tag.id} className='alltaglist'>
                    <Link to={{pathname:`/main/notes/tags/${tag.id}`,
                                    state: {
                                        fromTags: true,
                                        tagId: tag.id
                                    }
                                }}
                    >
                        {tag.name}
                    </Link>
                </li>
                
                )
            })
            )
        }
        
    }

    render(){

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
                        onChange={this.handleSearch}
                        ></input>

                    <ul 
                    className={this.changeClass()} 
                    
                    >
                        {this.tagList()}
                    </ul>

                </div>
                <div className={this.state.openModal ? 'tag-modal' : 'none'}>

                    {this.tagModal()}
                    {this.allTags()}
                </div>
            </div>

        )
    }


}


const mSTP = (state, ownProps) => {

    let tags = Object.values(state.entities.tags)
    
    return(
        {
            notes: state.entities.notes, 
            tags
        }
    )
}


export default connect(mSTP, null)(TagIndex);