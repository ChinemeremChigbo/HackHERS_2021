# HackHERS_2021

## Inspiration
While society condones blatant discrimination, it is far more complacent in dealing with microaggressions if not being outright dismissive about it. From remarks like "you run like a girl" to jokes like "get some rest and go do what girls do - gossip," we often find ourselves having to put up with this unacceptable behaviour. With amplify, we want to create a platform for people to share their stories and feel validated via the community.

## What it does
Our web application has two key features related to amplifying the voices of women in the workplace as well as in our communities. The first features, maps, anonymously displays the stories of injustice on a map of the world. The idea of the feature is to show the prevalence of harassment and discrimination and show hotspots for harassment. It is also a platform for women and minorities to share their struggles and raise awareness about the issues they face. The second main feature of our application is GlassCeiling, a database where users can learn about companies track records with respect to diversity and equity by reading user reviews. Users can post their own reviews about companies based on their experiences. By aggregating data about employer diversity and inclusivity, potential employees will be able to make informed decisions and work at places where they are less likely to be discriminated against.

## How we built it
The design and layout of the website was created in Figma. These designs were used in conjunction with React and Material UI to create the front-end of the application. When creating the map feature, we used the React Leaflet library in conjunction with the React Leaflet Heatmaps to display the map and location markers as well as generate the heatmaps. Firebase was used to store the data for the backend and to host the site.

## Challenges we ran into
One of the biggest challenges we faced was smoothly integrating our Firebase database and Heatmaps with the React Leaflet map. The first problem that came up was Heatmaps was not compatible with the latest version of React Leaflet. After some research, we were able to use the previous version of React Leaflet to resolve this issue. Furthermore, it was difficult to render the location data in a timely manner on the Leaflet Map. By using Firebase real time database, we were able to update location data only as new locations were added, minimizing unnecessary rerenders. By overcoming this challenge, we were able to display the location based stories of injustice that would otherwise go unheard.

## Accomplishments that we're proud of
Leaflet and heatmap
Integrating our React frontend with Firebase Realtime Database
What we learned
Over the course of Amplify we learned how to:
Go from a wonderful Figma design to a beautiful UI design in REACT
Connect the Leaflet API and create a heatmap layer
What's next for Amplify
We'd love to work on/add the following to get Amplify really up and running:

Fully integrating it into a mobile application allowing SMS messages if you enter a harassment hotspot
Improve Rendering so that the map can handle more reviews
Develop algorithm to rank/rate companies based on diversity and inclusivity
