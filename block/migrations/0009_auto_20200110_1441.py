# Generated by Django 2.2.9 on 2020-01-10 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('block', '0008_auto_20200108_0725'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blsmessage',
            name='value',
            field=models.CharField(max_length=52),
        ),
    ]
