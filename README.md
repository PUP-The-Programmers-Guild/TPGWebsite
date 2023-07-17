## TPG Website
===========

###  Architecture

This project is built using these libraries/softwares:

- [Django](https://www.djangoproject.com/) (4.2.3) as the backend web framework
- [Django Rest Framework](https://www.django-rest-framework.org/) (3.14.0) as the API framework

### Structure

Important folders/file in this project:

- `frontend/` : Anything related to the frontend should be found here
- `backend/` : The Django project (backend) folder
- `backend/core` : The backend core app, do not touch unless you know what you're doing
- `backend/apiv1/` : The code for API v1 lives here, everything from views, serializers, to urls

### Setting up your local environment

#### Clone this repo

```
git clone git@github.com:PUP-The-Programmers-Guild/TPGWebsite.git
cd TPGWebsite
```

#### For backend

Start a virtual environment for your dependencies using venv
```
python -m venv ./venv/
# activate your virtual environment
./venv/Scripts/activate
```

You know you've done it when you see `(venv)` on your terminal
Cd into backend and get the server set up

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

If no errors come up, server should be running at localhost


If a new Django model is created or a Django model is modified
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

#### API Endpoints

- `/admin/` : Django admin url
- `/api/v1/blogposts/` : Endpoints involving blogpost objects, check `urls/blogposts.py`
- `/api/v1/accounts/` : Endpoints involving account objects, check `urls/accounts.py`

#### TODO
- Develop frontend
- Develop backend more
- Expand API endpoints

#### Contribution Guidelines (Backend)
- Do commit migration files
- Don't commit sqlite3 files
- Don't touch `core/` unless you know what you're doing
- Don't touch `manage.py` unless you know what you're doing
- Checkout a branch for your changes
- `git checkout -b feature-yourname` and make a pull request
