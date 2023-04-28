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
 - View basic information about Tyler the Creator on the Home Page
 - Use the navigation bar to view the discography, tour schedule and create page
 - View the artist’s full discography sorted by album, click each album cover to see each respective track list
 - Search the simulated tour schedule by city, state or venue to see when the artist will be visiting nearby
 - Submit a new idea for Tyler using a form, as well as view other users' ideas on the Create page
 - Switch between light and dark mode using a switch at the top-right of the page

API INFO
Using an external API to fetch our album data (album title, release year, genre, album art) 
db.json with concert time, date and location 
db.json with Tyler the Creator track info
	   

COMPONENT HIERARCHY 

App 
    - Header
        - DarkMode
        - NavBar
    - PageContainer
        - Home
            - HomeNavBar
            - ArtistIntro
            - ArtistEarlyYears
            - FirstAlbum
                - YoutubeEmbed
            - YonkersSingle
                - YoutubeEmbed
            - SecondAlbum
                - YoutubeEmbed
            - LoiterSquad
                - YoutubeEmbed
            - ThirdAlbum
                - YoutubeEmbed
            - FourthAlbum
                - YoutubeEmbed
            - BillNye
                - YoutubeEmbed
            - FifthAlbum
                - YoutubeEmbed
            - SixthAlbum
                - YoutubeEmbed
            - SeventhAlbum
                - YoutubeEmbed
            - ArtistOutro
        - Discography
            - AlbumCard
            - AlbumInfo
        - TourSchedule
            -ConcertCard
        - Create
            - IdeaPost

