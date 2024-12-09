<!-- This sequence diagrams depicts for the creation of new notes on page https://studies.cs.helsinki.fi/exampleapp/notes-->
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server ->>browser: HTML Document
    deactivate browser

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server ->>browser: CSS Document 
    deactivate browser

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server ->>browser: JS Document 
    deactivate browser
    

``` 


