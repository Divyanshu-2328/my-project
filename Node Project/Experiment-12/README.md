Concurrent Seat Reservation API with Node.js

This project is a backend system for booking seats, built with Node.js and Express. It focuses on safely handling simultaneous requests by using a mutex to manage concurrency. A key feature is the temporary seat lock, which automatically expires after a set duration (defaulting to 60 seconds) if the booking isn't confirmed.

✨ Core Features

Temporary Seat Locking: Allows a user to reserve a seat for a brief window before finalizing the booking.

Automatic Lock Release: If a locked seat is not confirmed within the time limit, it automatically becomes available again.

Concurrency Safe: Utilizes a per-seat mutex lock to prevent race conditions and ensure no double bookings can occur.

RESTful Endpoints: Provides clear API endpoints to lock, confirm, release, and view the status of seats.

Custom Mutex: A simple KeyedMutex is implemented to serialize access to individual seat resources.

⚙️ How It Works

Seat Initialization
The server starts by creating an in-memory array of five seats (ID 1 through 5). Each seat object tracks its current status ('available', 'locked', 'booked'), a lockTimestamp for when a lock was placed, and a lockTimerId which holds the reference to its expiration timer.

The KeyedMutex Class
This class acts as a gatekeeper for each seat. It ensures that only one operation (like locking or confirming) can be performed on a specific seat at any given moment. When a request for a seat comes in, it must first acquire the mutex "key" for that seat's ID. This prevents multiple users from modifying the same seat simultaneously.

Lock Expiration Handling
A dedicated function, isLockExpired, checks if a seat's lock has surpassed the 60-second timeout. This logic is used throughout the API to clean up stale locks before processing new requests.

API Endpoint Logic

GET /seats: Iterates through all seats, checks for and clears any expired locks, and then returns a complete list of the current status of every seat.

POST /lock/:id: Acquires a mutex for the seat. It then checks if the seat is available. If so, it changes the status to 'locked', records the timestamp, and initiates a 60-second timer. If the timer completes without confirmation, the seat is automatically made 'available' again.

POST /confirm/:id: Also acquires the mutex. It verifies that the seat is currently locked by the user and that the lock has not expired. If everything is valid, it cancels the expiration timer and updates the seat's status to 'booked'.

POST /release/:id: Allows a user to manually cancel their lock. It acquires the mutex, clears the expiration timer, and resets the seat's status to 'available'.

🚀 Setup and Execution

Install dependencies:
npm install express

Start the server:
node server.js

The API will be live at the following address:
http://localhost:3000

Endpoints Guide

Get Status of All Seats
Retrieves the current state of every seat in the system.

Endpoint: GET /seats

Example Response:
{
"1": { "status": "available" },
"2": { "status": "booked" },
"3": { "status": "locked" },
"4": { "status": "available (lock expired)" },
"5": { "status": "available" }
}

Lock a Seat
Temporarily reserves a seat for 60 seconds.

Endpoint: POST /lock/:id

Example Response:
{
"message": "Seat 1 locked successfully. Confirm within 60 seconds."
}

Confirm a Booking
Permanently books a seat that has been successfully locked.

Endpoint: POST /confirm/:id

Example Response:
{
"message": "Seat 1 booked successfully!"
}

Manually Release a Seat
Cancels a temporary lock before it expires.

Endpoint: POST /release/:id

Example Response:
{
"message": "Seat 1 released"
}

📸 Demonstration Screenshots

Initial Seat Status
[Image: all seats available]

Locking Seat #5
[Image: locking a seat]

Confirming Seat #5
[Image: confirming a seat booking]

Error: Confirming a Seat Without a Lock
[Image: an error message]

Final Seat Status After Booking
[Image: updated seat status list]

Postman Request History
[Image: Postman request history]

💻 Technologies Used

Node.js

Express.js

JavaScript (ES6+)

🧠 Learning Summary

This project provided practical experience in several key areas of backend development:

Managing application state directly in memory.

Implementing a keyed mutex from scratch to handle concurrent requests safely and prevent race conditions.

Designing a robust seat reservation workflow with temporary locking to avoid double bookings.

Using JavaScript timers (setTimeout/clearTimeout) to manage the lifecycle of temporary locks.

Building a clean REST API with Express that provides clear and useful responses for both success and error cases.

Simulating and testing high-concurrency scenarios using API clients like Postman.