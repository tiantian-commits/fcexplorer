# Generated by Django 2.1 on 2019-12-26 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('block', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blsmessages',
            name='block',
        ),
        migrations.AddField(
            model_name='block',
            name='pre',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='block',
            name='prove',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='block',
            name='slash',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='block',
            name='submit',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='block',
            name='to',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='BlsMessages',
        ),
    ]
