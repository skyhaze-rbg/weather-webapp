# Weather App Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Frontend Overview](#frontend-overview)
6. [API Endpoints](#api-endpoints)

## Introduction

The Weather App is a web application that allows users to search for weather information in different locations. Users can enter a location, such as a city name or zip code, and view the current weather conditions as well as the forecast for the next few days.

## Features

- Search for weather information by city name or zip code.
- View current weather conditions, including temperature, humidity, and weather description.
- Display a forecast for the next few days.
- User authentication for creating accounts and logging in.

## Technologies Used

- Frontend: React.js, Axios, CSS
- Deployment: Github

## Getting Started

- Clone the repository from GitHub: git clone https://github.com/skyhaze-rbg/weather-app.git
- Install dependencies 'npm install'
- Start the frontend server 'npm start'
- Open your web browser and visit http://localhost:3000 to access the Weather App.

## Frontend Overview

- The frontend of the Weather App is built using React.js. It includes components for the search bar, display area for weather information, and user authentication forms (login and sign-up). Styling is done using CSS.

## API Endpoints

- GET /weather: Retrieves weather data for a given location (city name or zip code).
