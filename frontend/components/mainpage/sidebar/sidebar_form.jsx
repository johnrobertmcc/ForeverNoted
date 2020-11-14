import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import TagIndex from '../tag/tag_index';
import AllNotesIndex from '../note/all_notes_index';

class SideBar extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            showMenu: false,
            showTags: false
        }

        this.showNotebooks = this.showNotebooks.bind(this)
    }

    componentDidMount(){
        this.props.fetchTags(this.props.currentUser.id)
    }

    componentDidUpdate(prevState){
        if(this.props.history.location.pathname !== prevState.location.pathname){
            this.setState({showTags: false})
        }
    }

    showNotebooks(){

        let {notebooks} = this.props;

        if(this.state.showMenu){
            return notebooks.map( notebook => {

            return(
               <li
               className="notebook-title-font"
               key={notebook.id}
               ><i className="fas fa-book"/>
                 <Link to={{pathname:`/main/notebooks/${notebook.id}/notes`,
                                    state: {
                                      fromNotebook: true
                                    }
                            }}
                >
                         {notebook.title}
                </Link> 
               </li>    
            )
        })
        }
    }
    openTags(){

        if(this.state.showTags){


            return(
                <div className='sidebar-extend'>
                    <TagIndex tags={this.props.tags} />
                </div>
            )

        }else{
            return null
        }
    }

    showCaret(){
        if(this.state.showMenu){
            return <i className="fas fa-caret-down"></i>
        }else{
            return <i className="fas fa-caret-right"></i>
        }
    }

    showIcons(){
        if(this.state.showTags){
            return  <i className="fa fa-window-close" aria-hidden="true"></i>
        }else{
            return <i className="far fa-caret-square-right"></i>
        }
    }

    reload(){

        if(this.props.location.pathname === '/main/notes'){
            window.location.reload(false)
        }else{
            <Redirect to='/main/notes'></Redirect>
        }
    }

    sidebarLinks(){
        return(
            <ul className='links-home'>
                        <Link to='/main/notes' onClick={()=> this.reload()}>
                            <li className='newnote-btn'>

                                <i className="fa fa-plus" aria-hidden="true"></i><p className='btn-words'>New note</p>
                            </li>
                        </Link>
                        
                        <li className='switch-links'><i className="fas fa-edit"></i><Link to='/main/notes'>All Notes</Link></li>
                        <div className='sidebar-new'>
                            <li className='switch-links nb-caret' onClick={() =>this.setState({showMenu: !this.state.showMenu})}>{this.showCaret()}
                            <Link to={{pathname:'/main/allnotebooks', state: {fromNotebook: true}}} className='nb-idx-link'>Notebooks</Link>
                            </li>
                        </div>
                        <ul className='notebook-titles'>{this.showNotebooks()}</ul>
                        <div>
                        
                        <li className='switch-links' onClick={() =>this.setState({showTags: !this.state.showTags})}>{this.showIcons()}   Tags </li>
                        </div>
                
            </ul>
        )
    }


    render(){


        const {logOut} = this.props;



        return(
            
            <div className='testing'>
                <div className="homepage">
                    
                    <div className='sidebar'>
                    <div className='flex-side'>
                            <p className='user-info'>
                                <i className="fa fa-pagelines" aria-hidden="true"></i>
                                <span className='username'> {this.props.currentUser.email}</span>
                            </p>
                            <button
                                className='logout-btn'
                                onClick={logOut}
                                >LogOut
                            </button>
                        </div>
                        
                        {this.sidebarLinks()}
                        

                        <div className='flex-footer'>
                            <hr className='footer-sidebar'></hr>
                            <p className='sig'>created by <br></br>John Robert McCann</p>
                            <br></br>
                            <div className='sidebar-icons'>
                                <a href='https://github.com/johnrobertmcc'><i className="fab fa-github"></i></a>
                                <a href='https://www.linkedin.com/in/jrmcc/'><i className="fab fa-linkedin-in"></i></a>
                                <a href='https://angel.co/u/john-robert-mccann'><i className="fab fa-angellist"></i></a>
                            </div>
                            
                        </div>
                    </div>


                </div>

                <div>
                    {this.openTags()}
                </div>
            </div>
        )}
}



export default withRouter(SideBar);