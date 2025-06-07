from django.apps import AppConfig
from .celery import app as celery_app

__all__ = ['celery_app']

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    def ready(self):
        import core.mongo_settings


