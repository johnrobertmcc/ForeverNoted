import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            showMenu: false,
        }

        this.showNotebooks = this.showNotebooks.bind(this)
    }
    showNotebooks(){

        let {notebooks} = this.props

        if(this.state.showMenu){
            return notebooks.map( notebook => {

            return(
               <li>
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

    showCaret(){
        if(this.state.showMenu){
            return <i className="fas fa-caret-down"></i>
        }else{
            return <i className="fas fa-caret-right"></i>
        }
    }

    

    render(){

        

        const {logOut} = this.props;


        return(

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
                    
                    <ul className='links-home'>
                        <li className='newnote-btn'><Link to={{
                            pathname:'/main/notes', 
                            state: {newNote: true}
                            }}><i className="fa fa-plus" aria-hidden="true"></i><p className='btn-words'>New note</p></Link>
                        </li>
                        
                        <li className='switch-links'><i className="fas fa-edit"></i><Link to='/main/notes'>All Notes</Link></li>
                        <li className='switch-links' onClick={() =>this.setState({showMenu: !this.state.showMenu})}>{this.showCaret()}<i className="fas fa-book"></i><Link to='/main/allnotebooks'>Notebooks</Link></li>
                        <li className='notebook-titles'>{this.showNotebooks()}</li>
                    </ul>

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
        )}
}



export default withRouter(SideBar);