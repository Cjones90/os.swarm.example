### To Run

Dev & Production system require:  
**[<u>Docker</u>](https://docs.docker.com/engine/installation/)** (Engine & Compose) (v2+)  

Inside root project directory with `docker-compose.yml` run:  
`docker-compose up [-d]`  

Check `HOST` under `HOST:CONTAINER` in `docker-compose.yml` for port (default 5000).  

### Development  
1) Edit `docker-compose.yml` to suit your needs  
2) Inside directory with `docker-compose.yml` run:  
`docker-compose up [-d]`  
3) To run webpack inside the container, in another tab/pane run:  
`docker exec CONTAINER_NAME npm run watch`  

### Source
A link to this project to clone can be found on **[<u>Bitbucket</u>](https://bitbucket.org/JestrJ/swarm-example)**.  
A link to the pre-built docker container can be found on **[<u>DockerHub</u>](https://hub.docker.com/r/jestrr/swarm-example/)**.  


## This Project
This project is intended to show case docker's swarm mode and its internal load balancing.

When browsing to the page, a timer is set to send a request once a second to the server
to retrieve certain information.  

The server is programmed to respond to that request 2 seconds after receiving it.  

This is intended to build up a load on the server so when navigating to the same IP address,
the request will be routed to a different docker container participating in the swarm.