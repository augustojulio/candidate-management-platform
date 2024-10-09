# Candidate Management Platform

A simple platform to manage candidates in a recruitment process, built with Django (Backend) and React (Frontend).

## Features

- Manage candidates, clients, jobs, and recruiters.
- Update candidate statuses and associate them with jobs.
- JWT-based authentication.
- Search and filter candidates in the frontend.
- A dashboard displaying metrics: open jobs, active candidates, disqualified candidates, hired candidates.

---

## Project Structure

- **Backend**: Django with Django Rest Framework.
- **Frontend**: ReactJS.
- **Database**: PostgreSQL.
- **Testing**: Unittest for unit tests.
- **Docker**: Docker setup for containerization.

  candidate-management-platform/

  |
  ├──backend/
  │
  ├── Dockerfile
  ├── docker-compose.yml
  ├── pyproject.toml
  ├── poetry.lock
  ├── manage.py
  ├── backend/
  │   ├── __init__.py
  │   ├── settings.py
  │   ├── urls.py
  │   └── wsgi.py
  └── candidates/
  |    ├── __init__.py
  |    ├── models.py
  |    ├── views.py
  |    ├── serializers.py
  └──└── tests.py

  ├──frontend/
  |

  ├── package.json

  ├── public/
  ├── src/
  │   ├── App.js
  │   ├── components/
  │   │   ├── CandidateList.js
  │   │   ├── CandidateDetail.js
  │   │   └── Dashboard.js
  │   ├── services/
  │   │   └── api.js
  └── └── index.js

---

## Prerequisites

- Docker and Docker Compose installed.
- Node.js and npm installed (for frontend development).

---

## Backend Setup

### Steps to run the backend locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:augustojulio/candidate-management-platform.git
   cd candidate-management-platform/backend
   ```
2. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```
3. Run migrations:

   ```bash
   docker-compose exec web python manage.py makemigrations candidates
   docker-compose exec web python manage.py migrate
   ```
4. Create a superuser for the admin panel:

   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```
5. Access the API at `http://localhost:8000`.

---

## Frontend Setup

### Steps to run the frontend locally:

1. Navigate to the frontend folder:

   ```bash
   cd candidate-management-platform/frontend
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm start
   ```
4. The frontend will be available at `http://localhost:3000`.

---

## Testing

To run the unit tests for the backend:

1. Execute the following command:
   ```bash
   docker-compose exec web python manage.py test
   ```

---

## API Documentation with Swagger

The API endpoints for the CRUD operations are documented using **Swagger** for easy access and interaction. After running the backend, you can access the API documentation at:

`http://localhost:8000/swagger/`

This will display all available routes (such as candidate CRUD, job CRUD, etc.) with an interactive UI to test them directly from the browser.

Execute /token/ with your Django user (username and password created in the section: Backend Setup - 4)

Get the "access" value

In the Authorize botton in the top of the page, paste it in this format (you need to write the word Bearer in front of it):

Bearer <your_access_token_value>

After authorizing the API, you need to create a Client, then a Job, then a Recruiter and finally a Candidate.

Remember that when creating a Job, Swagger will give the example json:

`{
"title": "string",
"description": "string",
"salary": "string",
"client": 0
}`

Check your client_id, as it will start at 1 and not 0.

## Key Decisions

- **Django Rest Framework** was chosen for its simplicity in creating APIs with Django.
- **React** was chosen for its flexibility and capability to build dynamic user interfaces.
- **JWT** for secure authentication.
- **SOLID Principles** and **Design Patterns** were applied to ensure the backend's scalability and maintainability.
- Unit tests were added with **unittest** to ensure the correctness of models and API endpoints.

---

## Next Steps

- Improve frontend design and user experience.
- Add pagination and more advanced filtering options.
- Enhance the dashboard with more metrics and visual representations.
