# Generated by Django 2.2.9 on 2020-01-19 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('block', '0009_auto_20200110_1441'),
    ]

    operations = [
        migrations.CreateModel(
            name='Miner',
            fields=[
                ('id', models.CharField(max_length=28, primary_key=True, serialize=False)),
                ('power', models.IntegerField(default=0)),
                ('percent', models.IntegerField(default=0)),
            ],
        ),
    ]