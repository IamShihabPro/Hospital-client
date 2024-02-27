const doctors = [
    {
      "id": 1,
      "name": "Dr. Mohammed Rahman",
      "specialty": "Cardiology",
      "hospital": "Chittagong Medical College Hospital",
      "location": "Dhaka",
      "experience_years": 18,
      "photo": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1709013602~exp=1709017202~hmac=b7f12e601f2ec239b1a1133c632fda3d6da63c5fa5d519582a1fdeabebc211f6&w=996",
      "rating": 4.9,
      "reviews": 212,
    },
    {
      "id": 2,
      "name": "Dr. Farhana Ahmed",
      "specialty": "Pediatrics",
      "hospital": "Chittagong Medical College Hospital",
      "location": "Dhaka",
      "experience_years": 15,
      "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1709013676~exp=1709017276~hmac=9675a78d9e46fefafc206f31aeb3a280afb6f0992e9773556d803f7bc521a794&w=1060",
      "rating": 4.8,
      "reviews": 212,
    },
    {
      "id": 3,
      "name": "Dr. Ali Khan",
      "specialty": "Orthopedics",
      "hospital": "Chittagong Medical College Hospital",
      "location": "Dhaka",
      "experience_years": 20,
      "photo": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1709013602~exp=1709017202~hmac=b7f12e601f2ec239b1a1133c632fda3d6da63c5fa5d519582a1fdeabebc211f6&w=996",
      "rating": 4.7,
      "reviews": 212,
    },
    {
      "id": 4,
      "name": "Dr. Tasnim Akhtar",
      "specialty": "Dermatology",
      "hospital": "Chittagong Medical College Hospital",
      "location": "Dhaka",
      "experience_years": 12,
      "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1709013676~exp=1709017276~hmac=9675a78d9e46fefafc206f31aeb3a280afb6f0992e9773556d803f7bc521a794&w=1060",
      "rating": 4.6,
      "reviews": 212,
    },
    {
        "id": 5,
        "name": "Dr. Fatima Khan",
        "specialty": "Obstetrics and Gynecology",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 16,
        "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1709013676~exp=1709017276~hmac=9675a78d9e46fefafc206f31aeb3a280afb6f0992e9773556d803f7bc521a794&w=1060",
        "rating": 4.7,
        "reviews": 212,
      },
      {
        "id": 6,
        "name": "Dr. Abdul Haque",
        "specialty": "Neurology",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 21,
        "photo": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1709013602~exp=1709017202~hmac=b7f12e601f2ec239b1a1133c632fda3d6da63c5fa5d519582a1fdeabebc211f6&w=996",
        "rating": 4.9,
        "reviews": 212,
      },
      {
        "id": 7,
        "name": "Dr. Ayesha Chowdhury",
        "specialty": "Oncology",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 14,
        "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1709013676~exp=1709017276~hmac=9675a78d9e46fefafc206f31aeb3a280afb6f0992e9773556d803f7bc521a794&w=1060",
        "rating": 4.8,
        "reviews": 212,
      },
      {
        "id": 8,
        "name": "Dr. Mustafa Kamal",
        "specialty": "General Surgery",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 19,
        "photo": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1709013602~exp=1709017202~hmac=b7f12e601f2ec239b1a1133c632fda3d6da63c5fa5d519582a1fdeabebc211f6&w=996",
        "rating": 4.6,
        "reviews": 212,
      },
      {
        "id": 9,
        "name": "Dr. Nazneen Ahmed",
        "specialty": "Internal Medicine",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 13,
        "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1709013676~exp=1709017276~hmac=9675a78d9e46fefafc206f31aeb3a280afb6f0992e9773556d803f7bc521a794&w=1060",
        "rating": 4.5,
        "reviews": 212,
      },
      {
        "id": 10,
        "name": "Dr. Ahmed Rahman",
        "specialty": "Endocrinology",
        "hospital": "Chittagong Medical College Hospital",
        "location": "Dhaka",
        "experience_years": 17,
        "photo": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1709013602~exp=1709017202~hmac=b7f12e601f2ec239b1a1133c632fda3d6da63c5fa5d519582a1fdeabebc211f6&w=996",
        "rating": 4.8,
        "reviews": 212,
      }
  ]

  export default doctors;
  