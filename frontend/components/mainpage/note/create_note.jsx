import React from 'react';
import ReactQuill from 'react-quill';



class CreateNote extends React.Component {

    constructor(props) {
        super(props)
        // debugger

        this.state = { title: '', body: ''}

        this.modules = {
            toolbar: [
                [{ 'font': [] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
            ]
        };

        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
        ];
        

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(str) {

        return (e) => {
            this.setState(
                { [str]: e.target.value }
            );
        };
    
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createNote(this.state);
        this.setState( { title: '', body: ''} )
    }

    render() {
        return (
            <div>
                <h1>Create a New Note</h1>
                {/* <ReactQuill 
                // theme="snow" 
                modules={this.modules}
                formats={this.formats} 
                onChange={this.handleSubmit}
                value={this.state.notes || ''}
                
                /> */}

            </div>
        );
    }

//     render() {

//         <ReactQuill
//         placeholder="Create a new Note"
//         theme='null'
//         onChange={this.props}
//         />


//         return (
//             <div>
//                 <h2>New Note</h2>

//                 <ReactQuill
//                     placeholder="Create a new Note"
//                 />
// {/* 
//                 <form className="note-form" onSubmit={this.handleSubmit}>
                    
//                     <input 
//                     type="text"
//                     id="note-title"
//                     onChange={this.update('title')}
//                     placeholder='title'
//                     value={this.state.title}
//                     />

//                     <input
//                         type="text"
//                         id="note-body"
//                         placeholder='body'
//                         onChange={this.update("body")}
//                         value={this.state.body}
//                     />

//                     <button>please work</button>
//                 </form> */}
//             </div>
//         );
//     }
}

export default CreateNote;
