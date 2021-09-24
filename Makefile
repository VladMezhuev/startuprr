start:
	# Clean orphan images
	docker system prune
	# Run container
	docker-compose up --build

createsuperuser:
	docker-compose run --rm backend python manage.py createsuperuser

backend:
	docker-compose run -p 8535:8000 --rm backend

frontend:
	docker-compose run --rm frontend

frontend_run:
	docker-compose run --rm frontend bash -c "$(cmd)"

backend_manage:
	docker-compose run --rm backend bash -c "python manage.py $(cmd)"

backend_run:
	docker-compose run --rm backend bash -c "$(cmd)"

clean_all_dockers:
	docker system prune
	docker system prune -a
