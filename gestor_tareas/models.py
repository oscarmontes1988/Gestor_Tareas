# from django.db import models

# # Create your models here.
# class Task(models.Model):
#     title = models.CharField(max_length=200)
#     description = models.TextField(blank=True)
#     done = models.BooleanField(default=False)

#     def __str__(self):
#         return str(self.id) 

from django.db import models

class Task(models.Model):
    CATEGORY_CHOICES = [
        ('urgente_importante', 'Urgente e Importante'),
        ('urgente_no_importante', 'Urgente y No Importante'),
        ('no_urgente_importante', 'No Urgente, pero Importante'),
        ('no_urgente_no_importante', 'No Urgente y No Importante'),
    ]
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    due_date = models.DateField(null=True, blank=True)
    priority = models.CharField(max_length=10, choices=[('baja', 'Baja'), ('media', 'Media'), ('alta', 'Alta')], default='baja')
    status = models.CharField(max_length=15, choices=[('pendiente', 'Pendiente'), ('en progreso', 'En Progreso'), ('completada', 'Completada')], default='pendiente')
    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES,
        default='no_urgente_importante'
    )
    def __str__(self): 
        return self.title # returns the title of the task

