# ForeverNoted

ForeverNoted is a note-taking app that offers the ability to take, edit, and delete notes to help better organize your day. Cloned from Evernote. [Try ForeverNoted](https://forevernoted.herokuapp.com/#/)

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/screenshot.png "homepage")

## Technology Stack

<hr></hr>

**Ruby on Rails**

Built with Ruby on Rails in the backend using it's MVC (Model-View-Controller) architecture. This framework makes it secure, cost-effective, and offered the ability to be flexible during production.


**React/Redux**

Structured as a normalized Redux State with Thunk middleware for asyncronous actions.

**ReactQuill**

The rich-text editor used inside of ForeverNoted was stylized and prepared using React's Quill library

## Features

##### Note Index

ForeverNoted features one, single note index that is updating in real time based on what the user desires to see, whether that is a specific Notebook, a specific Tag, or any specific search terms.

This was achieved by passing information seamlessly through ownProps, as well as Link locations. This information then gets passed to the AllNotesIndex, which is filtered through in the component's mapStateTo Props through conditional arguments. This information is then taken from the component's props and put onto the state, where it can then be manipulated further if the user desires through searches.

Below is an example of how information is passed into mapStateToProps of AllNotesIndex.jsx


```Javascript
    if(fromNotebook){
        notebook = state.entities.notebooks[ownProps.match.params.notebookId]
        notes = Object.values(state.entities.notebooks[ownProps.match.params.notebookId].notes)
    }else if(fromTags){
        notebook = false;
        tag = state.entities.tags[ownProps.location.state.tagId];
        let temp = [];
        
        let tagLength = state.entities.tags[tag.id].note_ids.length

        for(let i = 0; i < tagLength; i++){
            temp.push(state.entities.notes[state.entities.tags[tag.id].note_ids[i]])
        }
        notes = temp;
    }else{
        notebook = false;
        tag = false;
        notes = Object.values(state.entities.notes)
    }

```

In the above example - if a user is coming from the notebook's index (which is flagged through ownProps.history.location), then the notebook id is taken from ownProps, the notebook's notes are fetched through the redux store, and the 'notes' prop is then declared based on these paramters. Similarly, the same pattern is followed if the user is coming from the TagsIndex.

If neither of these parameters are met, then the 'notes' prop is by default all of the user's notes.


Other examples of how the Note Index can fitler and display notes or the editor component based on specific parameters passed through ownProps:

```Javascript
    if(ownProps.action && !newNote){
        action = ownProps.action
    }else{
        action = {type: 'create', note: '', notebook} 
    }
```

Above is an example of how the editor is switched from the AllNotesIndex. On the Component's update, mapStateToProps can be passed a prop from the parent component. If there is an action inside of ownProps, then that action is taken into consideration and declared.  For example, below is how the AllNotesIndex knows to go to the editor's Edit action:

```Javascript
//the user clicks this link inside of the AllNotesIndex:
  return sortedNotes.map((note, i) => (
                
                <div 
                className='ind-note' 
                key={note.id}
                onClick={() => this.switchButton(note)} ///<--user clicks this div
                >
                    
    
                    <li className='note-link'>
                        {note.title}
                    </li>

                    <li className='note-body'>
                        <div dangerouslySetInnerHTML={this.createMarkup(i)} />
                    </li>
                    
                    <li className="date">
                        {this.currentDate(note)}
                    </li>

                </div>

//which then triggers this state change:
    switchButton(note){
        this.setState({
            action: {
                type: 'edit',
                note: note
            },
            newNote: false
        })
    }

//which is then re-rendered with these parameters:

    editor(arg){


        let action = this.state.newNote ? {type: 'create', note: '', notebook: this.state.action.notebook} : arg  

        switch (action.type) {

            case 'edit':
                
                return <EditNote note={action.note}/>;
            
            case 'create':

                return <CreateNote notebook={action.notebook}/>;
            
            default:
                return <CreateNote notebook={action.notebook}/>;
        }      
    }

```
```Javascript

//edit_note_container.jsx///

//Which renders the EditNote component based on the above parameters:
const mSTP = (state, ownProps) => {

    const note = ownProps.note;
    const currentUser = state.entities.users[state.session.id]
    const notebooks = Object.values(state.entities.notebooks)

    return (
        {
            currentUser,
            note,
            notebooks,
            tags: Object.values(state.entities.tags)
        }
    )
};
```

Above, the user clicks a link that triggers the switchButton() function.  This then sets the state, and triggers a re-render.  On the render, the editor is switched based on the 'case' edit, which opens the EditNote component based on the parameters of the note that was clicked.



##### Notes

The core of any note-taking app, dynamic notes are able to be taken in various text-decorations. Notes are saved immediately into the dynamic sidebar:

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/metatag.gif "demo")

As shown above, the 
The note-index updates dynamically based on how many notes are inside of the user's index, the logic behind that is shown here:

```Javascript
let noteCount = () =>{
            if(notes.length === 1){
                return (notes.length + " note") 
            }else{
                return (notes.length + " notes")
            }
        }
```

The body of the note is markeddown from HTML and displayed in the note index as plain text:

```Javascript
 createMarkup(idx) {
        return { __html: this.props.notes[idx].body }
    }
```

```Javascript
 <li className='note-body'>
        <div dangerouslySetInnerHTML={this.createMarkup(i)} />
    </li>
```

##### Notebooks

On signup, every user is given an initial notebook that acts as the default when no other notebooks are assigned.  This was achieved through a fetch request / response with the sign-up action.

```Javascript
    ///sign_up_form.jsx, class SignUpForm

   handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user).then(res => {
            let userId = res.currentUser.id;
            return this.newNotebook(userId)
        })
    }

    newNotebook(userId){
        const firstNotebook = {
            title: 'My First Notebook',
            user_id: userId
        }

        this.props.createNotebook(firstNotebook).then(res =>{
            let notebookId = res.notebook.id;
            let userId = res.notebook.user_id;
            return this.newNote(notebookId, userId)
        });
    }
```

This notebook then creates an initial 'Welcome' note, that contains instructions on how to use the app. Try it out yourself!

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/notebook.gif "notebook")


##### Tags

If notebooks are too broad for a user to store all of their notes, then ForeverNoted offers the user another option: tags!

These can be used to flag specific notes with a topic, which can then be accessed through the sidebar and quickly and easily searched.

This was achieved through three main steps:
* Attaching the tags to the notes via backend routes through active record associations:
```Ruby
#
class Tag < ApplicationRecord
    has_many :notes
    belongs_to :user
end

```

* Accessing these associations through the api calls and returning via jBuilder:
```Ruby
#_note.json.jbuilder
json.extract! note, :title, :body, :id, :created_at, :user_id, :notebook_id, :updated_at, :tag_id

```

* And finally fetched through the redux store based on the user's Id:
```Javascript
///tag_index.jsx
const mSTP = (state, ownProps) => {

    let tags = Object.values(state.entities.tags)
    
    return(
        {
            notes: state.entities.notes, 
            tags
        }
    )
}

```


##### Search

ForeverNoted features three searches: Notes, Notebooks, and Tags

This searches through the user's notes (title and body) based on the user's input. This updates the user's Note Index in real time. This 'fuzzy search' was achieved through an initial list of the all notes index, based on information the user would like to see. This slice of state is then constantly replaced based on what the user is typing in the search bar through Javascript's inherit '.includes' method after casting the input to lowercase to make the search case insensitive. This in turn updates the component's state and triggers a rerender.

This pattern below is repeated similarly for tags and notebooks.

```Javascript
    handleChange(e) {
        let {notes} = this.props
 
        let currentList = [];

        if (e.target.value !== "") {
            for(let i = 0; i < notes.length; i++){
                if(notes[i].title.toLowerCase().includes(e.target.value.toLowerCase())){
                    currentList.push(notes[i])
                }else if(notes[i].body.toLowerCase().includes(e.target.value.toLowerCase()) && !currentList.includes(notes[i])){
                    currentList.push(notes[i])
                }
            };

             this.setState({
                searched: true
            });

        } else {
            currentList = notes;
             this.setState({
                searched: false
            });
        };

        this.setState({
            filtered: currentList,
        });

    }
```

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/notes-search.gif "notes search")

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/notebook-search.gif "notebook search")

![alt-text](https://github.com/johnrobertmcc/ForeverNoted/blob/master/app/assets/images/tag-search.gif "tag search")



## Planned updates
A more responsive application, so that mobile and tablet users can experience ForeverNoted, is planned for the near future.
