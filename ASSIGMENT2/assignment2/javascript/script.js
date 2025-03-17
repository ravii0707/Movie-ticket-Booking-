document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  const movieSection = document.getElementById("movieSection");
  const seatModal = document.getElementById("seatModal");
  const paymentModal = document.getElementById("paymentModal");
  const confirmationModal = document.getElementById("confirmationModal");
  const closeButtons = document.querySelectorAll(".close");

  // Current user and booking data
  let currentUser = null;
  let selectedMovie = null;
  let selectedSeats = [];
  let ticketPrice = {
    adult: 300,
    child: 200,
  };

  // Modal Control Functions
  function openModal(modal) {
    modal.style.display = "block";
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }

  // Close modals when clicking outside
  window.onclick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target);
    }
  };

  // Close buttons functionality
  closeButtons.forEach((button) => {
    button.onclick = () => {
      closeModal(button.closest(".modal"));
    };
  });

  // Login Form Handler
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // In real application, it would be verified using  BE-tech
    if (localStorage.getItem(email)) {
      const userData = JSON.parse(localStorage.getItem(email));
      if (userData.password === password) {
        currentUser = userData;
        closeModal(loginModal);
        showMovies();
        updateNavigation();
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("User not found");
    }
  });

  // Registration Form Handler
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const mobile = document.getElementById("regMobile").value;
    const dob = document.getElementById("regDob").value;
    const password = document.getElementById("regPassword").value;

    const age = calculateAge(dob);
    const userData = { name, email, mobile, dob, password, age };

    localStorage.setItem(email, JSON.stringify(userData));  // stringify converts a JavaScript object into a JSON-formatted string.
    alert("Registration successful! Please login.");
    closeModal(registerModal);
    openModal(loginModal);
  });

  // Age Calculator
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  // Showimg Movies Based on Age
  function showMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
    movieSection.style.display = "block";

    moviesData.forEach((movie) => {
      if (currentUser.age >= movie.ageRestriction) {
        const movieCard = createMovieCard(movie);
        movieList.appendChild(movieCard);
      }
    });
  }

  // Create Movie Card
  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";

    // Determine text color based on movie genre
    let titleColor = "#ffffff"; // default white
    let titleStyle = "";

    if (movie.genre.includes("Animation")) {
      titleColor = "#FFD700"; // golden for animation
      titleStyle = "text-shadow: 2px 2px 4px rgba(0,0,0,0.7)";
    } else if (movie.genre.includes("Action")) {
      titleColor = "#ff4444"; // red for action
      titleStyle = "text-shadow: 2px 2px 4px rgba(0,0,0,0.7)";
    } else if (movie.genre.includes("Drama")) {
      titleColor = "#00ffff"; // cyan for drama
      titleStyle = "text-shadow: 2px 2px 4px rgba(0,0,0,0.7)";
    } else if (movie.genre.includes("Sci-Fi")) {
      titleColor = "#00ff99"; // neon green for sci-fi
      titleStyle = "text-shadow: 0 0 10px rgba(0,255,153,0.5)";
    }

    card.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.posterUrl}" alt="${movie.name}">
                <div class="age-restriction">${movie.ageRestriction}+</div>
            </div>
            <div class="movie-details">
                <h3 class="movie-title" style="color: ${titleColor}; font-size: 1.5rem; margin: 10px 0; ${titleStyle}; font-weight: bold;">${movie.name}</h3>
                <div class="movie-genre">${movie.genre}</div>
                <button class="book-now-btn">Book Now</button>
            </div>
        `;

    card.querySelector(".book-now-btn").onclick = () => {
      selectedMovie = movie;
      openModal(seatModal);
      initializeSeatSelection();
    };

    return card;
  }

  // Initialize Seat Selection
  function initializeSeatSelection() {
    const seatContainer = document.getElementById("seatContainer");
    seatContainer.innerHTML = "";

    // Creating 48 seats (6 row × 8 col)

    for (let i = 0; i < 48; i++) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.dataset.seatNumber = i + 1;

      seat.onclick = () => toggleSeat(seat);
      seatContainer.appendChild(seat);
    }
  }

  // Toggle Seat Selection
  function toggleSeat(seat) {
    seat.classList.toggle("selected");
    updateSelectedSeats();
  }

  // Update Selected Seats and Total Amount
  function updateSelectedSeats() {
    selectedSeats = Array.from(document.querySelectorAll(".seat.selected")).map(
      (seat) => seat.dataset.seatNumber
    );

    const totalAmount =
      selectedSeats.length *
      (currentUser.age < 18 ? ticketPrice.child : ticketPrice.adult);

    document.getElementById("selectedSeats").textContent =
      selectedSeats.join(", ");
    document.getElementById("totalAmount").textContent = totalAmount;
  }

  // Proceed to Payment Handler
  document.getElementById("proceedToPayment").onclick = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const bookingSummary = document.getElementById("bookingSummary");
    bookingSummary.innerHTML = `
            <p>Movie: ${selectedMovie.name}</p>
            <p>Seats: ${selectedSeats.join(", ")}</p>
            <p>Amount: ₹${
              document.getElementById("totalAmount").textContent
            }</p>
        `;

    closeModal(seatModal);
    openModal(paymentModal);
  };

  // Payment Form Handler
  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const ticketDetails = document.getElementById("ticketDetails");
    ticketDetails.innerHTML = `
            <p>Name: ${currentUser.name}</p>
            <p>Movie: ${selectedMovie.name}</p>
            <p>Seats: ${selectedSeats.join(", ")}</p>
            <p>Show Time: ${selectedMovie.showTime[0]}</p>
            <p>Amount Paid: ₹${
              document.getElementById("totalAmount").textContent
            }</p>
        `;

    closeModal(paymentModal);
    openModal(confirmationModal);
    resetBooking();
  });

  // Reset Booking Data
  function resetBooking() {
    selectedMovie = null;
    selectedSeats = [];
  }

  // Update Navigation After Login/Logout
  function updateNavigation() {
    if (currentUser) {
      loginBtn.textContent = "Logout";
      registerBtn.style.display = "none";
    } else {
      loginBtn.textContent = "Login";
      registerBtn.style.display = "block";
      movieSection.style.display = "none";
    }
  }

  // Event Listeners for Buttons
  loginBtn.onclick = () => {
    if (currentUser) {
      currentUser = null;
      updateNavigation();
    } else {
      openModal(loginModal);
    }
  };

  registerBtn.onclick = () => openModal(registerModal);

  document.getElementById("closeConfirmation").onclick = () => {
    closeModal(confirmationModal);
  };
});

// Update the openRegisterModal function
function openRegisterModal() {
  if (!currentUser) {
    // Check if user is already registered
    const email = localStorage.getItem("currentUserEmail");
    if (email) {
      openModal(loginModal);
    } else {
      openModal(registerModal);
    }
  }
}

// Update Registration Form Handler
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const mobile = document.getElementById("regMobile").value;
  const dob = document.getElementById("regDob").value;
  const password = document.getElementById("regPassword").value;

  const age = calculateAge(dob);
  const userData = { name, email, mobile, dob, password, age };

  localStorage.setItem(email, JSON.stringify(userData));
  localStorage.setItem("currentUserEmail", email); // Store email to track registration
  closeModal(registerModal);
  openModal(document.getElementById("contactModal"));
});

// Update Login Form Handler
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (localStorage.getItem(email)) {
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData.password === password) {
      currentUser = userData;
      closeModal(loginModal);
      showMovies();
      updateNavigation();
      // Store logged in state
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userEmail", email);
    } else {
      alert("Invalid credentials");
    }
  } else {
    alert("User not found");
  }
});

// Add check for logged-in state on page load
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is already logged in
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userEmail = sessionStorage.getItem("userEmail");

  if (isLoggedIn && userEmail) {
    currentUser = JSON.parse(localStorage.getItem(userEmail));
    showMovies();
    updateNavigation();
  }

  // ... restig of your DOMdata is loded ...
});

// Update logout handler
loginBtn.onclick = () => {
  if (currentUser) {
    currentUser = null;
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmail");
    updateNavigation();
    window.location.reload();
  } else {
    openModal(loginModal);
  }
};
