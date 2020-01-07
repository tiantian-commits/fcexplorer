# fcexplorer
## 1. 将链上的数据导入到sqlite3数据库
## 2. 按日期浏览区块
### 2.1 显示区块简要信息列表
### 2.2 点击某个区块能够显示区块详细信息
## 3. 区块查找
### 3.1 按矿工ID或高度或区块hash进行查找
### 3.2 按method和to组合查找
## 4. 区块统计
### 4.1 每个矿工不同method的总数
    例如：
    矿工     method3   method4   method5
    t01475     21       16         19
    
    实现思路：
    a、 获取矿工列表
    b、 遍历列表和Method列表分别查询

### 4.2 每个method在哪个区块有最大值
     例如：
    method   最大值  区块高度   矿工
    method3    5       12764
    method4    8       12345
    method5    2       32123

### 4.3 每个矿工出块的总次数
    矿工    出块总数
    t01475    231
    t01203    191

## 5. 分析
### 5.1 出块分析
    统计每个区块的头部，能够选择某个矿工，得知他在一个时间段内出块的次数。如果有EPOST的更多参数可以显示，也一并显示出来。

### 5.2 矿工效率分析
    核心点是某个矿工在某个阶段提交的sector的数量。
    miner.method=2的时候是PreCommitSector，miner.method=3的时候是ProveCommitSector。每一个sector，需要先经过PreCommitSector，
    再经过ProveCommitSector，才能变成有效算力，然后再经过Fallback POST，把算力值更新。另外，ProveCommitSector占PreCommitSector的比值也很重要，因为有很多sector有PreCommitSector，但是因为各种原因，
    缺少ProveCommitSector，这样导致做了很多无用功。因此，可以把这个比值单独统计出来。
    我们能选择某个矿工，以及某个时间段，看他相关的消息，并显示出这段时间内消息数量的图形。通过这个功能，可以推测出这个矿工的挖矿效率以及综合实力。

### 5.3 稳定性分析
    miner.method=3的时候是DeclareFaults，通过统计这个消息，可以了解矿工出问题的次数，进一步评估他们的工程能力和运维水平。

### 5.4 排行榜
#### 5.4.1 矿工Power排行榜
#### 5.4.2 矿工FIL排行榜
    除了实时的排行榜，还可以统计某个时间段，power和fil增量的排行榜。
    Power的计算可以根据lotus的代码来查，把相关逻辑搬出来，统计证明的sector数目已经被标识成错误的sector数据。不过这样可能比较麻烦。
    也可以记录矿工的ID，通过命令实时查询，并把结果缓存下来。

## 6. 总结
    未来可能有更多的消息需要分析。只要能够针对某个矿工，一次性选择1到n个消息，列出这个时间段内的消息总数以及消息分布，	并显示相应的曲线，就非常有用了。Filecoin有miner、storagemarket、storagepower等不同的actor，每个actor都有不同的消息。
    每个区块的头部，也可以当成一个特殊的消息，因为可以了解出块效率。


