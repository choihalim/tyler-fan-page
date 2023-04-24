Phase 2 Project Outline

Group 4 (Clover)

Contributors: Sarah Baughman, Halim Choi, Andrew O’Brien, Ryan Rojas 

Need a db.json AND an API


Notes: 
create-react-app phase-2-project
Replace phase-2-project with your app name 
Push this up to github 

Phase 2 Project - Tyler the Creator Fan Page 

Group 4 (Clover)

Contributors: Sarah Baughman, Halim Choi, Andrew O’Brien, Ryan Rojas


USER STORY

As a user I can: 
View basic information about Tyler the Creator
Use the sidebar to navigate to a discography page and tour schedule page
View the artist’s full discography sorted by album
Search the simulated tour schedule by city and state to see when the artist will be visiting a nearby venue

Stretch Goals
Add favorite songs from the discography page to a favorites list 
Search through songs on the discography page
Provide links to individual tracks (sound or youtube link)
Age restriction filter

API INFO
Using an external API to fetch our album data (album title, release year, genre, album art) 
db.json with concert time, date and location 
db.json with Tyler the Creator track info
	   

COMPONENT HIERARCHY 

App 
    -Header
        -NavBar
    -PageContainer
        -Home
        -Discography
            ~AlbumCard
                ~SongCard (stretch goal) 
        -TourSchedule (search bar)
            ~TourCard

