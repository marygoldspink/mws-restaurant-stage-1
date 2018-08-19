# My Restaurant Review Implementation

This is my submission for the Restaurant Reviews project in the Udacity Web Developer nanodegree.

# To run this project 

In a terminal, check the version of Python you have: `python -V`. 

If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. 

If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

With your server running, visit the site: `http://localhost:8000`, and you'll see the app running.

# What I did

- I fixed up the layout to be responsive on desktop, tablet and mobile devices. On smaller devices we stack the map on top of the other parts of the page.
- I add alt tags to images, aria-labels and roles to different key elements in the page to make it more accesible to users
- I added a service worker to allow the page to work offline. The maps do not work offline because they come from Leaflet and I didn't see a way to make Leaflet work offline, but the rest of the content works offline.
