FROM python:3.9-alpine as builder
WORKDIR /app
COPY requirements.txt /app
RUN pip3 install --no-cache-dir -r requirements.txt

FROM builder as dev-envs
WORKDIR /src
COPY --from=builder /app /src
COPY . .
EXPOSE 9999
CMD ["python", "-u", "app.py"]