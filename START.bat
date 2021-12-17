@echo off
heroku ps:scale bot=0 & cls & heroku ps:scale bot=1 & cls & heroku logs -t