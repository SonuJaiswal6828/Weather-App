from flask import Flask, request, render_template
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("secret_key")

def weather_api(city):
    api_key = os.getenv("WEATHER_API_KEY", "6898dea16f18490bb9675838261302")
    url = f"https://api.weatherapi.com/v1/current.json?key={api_key}&q={city}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            # API se direct city aur country name le rahe hain
            weather = {
                'city': data['location']['name'],
                'country': data['location']['country'],
                'region': data['location'].get('region', ''),
                'full_location': f"{data['location']['name']}, {data['location']['country']}",
                'temperature': f"{data['current']['temp_f']}°F",
                'img': f"https:{data['current']['condition']['icon']}",
                'condition': data['current']['condition']['text'],
                'humidity': data['current']['humidity'],
                'wind_speed': data['current']['wind_mph'],
                'wind_direction': data['current']['wind_dir']
            }
            return weather
        else:
            return {'error': 'City not found!'}
    except Exception as e:
        return {'error': f'Something went wrong: {str(e)}'}

@app.route("/", methods=['GET', 'POST'])
def index():
    weather_data = None
    if request.method == 'POST':
        city = request.form.get('city')
        if city:
            weather_data = weather_api(city)
    
    return render_template('index.html', data=weather_data)

if __name__ == "__main__":
    app.run(debug=True)