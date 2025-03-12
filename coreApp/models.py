from django.db import models

CAR_BRAND_CHOICES = [
    ('Ford', 'Ford'),
    ('Toyota', 'Toyota'),
    ('Honda', 'Honda'),
    ('BMW', 'BMW'),
    ('Mercedes', 'Mercedes'),
]

class CarDetails(models.Model):
    carname = models.CharField(max_length=300, choices=CAR_BRAND_CHOICES)
    carmodel = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.carname} {self.carmodel} ({self.year})"
