# Use Python 3.12 slim base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir psycopg2-binary==2.9.9 \
    && pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV PORT=8080
ENV PYTHONUNBUFFERED=1

# Expose port (Koyeb prefers port 8080)
EXPOSE 8080

# Run the application
CMD gunicorn --bind 0.0.0.0:$PORT app:app --log-level debug