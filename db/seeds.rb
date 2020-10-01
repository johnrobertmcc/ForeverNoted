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

users = User.create( [ { email: 'demo_user@demo.co.it', password: 'password', id: 14 }])
notes = Note.create([{title: 'testing title', body:'demo user note test', user_id: 14, notebook_id: 1, id: 1}])
notebooks = Notebook.create([{title: 'notebook testing title', user_id: 14, id: 1}])
