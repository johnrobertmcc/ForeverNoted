import React from 'react';

class NotebookAssign extends React.Component{
    
    constructor(props){
        super(props)

    
    }

    //  update(str) {
    //     return (e) => {
    //         this.setState(
    //             { [str]: e.target.value }
    //         );
    //     };
    
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.createTag(this.state);
    // }

    render(){

        return(
            <div>
                    
                {/* <h1 className='tag-header'>Add a New Tag</h1>

                <hr className='tag-line'></hr>

                <br></br>
                <br></br>
                <br></br>
                 <form
                        className="note-form"
                        onSubmit={this.handleSubmit}>
                        <div className='create-head'>
                            
                        </div>


                          
                        <div className='header-buttons'>
                            <input
                                type="text"
                                className='tag-input'
                                id="tag-title"
                                onChange={this.update('name')}
                                placeholder='type here'
                                value={this.state.name}
                            />
                            
                                <button className='note-btn tag'> Create </button>
                                {/* <button onClick={this.tagModal()}  className='note-btn'>Create Tag</button>

                </div>

                       
                </form>
                 */}

            </div>
        )
    }


}

export default NotebookAssign;