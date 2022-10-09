# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding database..."
Gallery.create!([{
    name: "Nairobi Art Gallery",
    address: '1100 Nairobi, Kenyatta Ave,Kenya'
},
{
    name: "Mombasa Art Gallery",
    address: '1678 Mombasa, Moi Ave,Kenya'
}, 
{
    name: 'Kisumu Art Gallery',
    address: "1000 Kisumu, Ramogi Ave, Kenya"
},
{
    name: 'Nakuru Art Gallery',
    address: '1000 Nakuru, Uhuru Ave, Kenya'
},
{
    name: 'Kakamega Art Gallery',
    address: '1000 Kakamega, Awori Ave, Kenya'
},
{
    name: 'Kericho Art Gallery',
    address: '3300 Kericho Rd, Kericho, Kenya'
}]
)
puts "Done seeding database."