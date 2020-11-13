import React from 'react';
import TagModalContainer from './tag_modal_container';
import {connect} from 'react-redux'

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
        debugger
        if(allTags.length > 0){

            return allTags.map(tag => {
                debugger
                return <li key={tag.id className='ind-tag'>{tag.name}</li>
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

    notesByTag(tagId){
        // debugger
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
                        onChange={this.handleSearch}
                        ></input>

                    <ul 
                    className={this.changeClass()} 
                    
                    >
                        {this.tagList()}
                    </ul>

                    {this.notesByTag()}


                </div>
                <div className={this.state.openModal ? 'tag-modal' : 'none'}>

                    {this.tagModal()}
                </div>
            </div>

        )
    }


}


const mSTP = (state, ownProps) => {
    return(
        {notes: state.entities.notes}
    )
}


export default connect(mSTP, null)(TagIndex);