const touristSpots = {
    Mumbai: [
        "Gateway of India",
        "Marine Drive",
        "Juhu Beach",
        "Chhatrapati Shivaji Maharaj Terminus",
        "Elephanta Caves",
        "Siddhivinayak Temple",
        "Haji Ali Dargah"
    ],
    Delhi: [
        "India Gate",
        "Qutub Minar",
        "Red Fort",
        "Lotus Temple",
        "Humayun's Tomb",
        "Raj Ghat",
        "Akshardham Temple"
    ],
    Bangalore: [
        "Cubbon Park",
        "Lalbagh Botanical Garden",
        "Bangalore Palace",
        "Vidhana Soudha",
        "Tipu Sultan's Summer Palace",
        "Nandi Hills",
        "Ulsoor Lake"
    ],
    Jaipur: [
        "Hawa Mahal",
        "Amber Fort",
        "Jal Mahal",
        "City Palace",
        "Jantar Mantar",
        "Nahargarh Fort",
        "Jaigarh Fort"
    ],
    Kolkata: [
        "Victoria Memorial",
        "Howrah Bridge",
        "Dakshineswar Kali Temple",
        "Eden Gardens",
        "Indian Museum",
        "Marble Palace",
        "Kalighat Temple"
    ],
    Chennai: [
        "Marina Beach",
        "Fort St. George",
        "Kapaleeshwarar Temple",
        "Government Museum",
        "Santhome Cathedral",
        "Vandalur Zoo",
        "Elliot's Beach"
    ],
    Hyderabad: [
        "Charminar",
        "Golconda Fort",
        "Ramoji Film City",
        "Hussain Sagar Lake",
        "Qutub Shahi Tombs",
        "Salar Jung Museum",
        "Birla Mandir"
    ],
    Pune: [
        "Shaniwarwada",
        "Aga Khan Palace",
        "Sinhagad Fort",
        "Osho Ashram",
        "Raja Dinkar Kelkar Museum",
        "Pataleshwar Cave Temple",
        "Khadakwasla Dam"
    ],
    Ahmedabad: [
        "Sabarmati Ashram",
        "Kankaria Lake",
        "Sidi Saiyyed Mosque",
        "Jama Masjid",
        "Ahmed Shah's Mosque",
        "Calico Museum of Textiles",
        "Law Garden"
    ],
    Varanasi: [
        "Kashi Vishwanath Temple",
        "Sarnath",
        "Dashashwamedh Ghat",
        "Ramnagar Fort",
        "Manikarnika Ghat",
        "Assi Ghat",
        "Bharat Mata Temple"
    ]
};

const hotels = {
    Mumbai: [
        { name: "Hotel Taj Mahal", reviews: "4.5 Stars" },
        { name: "The Oberoi", reviews: "4.7 Stars" },
        { name: "Trident", reviews: "4.6 Stars" },
        { name: "The Leela", reviews: "4.8 Stars" },
        { name: "ITC Maratha", reviews: "4.6 Stars" },
        { name: "Grand Hyatt", reviews: "4.5 Stars" },
        { name: "Hyatt Regency", reviews: "4.4 Stars" }
    ],
    Delhi: [
        { name: "The Lalit", reviews: "4.5 Stars" },
        { name: "ITC Maurya", reviews: "4.7 Stars" },
        { name: "Taj Palace", reviews: "4.8 Stars" },
        { name: "The Oberoi", reviews: "4.6 Stars" },
        { name: "Le Meridien", reviews: "4.4 Stars" },
        { name: "Shangri-La", reviews: "4.5 Stars" },
        { name: "Radisson Blu", reviews: "4.4 Stars" }
    ],
    Bangalore: [
        { name: "The Oberoi", reviews: "4.6 Stars" },
        { name: "Taj West End", reviews: "4.7 Stars" },
        { name: "ITC Gardenia", reviews: "4.8 Stars" },
        { name: "The Leela Palace", reviews: "4.7 Stars" },
        { name: "Radisson Blu", reviews: "4.5 Stars" },
        { name: "Sheraton Grand", reviews: "4.6 Stars" },
        { name: "Hyatt Centric", reviews: "4.4 Stars" }
    ],
    Jaipur: [
        { name: "The Oberoi Rajvilas", reviews: "4.8 Stars" },
        { name: "Taj Jai Mahal Palace", reviews: "4.7 Stars" },
        { name: "ITC Rajputana", reviews: "4.6 Stars" },
        { name: "Le Meridien", reviews: "4.5 Stars" },
        { name: "Radisson Blu", reviews: "4.4 Stars" },
        { name: "Trident", reviews: "4.6 Stars" },
        { name: "Holiday Inn", reviews: "4.3 Stars" }
    ],
    Kolkata: [
        { name: "The Oberoi Grand", reviews: "4.8 Stars" },
        { name: "Taj Bengal", reviews: "4.7 Stars" },
        { name: "ITC Sonar", reviews: "4.6 Stars" },
        { name: "Hyatt Regency", reviews: "4.5 Stars" },
        { name: "Radisson Blu", reviews: "4.4 Stars" },
        { name: "The Park", reviews: "4.5 Stars" },
        { name: "Swissotel", reviews: "4.3 Stars" }
    ],
    Chennai: [
        { name: "Taj Coromandel", reviews: "4.7 Stars" },
        { name: "The Leela Palace", reviews: "4.8 Stars" },
        { name: "ITC Grand Chola", reviews: "4.6 Stars" },
        { name: "Radisson Blu", reviews: "4.5 Stars" },
        { name: "Hyatt Regency", reviews: "4.4 Stars" },
        { name: "Sheraton Grand", reviews: "4.6 Stars" },
        { name: "Hotel Savera", reviews: "4.3 Stars" }
    ],
    Hyderabad: [
        { name: "The Park", reviews: "4.6 Stars" },
        { name: "ITC Kohenur", reviews: "4.8 Stars" },
        { name: "Taj Deccan", reviews: "4.7 Stars" },
        { name: "Sheraton Hyderabad", reviews: "4.5 Stars" },
        { name: "Hyatt Hyderabad", reviews: "4.4 Stars" },
        { name: "Radisson Blu", reviews: "4.6 Stars" },
        { name: "Trident", reviews: "4.5 Stars" }
    ],
    Pune: [
        { name: "The Westin", reviews: "4.7 Stars" },
        { name: "Hyatt Pune", reviews: "4.6 Stars" },
        { name: "Sheraton Grand", reviews: "4.5 Stars" },
        { name: "Radisson Blu", reviews: "4.4 Stars" },
        { name: "Hotel Taj Blue Diamond", reviews: "4.5 Stars" },
        { name: "Le Meridien", reviews: "4.6 Stars" },
        { name: "DoubleTree by Hilton", reviews: "4.3 Stars" }
    ],
    Ahmedabad: [
        { name: "The House of MG", reviews: "4.6 Stars" },
        { name: "Hyatt Regency", reviews: "4.7 Stars" },
        { name: "Radisson Blu", reviews: "4.5 Stars" },
        { name: "Courtyard by Marriott", reviews: "4.4 Stars" },
        { name: "Hotel Taj Skyline", reviews: "4.6 Stars" },
        { name: "The Leela", reviews: "4.8 Stars" },
        { name: "Fortune Landmark", reviews: "4.5 Stars" }
    ],
    Varanasi: [
        { name: "Hotel Taj Ganges", reviews: "4.7 Stars" },
        { name: "Ramada Plaza", reviews: "4.6 Stars" },
        { name: "BrijRama Palace", reviews: "4.8 Stars" },
        { name: "The Amaya", reviews: "4.5 Stars" },
        { name: "Shiva Ganges View", reviews: "4.4 Stars" },
        { name: "Hotel Alka", reviews: "4.3 Stars" },
        { name: "Hotel Heritage", reviews: "4.6 Stars" }
    ]
};

function showTouristPlaces() {
    const city = document.getElementById("cityDropdown").value;
    const placesList = document.getElementById("placesList");
    const touristPlacesSection = document.getElementById("touristPlaces");
    const hotelSelectionSection = document.getElementById("hotelSelection");
    const bookingSection = document.getElementById("bookingSection");
    const confirmationSection = document.getElementById("confirmation");
    
    if (city) {
        // Show tourist places
        placesList.innerHTML = touristSpots[city].map(place => `<li>${place}</li>`).join('');
        touristPlacesSection.classList.remove("hidden");
        hotelSelectionSection.classList.add("hidden");
        bookingSection.classList.add("hidden");
        confirmationSection.classList.add("hidden");
    } else {
        placesList.innerHTML = '';
        touristPlacesSection.classList.add("hidden");
        hotelSelectionSection.classList.add("hidden");
        bookingSection.classList.add("hidden");
        confirmationSection.classList.add("hidden");
    }
}

function showHotels() {
    const city = document.getElementById("cityDropdown").value;
    const hotelDropdown = document.getElementById("hotelDropdown");
    const hotelSelectionSection = document.getElementById("hotelSelection");
    const bookingSection = document.getElementById("bookingSection");
    const confirmationSection = document.getElementById("confirmation");

    if (city) {
        // Show hotels
        hotelDropdown.innerHTML = hotels[city].map(hotel => `<option value="${hotel.name}">${hotel.name} - ${hotel.reviews}</option>`).join('');
        hotelSelectionSection.classList.remove("hidden");
        bookingSection.classList.add("hidden");
        confirmationSection.classList.add("hidden");
    } else {
        hotelDropdown.innerHTML = '';
        hotelSelectionSection.classList.add("hidden");
        bookingSection.classList.add("hidden");
        confirmationSection.classList.add("hidden");
    }
}

function showBookingSection() {
    const hotelSelectionSection = document.getElementById("hotelSelection");
    const bookingSection = document.getElementById("bookingSection");
    const confirmationSection = document.getElementById("confirmation");

    if (document.getElementById("hotelDropdown").value) {
        hotelSelectionSection.classList.add("hidden");
        bookingSection.classList.remove("hidden");
        confirmationSection.classList.add("hidden");
    }
}

function bookHotel() {
    const hotel = document.getElementById("hotelDropdown").value;
    const checkin = document.getElementById("checkinDate").value;
    const checkout = document.getElementById("checkoutDate").value;
    const confirmationSection = document.getElementById("confirmation");

    if (hotel && checkin && checkout) {
        // Display booking confirmation
        document.getElementById("confirmationMessage").innerText = `The hotel ${hotel} in ${document.getElementById("cityDropdown").value} booked from ${checkin} to ${checkout}. Enjoy your stay!`;
        confirmationSection.classList.remove("hidden");
    } else {
        alert("Please fill in all booking details.");
    }
}

