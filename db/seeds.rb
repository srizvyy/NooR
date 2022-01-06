User.destroy_all
Project.destroy_all
Review.destroy_all
User.reset_pk_sequence
Project.reset_pk_sequence
Review.reset_pk_sequence

puts "Seeding Start"

puts 'Seeding User'

kenny = User.create(username: 'Kenny', password: "password", email: 'kenny@kenny.com', img: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png')

william = User.create(username: 'William', password: "password", email: 'william@william.com', img: '')

ben = User.create(username: 'Ben', password: "password", email: 'ben@ben.com', img: 'https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png')

alex = User.create(username: 'Alex', password: "password", email: 'alex@alex.com', img: '')

brice = User.create(username: 'Brice', password: "password", email: 'brice@brice.com', img: '')

rohail = User.create(username: 'Rohail', password: "password", email: 'rohail@rohail.com', img: 'https://api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg')

josh = User.create(username: 'Josh', password: 'password', email: 'josh@josh.com', img: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')

clement = User.create(username: 'Clement', password: 'password', email: 'clement@clement.com', img: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg')

attiya = User.create(username: 'Attiya', password: 'password', email: 'attiya@attiya.com', img: '')

john = User.create(username: 'John', password: 'password', email: 'john@john.com', img: '')

ahmad = User.create(username: 'Ahmad', password: 'password', email: 'ahmad@ahmad.com', img: '')

sam = User.create(username: 'Sam', password: 'password', email: 'sam@sam.com', img: '')

sarah = User.create(username: 'Sarah', password: 'password', email: 'sarah@sarah.com', img: '')

tony = User.create(username: 'Tony', password: 'password', email: 'tony@tony.com', img: '')

tyler = User.create(username: 'Tyler', password: 'password', email: 'tyler@tyler.com', img: '')

mary = User.create(username: 'Mary', password: 'password', email: 'mary@mary.com', img: '')

bob = User.create(username: 'Bob', password: 'password', email: 'bob@bob.com', img: '')

puts 'Seeding Projects'

proj1 = Project.create(owner_id: kenny.id, title: 'AppTrack', description: 'Users can origanize their job applications based on status of thier applications', language: 'Ruby | React', github: 'https://github.com/fitzgeraldkd/phase-3-sinatra-react-project', livesite: '')
proj1.pic_urls.attach(io: File.open('app/assets/images/apptrack.png'), filename: 'apptrack.png', content_type: 'image/png')
proj2 = Project.create(owner_id: clement.id, title: 'Sorting Visualizer', description: 'I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action.', language: 'JavaScript(React)', github: 'https://github.com/clementmihailescu/Pathfinding-Visualizer', livesite: 'https://clementmihailescu.github.io/Pathfinding-Visualizer/#')
proj2.pic_urls.attach(io: File.open('app/assets/images/pathfinding.png'), filename: 'pathfinding.png', content_type: 'image/png')
proj3 = Project.create(owner_id: clement.id, title: 'Sorting Visualizer', description: 'I built this application because I was fascinated by sorting algorithms, and I wanted to visualize them in action. ', language: 'JavaScript', github: 'https://github.com/clementmihailescu/Sorting-Visualizer', livesite: 'https://clementmihailescu.github.io/Sorting-Visualizer/')
proj3.pic_urls.attach(io: File.open('app/assets/images/sorting.png'), filename: 'sorting.png', content_type: 'image/png')
proj4 = Project.create(owner_id: alex.id, title: 'Mount Algo', description: 'To gamify working with algorithms and make practicing algorithms more fun and engaging', language: 'Rails | JavaScript', github: 'https://github.com/andesjoshua/Mount_Algo', livesite: 'https://mount-algo.herokuapp.com/')
proj4.pic_urls.attach(io: File.open('app/assets/images/mountalgo.png'), filename: 'mountalgo.png', content_type: 'image/png')
proj5 = Project.create(owner_id: josh.id, title: 'Fun \'N Games', description: "Fun 'N Games is an app that allows user to find free games to play based on various genres", language: 'JavaScript | React', github: 'https://github.com/andesjoshua/video-game-website', livesite: '')
proj5.pic_urls.attach(io: File.open('app/assets/images/fungames.png'), filename: 'fungames.png', content_type: 'image/png')
proj6 = Project.create(owner_id: alex.id, title: 'Keep it Moovy', description: 'Keep it Moovy was created to help user search top 50 movies of all time. You can search movies based on different genres', language: 'JavaScript', github: 'https://github.com/fromwentzitcame/phase-1-group-project', livesite: '')
proj6.pic_urls.attach(io: File.open('app/assets/images/keepitmoovy.png'), filename: 'keepitmoovy.png', content_type: 'image/png')
proj7 = Project.create(owner_id: kenny.id, title: 'Going For Gold', description: 'Going For Gold is a game app similar to jeapordy. Users can play together and answer questions. First person to answer the question wins.', language: 'JavaScript | React', github: 'https://github.com/fitzgeraldkd/going-for-gold-frontend', livesite: 'https://goingforgold.netlify.app/')
proj7.pic_urls.attach(io: File.open('app/assets/images/goingforgold.png'), filename: 'goingforgold.png', content_type: 'image/png')
proj8 = Project.create(owner_id: kenny.id, title: 'AppliTracker', description: 'AppliTracker is an app that allows users to keep track of where they have applied and status of thier applications', language: 'TypeScript | React | Rails', github: 'https://github.com/fitzgeraldkd/applitracker-frontend', livesite: 'https://applitracker.netlify.app/jobs')
proj8.pic_urls.attach(io: File.open('app/assets/images/applitrack.png'), filename: 'applitrack.png', content_type: 'image/png')

puts 'Seeding Resumes'

resume1 = Resume.create(owner_id: kenny.id, title: 'SWE Resume', description: 'my resume', name: 'Kenny')
resume1.resume_url.attach(io: File.open('app/assets/images/resumePics/resume1.png'), filename: 'resume1.png', content_type: 'image/png')
resume2 = Resume.create(owner_id: attiya.id, title: 'Program Manager Resume', description: 'my resume', name: 'Attiya')
resume2.resume_url.attach(io: File.open('app/assets/images/resumePics/resume2.png'), filename: 'resume2.png', content_type: 'image/png')
resume3 = Resume.create(owner_id: john.id, title: 'Software Developer Resume', description: 'my resume', name: 'John')
resume3.resume_url.attach(io: File.open('app/assets/images/resumePics/resume3.png'), filename: 'resume3.png', content_type: 'image/png')
resume4 = Resume.create(owner_id: sarah.id, title: 'Product Designer Resume', description: 'my resume', name: 'Sarah')
resume4.resume_url.attach(io: File.open('app/assets/images/resumePics/resume4.png'), filename: 'resume4.png', content_type: 'image/png')
resume5 = Resume.create(owner_id: sam.id, title: 'Program Analyst Resume', description: 'my resume', name: 'Sam')
resume5.resume_url.attach(io: File.open('app/assets/images/resumePics/resume5.png'), filename: 'resume5.png', content_type: 'image/png')
resume6 = Resume.create(owner_id: tyler.id, title: 'Account Manager Resume', description: 'my resume', name: 'Tyler')
resume6.resume_url.attach(io: File.open('app/assets/images/resumePics/resume6.png'), filename: 'resume6.png', content_type: 'image/png')
resume7 = Resume.create(owner_id: mary.id, title: 'Software Manager Resume', description: 'my resume', name: 'Mary')
resume7.resume_url.attach(io: File.open('app/assets/images/resumePics/resume7.png'), filename: 'resume7.png', content_type: 'image/png')
resume8 = Resume.create(owner_id: ahmad.id, title: 'SWE Resume', description: 'my resume', name: 'Ahmad')
resume8.resume_url.attach(io: File.open('app/assets/images/resumePics/resume8.png'), filename: 'resume8.png', content_type: 'image/png')
resume9 = Resume.create(owner_id: rohail.id, title: 'Program Manager Resume', description: 'my resume', name: 'Rohail')
resume9.resume_url.attach(io: File.open('app/assets/images/resumePics/resume9.png'), filename: 'resume9.png', content_type: 'image/png')
resume10 = Resume.create(owner_id: bob.id, title: 'Product Manager Resume', description: 'my resume', name: 'Bob')
resume10.resume_url.attach(io: File.open('app/assets/images/resumePics/resume10.png'), filename: 'resume10.png', content_type: 'image/png')


puts 'Seeding Reviews'

Review.create(like: 10, comments: 'Great Project!', user_id: 4, project_id: 1)
Review.create(like: 10, comments: 'Awesome Project!', user_id: 3, project_id: 2)
Review.create(like: 10, comments: 'You did a great job on this project', user_id: 2, project_id: 3)
Review.create(like: 10, comments: 'Wow this incredible', user_id: 1, project_id: 4)
Review.create(like: 10, comments: 'Hey! great job on this project', user_id: 6, project_id: 5)
Review.create(like: 10, comments: 'Awesome Porject!', user_id: 5, project_id: 6)

puts 'Seeding Done'
