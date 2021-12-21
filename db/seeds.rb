User.destroy_all
Project.destroy_all
Review.destroy_all
User.reset_pk_sequence
Project.reset_pk_sequence
Review.reset_pk_sequence

puts "Seeding Start"

puts 'Seeding User'

kenny = User.create(username: 'Kenny', password: "password", email: 'kenny@kenny.com', img: '')

william = User.create(username: 'William', password: "password", email: 'william@william.com', img: '')

ben = User.create(username: 'Ben', password: "password", email: 'ben@ben.com', img: '')

alex = User.create(username: 'Alex', password: "password", email: 'alex@alex.com', img: '')

brice = User.create(username: 'Brice', password: "password", email: 'brice@brice.com', img: '')

rohail = User.create(username: 'Rohail', password: "password", email: 'rohail@rohail.com', img: '')

puts 'Seeding Projects'

proj1 = Project.create!(owner_id: kenny.id, title: 'AppTrack', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'User can origanize their job application', language: 'Ruby, React', github: '', livesite: '')
proj2 = Project.create(owner_id: william.id, title: 'Sorting Visualizer', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'User visualize how different sorting algorithms work', language: 'JavaScript(React)', github: '', livesite: '')
proj3 = Project.create(owner_id: ben.id, title: 'Pathfinding visualizer', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'User can see how different pathfinding algorithms work', language: 'JavaScript', github: '', livesite: '')
proj4 = Project.create(owner_id: alex.id, title: 'Mount Algo', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'Play mount algo to learn algorithms', language: 'Rails, JavaScript', github: '', livesite: '')
proj5 = Project.create(owner_id: brice.id, title: 'Free Games', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'You can find free games', language: 'JavaScript', github: '', livesite: '')
proj6 = Project.create(owner_id: rohail.id, title: 'Movies', image: 'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/111059PK.jpg&w=500&zc=1', description: 'User can find top 50 movies', language: 'JavaScript', github: '', livesite: '')



puts 'Seeding Reviews'

Review.create!(like: 10, comments: 'Awesome Porject!', user_id: 1, project_id: 1)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 2, project_id: 2)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 3, project_id: 3)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 4, project_id: 4)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 5, project_id: 5)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 6, project_id: 6)

puts 'Seeding Done'
