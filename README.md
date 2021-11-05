# Web Scraping Examples

It's a simple tutorial for webscraping made with node and python in a pratic way. 

I brought some basic stuffs, but you can do so much more, like log in on websites, 
navigate through nested iframes, send your collected info to your email or telegram, 
the sky is the limit for this!

I left some comments to guide you through the code like a tutorial would do, 
you can remove them later, but it's important to read them.

## Getting started

First of all make sure to download the project if you want to, by click on the button Code then Download ZIP option,
or you can git clone the project using this:

```
  git clone https://github.com/gustavonikov/webscraping-example.git
```

### Web scraping with Node.js

I used **Puppeteer** to webscrap with node, its a really coool lib, that you cand find more here: [Puppeteer](https://pptr.dev/).

To get started, you need to enter in the folder "node" and follow these next steps.

If you have npm or yarn installed in your computer you can start by typing the command,
```
npm install
# or
yarn add
```
to download the packages need for the project to work.

After its finished, type `npm start`, to run the script and start your webscraping. Gl :)

<br>

###  Web scraping with Python

I used **Selenium** to webscrap with python, and as puppetter is also a pretty cool lib,
you can know more accessing their website: [Selenium](https://selenium-python.readthedocs.io/).

To get started, you need to enter in the folder "python" and follow these next steps.

You need to have "pip" package installed on your computer, then create a python virtual environment,
if you don't know how to do it, you can follow this doc from python: 
[Python guide](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

After create the virtual environment and activate it, you need to install the packages that are
in requirements.txt, using this command:
```
pip install -r requirements.txt
```

After install correctly these packages, you are good to go, just run, 
if you use windows:
```
py init.py
```
or for Unix/macOS:
```
python init.py
```

