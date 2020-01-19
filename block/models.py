from django.db import models
from django.utils import timezone

class Miner(models.Model):
    id      = models.CharField(primary_key=True, max_length=28)
    power   = models.IntegerField(default=0)
    percent = models.IntegerField(default=0)

class Block(models.Model):
    miner         = models.CharField(max_length=100)
    parent_weight = models.IntegerField(default=-1)
    height        = models.IntegerField(default=-1)
    hash          = models.CharField(unique=True, max_length=100)
    timestamp     = models.IntegerField(verbose_name="更新时间戳", default=timezone.now)

class Ticket(models.Model):
    block     = models.ForeignKey(Block, on_delete=models.CASCADE)
    vrf_proof = models.CharField(max_length=100)

class EPostProof(models.Model):
    block    = models.ForeignKey(Block, on_delete=models.CASCADE)
    proof    = models.CharField(max_length=100)
    postrand = models.CharField(max_length=100)

class Candidate(models.Model):
    epost_proof     = models.ForeignKey(EPostProof, on_delete=models.CASCADE)
    partial         = models.CharField(max_length=100)
    sector_id       = models.IntegerField(default=-1)
    challenge_index = models.IntegerField(default=-1)
    parent_weight   = models.IntegerField(default=-1)

class Parent(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    slash = models.CharField(max_length=100)

class ParentStateRoot(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    slash = models.CharField(max_length=100)

class ParentMessageReceipt(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    slash = models.CharField(max_length=100)

class Message(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    slash = models.CharField(max_length=100)

class BLSAggregate(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    type  = models.CharField(max_length=50)
    data  = models.CharField(max_length=100)

class BlockSig(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    type  = models.CharField(max_length=50)
    data  = models.CharField(max_length=128)

class BlsMessage(models.Model):
    block = models.ForeignKey(Block, on_delete=models.CASCADE)
    to    = models.CharField(max_length=100)
    _from = models.CharField(max_length=100)
    nonce = models.IntegerField(default=-1)
    value = models.CharField(max_length=52)
    gas_price  = models.IntegerField(default=-1)
    gas_limit  = models.IntegerField(default=-1)
    method     = models.IntegerField(default=-1)

