# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## PEDAC Analysis

### Problem
- input = string of some length in the range (0, ?)
- output = 1 of 2 kinds of JSON objects
    - if input string is a valid date, return an object with 
        - a `unix` property set to a Unix timestamp of the input date in milliseconds of type Number
        - a `utc` property set a string of the input date in the format of 
            - `DayOfWeek, DD MonthAbbreviation YYYY HH:MM:SS GMT` type string
    - else if the input string is empty, return an object with
        - a `unix` property set to a Unix timestamp of the current date in milliseconds of type Number
        - a `utc` property set a string of the current date in the format of 
            - `DayOfWeek, DD MonthAbbreviation YYYY HH:MM:SS GMT` type string
    - else return an object with an `error` property set to `Invalid Date` 

### Examples
- empty input
- valid number input in format of Unix timestamp in milliseconds
- valid string input in format of `DayOfWeek, DD MonthAbbreviation YYYY HH:MM:SS GMT` type string