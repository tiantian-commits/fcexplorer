# Generated by Django 2.1 on 2019-12-26 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('block', '0002_auto_20191226_0812'),
    ]

    operations = [
        migrations.RenameField(
            model_name='block',
            old_name='pre',
            new_name='method',
        ),
        migrations.RemoveField(
            model_name='block',
            name='prove',
        ),
        migrations.RemoveField(
            model_name='block',
            name='slash',
        ),
        migrations.RemoveField(
            model_name='block',
            name='submit',
        ),
    ]
