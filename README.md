# ForeverNoted

ForeverNoted is a note-taking app that offers the ability to take, edit, and delete notes to help better organize your day. Cloned from Evernote. [Try ForeverNoted](https://forevernoted.herokuapp.com/#/)

## Technology Stack

<hr></hr>

**Ruby on Rails**

Built with Ruby on Rails in the backend using it's MVC (Model-View-Controller) architecture. This framework makes it secure, cost-effective, and offered the ability to be flexible during production.


**React/Redux**

Structured as a normalized Redux State with Thunk middleware for asyncronous actions.

**ReactQuill**

The rich-text editor used inside of ForeverNoted was stylized and prepared using React's Quill library

## Features

##### Notes

The core of any note-taking app, dynamic notes are able to be taken in various text-decorations. Notes are saved immediately into the dynamic sidebar:

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/Peek-good.gif "demo")

As shown above, the 
The note-index updates dynamically based on how many notes are inside of the user's index, the logic behind that is shown here:

`let noteCount = () =>{
            if(notes.length === 1){
                return (notes.length + " note") 
            }else{
                return (notes.length + " notes")
            }
        }
        `

The body of the note is markeddown from HTML and displayed in the note index as plain text:

` createMarkup(idx) {
        return { __html: this.props.notes[idx].body }
    }
`

` <li className='note-body'>
        <div dangerouslySetInnerHTML={this.createMarkup(i)} />
    </li>`



Using React-moment, every 60 seconds the timesince note was written is updated. The note index also features smooths scrolling and a delete function:

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/note-index.gif 'index')


## Planned updates

Currently only one notebook is available per user, but that is meant to be refactored in the very near future
