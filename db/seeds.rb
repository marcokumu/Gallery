# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gallery.create!([{
    name: "Ogden Contemporary Arts",
    address: '455 25th St, Ogden, UT 84401'
},
{
    name: "Soulard Art Gallery",
    address: '2028 s 12th St, St. Louis, MO 63104'
}, 
{
    name: 'Yale University Art Gallery',
    address: "1111 Chapel St, New Haven, CT 06510"
},
{
    name: 'The Sheldon Concert Hall',
    address: '3648 Washington Ave, St. Louis, MO 63108'
},
{
    name: 'Contemporary Art Museum of St. Louis',
    address: '3750 Washington Ave, St. Louis, MO 63108'
},
{
    name: 'Lehigh University Art Galleries',
    address: '420 E Packer Ave, Bethlehem, PA 18015'
}]
)