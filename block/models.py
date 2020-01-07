from django.db import models

from django.utils import timezone

class Block(models.Model):
    height      = models.IntegerField(default=-1)
    hash        = models.CharField(max_length=100)
    miner       = models.CharField(max_length=100)
    timestamp   = models.IntegerField(verbose_name="更新时间戳", default=timezone.now)

class Ticket(models.Model):
    block  = models.ForeignKey(Block, on_delete=models.CASCADE)
    vrf_proof = models.CharField(max_length=100)

class EPostProof(models.Model):
    block  = models.ForeignKey(Block, on_delete=models.CASCADE)
    proof = models.CharField(max_length=100)
    postrand = models.CharField(max_length=100)

class BlsMessage(models.Model):
    block      = models.ForeignKey(Block, on_delete=models.CASCADE)
    to         = models.CharField(max_length=100)
    _from      = models.CharField(max_length=100)
    nonce      = models.IntegerField(default=-1)
    value      = models.IntegerField(default=-1)
    gas_price  = models.IntegerField(default=-1)
    gas_limit  = models.IntegerField(default=-1)
    method     = models.IntegerField(default=-1)

