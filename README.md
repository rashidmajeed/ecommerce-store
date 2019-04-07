# Ecommerce Store

This project is an ecommerce store where admin can manage the users and products. Users can by buy products. Payment methods are also implemented. workflow is equipped with modern tools. Docker is used to run node, mongodb, react in containers. nginx is for proxy to backend api and client side routes. This project is demonstration of fully modern workflow of fullstack application. It is integrated with the github and Travis CI using .travis.yml setup and build production ready images and perform continuous integration and push images to AWS Elastic Beanstalk environment for continuous deployment.

## Run this dockerized Ecommerce Store

Make sure docker installed on a computer
clone project folder and enter into it.
File `docker-compose.yml` is built in a way that creating images of client, server and mongodb images.

## Build and run command

`Build: docker-compose.yml` `Run: docker-compose.yml`

All the containers will be run and user can browse running app at
http://localhost:3000
