# Backend for TPG WEBSITE

This is the backend for the TPG website, built using the FastAPI framework in Python.

## Create python virtual environment

1. Create a venv
```bash
uv venv or python venv .venv
```

2. Activate .venv
```bash
source .venv/Scripts/activate
```

3. Deactivate
```bash
deactivate
```

## Installation and Running the Server

1. Install Dependencies

```bash
uv pip install -r requirements.txt or pip install -r requirements.txt
```

2. Run the server

```bash
python startserver.py
```

3. To visit the docs endpoint

append to the url "docs"
example: http://localhost:{port}/docs

## Folder Structure

The backend for the TPG website follows the following folder structure:

1. `src` - Contains all the files for the app.
2. `cors` - Cors configuration.
3. `database` - Database connection.
4. `models` - Models.
5. `routers` - API endpoints.
6. `services` - Modules.
7. `utils` - Utility functions.
