# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Note.delete_all
Notebook.delete_all
Tag.delete_all

user = User.create(email: 'demo_user@demo.co.it', password: 'password')
notebook = Notebook.create(title: 'Your First Notebook', user_id: user.id)
note = Note.create(title: 'Welcome Note', body:"Thanks for using ForeverNoted! To the left you'll see the index of all your notes. Type here to edit this note, or make a new note of your own! You can tag your note or change the notebook by clicking at the bottom of this editor. Don't forget to save what you have!", notebook_id: notebook.id, user_id: user.id)
tag = Tag.create(name: "Here's a tag!", user_id: user.id, note_ids: [note.id])