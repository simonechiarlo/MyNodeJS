import os
from time import sleep
while True:
    os.system('cmd /c  "curl https://nodejskey.herokuapp.com/ && echo("\n")"') #in pratica curl e echo sono normali comandi del cmd, chiamati da python
    os.system('cmd /c  ""')
    

