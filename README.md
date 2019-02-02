![](https://github.com/CBCRCHackathon2018/Registration-Slides/blob/master/01.jpg?raw=true)
CBC Radio Canada - Engaging Imagery
=======================

We create a profile to users based on their previous readdata and use it choose more engaging imagery for the Radio Canada content they will view.

This is the web app where users can enter their userId and receive Radio Canada content personalized to them :) 

This project was started with [hackathon starter](https://github.com/sahat/hackathon-starter)

![](https://github.com/CBCRCHackathon2018/Registration-Slides/blob/master/13.jpg?raw=true)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/sahat/hackathon-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

**Warning:** If you want to use some api that need https to work (for example pinterest or facebook),
you will need to download [ngrok](https://ngrok.com/).
You must start ngrok after starting the project.

```bash
# start ngrok to intercept the data exchanged on port 8080
./ngrok http 8080
```

Next, you must use the https url defined by ngrok, for example `https://hackaton.ngrok.io`

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.
