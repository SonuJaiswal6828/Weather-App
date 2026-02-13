# 🌤️ Weather App

A modern and clean Flask-based Weather Application that provides real-time weather updates for cities worldwide. Integrated with WeatherAPI for accurate and reliable weather data.

## 🚀 Live Demo  
👉 https://weather-app-sonu.onrender.com

## ✨ Features
- Real-time Weather – Current temperature, condition, humidity, and wind speed  
- Smart Location Selector – Cascading dropdowns (Select country → then city)  
- Live API Data – City and country names fetched from WeatherAPI  
- Beautiful UI – Modern gradient design with smooth animations  
- Mobile Responsive – Works perfectly on all devices  

## 🛠️ Tech Stack
- Backend: Python (Flask)  
- Frontend: HTML5, Tailwind CSS, JavaScript  
- API: WeatherAPI.com  
- Icons: Font Awesome  
- Deployment: Render  

## 📦 Local Setup & Installation

### Install Dependencies

pip install flask requests python-dotenv

## Environment Configuration

## WEATHER_API_KEY=your_api_key_here
Run the App
python app.py
Open 👉 http://localhost:5000

### 📁 Project Structure
              
weather-app/                                       
├── app.py                            
├── .env                           
├── requirements.txt                          
├── templates/                                
│   └── index.html                          
└── static/                         
    └── app.js                                  

    
## 🎯 How to Use
Select a country

Select a city

Click Search Weather

Get real-time weather info

## 🗄️ API Response Example                                                       
                                     
{                        
  "location": { "name": "Rome", "country": "Italy" },                                         
  "current": {                                                   
    "temp_f": 50.5,                                      
    "condition": { "text": "Sunny" },                                       
    "humidity": 94,                              
    "wind_mph": 4.7                              
  }                                               
}
                                                 
##  🛡️ Security
API key stored in .env

Sensitive files not pushed to GitHub

Proper error handling


### ❤️ Developed by Sonu Jaiswal
⭐ Star this repo if you like it!


