User.destroy_all
Category.destroy_all
Location.destroy_all
Complaint.destroy_all

puts "🌱 Seeding Users"
# byebug
user1 = User.create(username: "Elena", email: "elena@gmail.com", password: "1234567890")
user2 = User.create(username: "John", email: "john@gmail.com", password: "1234567890")
user3 = User.create(username: "Lizzy", email: "lizzy@gmail.com", password: "1234567890")
user4 = User.create(username: "Arya", email: "arya@gmail.com", password: "1234567890")
user5 = User.create(username: "Joe", email: "Joe11@gmail.com", password: "1234567890")

puts "🌱 Seeding Locations"
loc1 = Location.create(borough: "Queens", neighborhood: "Astoria", zip: 11103)
loc2 = Location.create(borough: "Brooklyn", neighborhood: "Bushwick", zip: 11237)
loc3 = Location.create(borough: "Manhattan", neighborhood: "Murray Hill", zip: 10016)

puts "🌱 Seeding Categories"
categ1 = Category.create(category: "Sidewalk Condition")
categ2 = Category.create(category: "Building Complaint")
categ3 = Category.create(category: "Street Condition")
categ4 = Category.create(category: "Noise")
categ5 = Category.create(category: "Dirty Condition")

puts "🌱 Seeding Complaints"
Complaint.create(user_id: user1.id, category: categ1, title: "content", desc: "broken sidewalk", date_observed: 12/22/2021)
Complaint.create(user_id: user2.id, category: categ2, title: "content", desc: "building sidewalk with frozen snow", date_observed: 01/03/2022)
Complaint.create(user_id: user3.id, category: categ3, title: "content", desc: "flooded street", date_observed: 01/22/2022)

puts "Done seeding 🌱"