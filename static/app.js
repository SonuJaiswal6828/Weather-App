/**
 * Weather App JavaScript - Sonu Jaiswal
 * File: static/app.js
 */

// ----------------------------------------------
// 🌍 City Database 
// ----------------------------------------------
const cityDatabase = {
    // 🇮🇳 INDIA
    'IN': [
        'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 
        'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
        'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam', 'Patna',
        'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
        'Ranchi', 'Guwahati', 'Chandigarh', 'Mysore', 'Varanasi',
    ],
    
    // 🇺🇸 USA
    'US': [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
        'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte'
    ],
    
    // 🇬🇧 UK
    'GB': [
        'London', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol',
        'Oxford', 'Cambridge', 'Edinburgh', 'Glasgow', 'Cardiff',
        'Leeds', 'Sheffield', 'Bradford', 'Belfast', 'Newcastle'
    ],
    
    // 🇯🇵 Japan
    'JP': [
        'Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya',
        'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Saitama',
        'Hiroshima', 'Sendai', 'Chiba', 'Kitakyushu', 'Naha'
    ],
    
    // 🇦🇺 Australia
    'AU': [
        'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
        'Canberra', 'Gold Coast', 'Hobart', 'Darwin', 'Cairns',
        'Newcastle', 'Wollongong', 'Geelong', 'Townsville', 'Ballarat'
    ],
    
    // 🇨🇦 Canada
    'CA': [
        'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa',
        'Edmonton', 'Quebec City', 'Winnipeg', 'Hamilton', 'Halifax',
        'London', 'Victoria', 'Saskatoon', 'Regina', 'St. Johns'
    ],
    
    // 🇩🇪 Germany
    'DE': [
        'Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne',
        'Stuttgart', 'Düsseldorf', 'Dresden', 'Leipzig', 'Bremen',
        'Hannover', 'Nuremberg', 'Essen', 'Dortmund', 'Bonn'
    ],
    
    // 🇫🇷 France
    'FR': [
        'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice',
        'Nantes', 'Strasbourg', 'Bordeaux', 'Lille', 'Montpellier',
        'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon'
    ],
    
    // 🇧🇷 Brazil
    'BR': [
        'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza',
        'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre',
        'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís'
    ],
    
    // 🇿🇦 South Africa
    'ZA': [
        'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth',
        'Bloemfontein', 'Nelspruit', 'Kimberley', 'Polokwane', 'East London',
        'Pietermaritzburg', 'Rustenburg', 'Vereeniging', 'George', 'Upington'
    ],
    
    // 🇦🇪 UAE
    'AE': [
        'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman',
        'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Dibba', 'Khor Fakkan'
    ],
    
    // 🇸🇬 Singapore
    'SG': [
        'Singapore', 'Jurong East', 'Tampines', 'Woodlands', 'Bedok',
        'Clementi', 'Pasir Ris', 'Yishun', 'Ang Mo Kio', 'Bukit Panjang'
    ],
    
    // 🇲🇾 Malaysia
    'MY': [
        'Kuala Lumpur', 'Penang', 'Johor Bahru', 'Ipoh', 'Malacca',
        'Kuching', 'Kota Kinabalu', 'Shah Alam', 'Petaling Jaya', 'Selayang'
    ],
    
    // 🇮🇩 Indonesia
    'ID': [
        'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang',
        'Makassar', 'Palembang', 'Denpasar', 'Yogyakarta', 'Malang'
    ],
    
    // 🇹🇭 Thailand
    'TH': [
        'Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya', 'Hat Yai',
        'Nakhon Ratchasima', 'Udon Thani', 'Khon Kaen', 'Cha-am', 'Hua Hin'
    ],
    
    // 🇻🇳 Vietnam
    'VN': [
        'Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong', 'Nha Trang',
        'Can Tho', 'Hue', 'Da Lat', 'Quy Nhon', 'Vung Tau'
    ],
    
    // 🇰🇷 South Korea
    'KR': [
        'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon',
        'Gwangju', 'Suwon', 'Ulsan', 'Jeju', 'Pohang'
    ],
    
    // 🇨🇳 China
    'CN': [
        'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu',
        'Hangzhou', 'Wuhan', 'Xi\'an', 'Nanjing', 'Chongqing'
    ],
    
    // 🇷🇺 Russia
    'RU': [
        'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan',
        'Sochi', 'Vladivostok', 'Kaliningrad', 'Nizhny Novgorod', 'Samara'
    ],
    
    // 🇮🇹 Italy
    'IT': [
        'Rome', 'Milan', 'Venice', 'Florence', 'Naples',
        'Turin', 'Bologna', 'Palermo', 'Genoa', 'Verona'
    ],
    
    // 🇪🇸 Spain
    'ES': [
        'Madrid', 'Barcelona', 'Valencia', 'Seville', 'Malaga',
        'Bilbao', 'Granada', 'Palma', 'Alicante', 'Cordoba'
    ],
    
    // 🇲🇽 Mexico
    'MX': [
        'Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana',
        'Cancun', 'Merida', 'Acapulco', 'Leon', 'Queretaro'
    ],
    
    // 🇪🇬 Egypt
    'EG': [
        'Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan',
        'Sharm El Sheikh', 'Hurghada', 'Port Said', 'Suez', 'Ismailia'
    ],
    
    // 🇳🇬 Nigeria
    'NG': [
        'Lagos', 'Abuja', 'Kano', 'Ibadan', 'Benin City',
        'Port Harcourt', 'Kaduna', 'Enugu', 'Jos', 'Calabar'
    ]
};

// ----------------------------------------------
// 🎯 DOM Elements
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('citySelect');
    
    // ----------------------------------------------
    // 🔄 Country Change Event - City dropdown update
    // ----------------------------------------------
    function updateCityDropdown() {
        const selectedCountry = countrySelect.value;
        
        // Clear existing options
        citySelect.innerHTML = '';
        
        if (selectedCountry && cityDatabase[selectedCountry]) {
            // Enable city select
            citySelect.disabled = false;
            citySelect.classList.remove('bg-slate-100');
            citySelect.classList.add('bg-slate-50');
            
            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            defaultOption.textContent = 'Select City';
            citySelect.appendChild(defaultOption);
            
            // Add cities - SIRF CITY NAME, koi flag ya country prefix nahi
            cityDatabase[selectedCountry].forEach(city => {
                const option = document.createElement('option');
                option.value = city;  // City name as value
                option.textContent = city;  // Sirf city name dikhega
                citySelect.appendChild(option);
            });
            
        } else {
            // Disable city select if no country selected
            citySelect.disabled = true;
            citySelect.classList.add('bg-slate-100');
            citySelect.classList.remove('bg-slate-50');
            
            const option = document.createElement('option');
            option.value = '';
            option.disabled = true;
            option.selected = true;
            option.textContent = 'First select country';
            citySelect.appendChild(option);
        }
    }
    
    // Add event listener
    if (countrySelect) {
        countrySelect.addEventListener('change', updateCityDropdown);
    }
    
    // Form validation - prevent submission if no city selected
    const weatherForm = document.getElementById('weatherForm');
    if (weatherForm) {
        weatherForm.addEventListener('submit', function(e) {
            const citySelect = document.getElementById('citySelect');
            if (!citySelect.value) {
                e.preventDefault();
                alert('Please select a city');
            }
        });
    }
});