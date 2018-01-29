# coding: utf-8

# 基于比较的插入排序:
def inserSort(seq):
    for i in range(1, len(seq)):
        tmp = seq[i]
        for j in range(i, -1, -1):
            if seq[j-1] > tmp:
                seq[j] = seq[j-1]
            else:
                break
        seq[j] = tmp

if __name__ == '__main__':
    seq = [2, 1, 6, 5, 3, 0]
    inserSort(seq)
    print seq

# 基于交换的插入排序:
def insertSort(seq):
    for i in range(1, len(seq)):
        for j in range(i, 0, -1):
            if seq[j-1] > seq[j]:
                seq[j-1], seq[j] = seq[j], seq[j-1]
            else:
                break

if __name__ == '__main__':
    seq = [2, 3, 1, 5, 4, 0]
    insertSort(seq)
    print seq

# 选择排序:
def selectSort(seq):
    for i in range(len(seq)):
        mini = seq[i]
        for j in range(i+1, len(seq)):
            if seq[j] < mini:
                mini = seq[j]
        mini_index = seq.index(mini)
        seq[i], seq[mini_index] = seq[mini_index], seq[i]

if __name__ == '__main__':
    seq = [2, 3, -6, 1, 5, 4, 0]
    selectSort(seq)
    print seq

# 冒泡排序:
def bubbleSort(seq):
    for i in range(len(seq)-1):
        for j in range(len(seq)-1, i, -1):
            if seq[j] < seq[j-1]:
                seq[j], seq[j-1] = seq[j-1], seq[j]

if __name__ == '__main__':
    seq = [2, 3, -6, 1, 5, 4, 0]
    bubbleSort(seq)
    print seq

# 归并排序:
def mergeSort(seq):
    if len(seq) <= 1:
        return seq
    mid = len(seq) / 2
    left = mergeSort(seq[:mid])
    right = mergeSort(seq[mid:])
    seq = merge(left, right)
    return seq

def merge(left, right):
    i, j, res = 0, 0, []
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1
    if i == len(left): res += right[j:]
    if j == len(right): res += left[i:]
    return res

if __name__ == '__main__':
    seq = [2, 3, -6, 1, 5, 4, 0]
    seq = mergeSort(seq)
    print seq

# 快速排序:
def quickSort(seq):
    if len(seq) <= 1:
        return seq
    pivot = seq[0]
    left = quickSort([i for i in seq[1:] if i <= pivot])
    right = quickSort([i for i in seq[1:] if i > pivot])
    return left + [pivot] + right

if __name__ == '__main__':
    seq = [5, 6, 78, 9, 0, -1, 2, 3, -65, 12]
    l = quickSort(seq)
    print l

# 基础版本的快速排序:
def quickSort(seq, low, high):
    if low < high:
        pivot = partition(seq, low, high)
        quickSort(seq, low, pivot)
        quickSort(seq, pivot+1, high)

def partition(seq, low, high):
    tmp = seq[low]
    while low < high:
        while low < high and seq[high] >= tmp:
            high -= 1
        seq[low] = seq[high]
        while high > low and seq[low] <= tmp:
            low += 1
        seq[high] += seq[low]
    seq[low] = tmp
    return low

if __name__ == '__main__':
    seq = [2, 3, -6, 1, 5, 4, 0]
    quickSort(seq, 0, len(seq)-1)
    print seq

# 堆排序:
def fixDown(l, k, n):
    while k * 2 <= n:
        j = k * 2
        if j < n and l[j] < l[j+1]:
            l[j], l[j+1] = l[j+1], l[j]
        if l[k] < l[j]:
            l[k], l[j] = l[j], l[k]
            k = j
        else:
            break

def heapSort(l):
    n = len(l)-1
    for i in range(n//2, 0, -1):
        fixDown(l, i, n)
    while n > 1:
        l[1], l[n] = l[n], l[1]
        n -= 1
        fixDown(l, 1, n)

if __name__  == '__main__':
    l = [2, 3, -6, 1, 5, 4, 0]
    l = [-1] + l
    heapSort(l)
    print l[1:]

# 拓展:
# 100万个数字里求最大的五个数:
# 这是最优解法
import random

def fixDown(l, k, n):
    while k*2 <= n:
        j = k*2
        if j < n and l[j] < l[j+1]:
            j += 1
        if l[k] < l[j]:
            l[k], l[j] = l[j], l[k]
            k = j
        else:
            break

def heapSort(l):
    n = len(l) - 1
    for i in range(n//2, 0, -1):
        fixDown(l, i, n)

    res = []
    for limit in range(0, 5):
        l[1], l[n] = l[n], l[1]
        res.append(l[n])
        fixDown(l, 1, n-1)
        n -= 1
    return res

if __name__  == '__main__':
    l = random.sample(range(1, 100001), 1000)
    l = [-1] + l
    res = heapSort(l)
    print res

# 用两个栈来实现一个队列:
# bitdance面试:
class Queue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    def push(self, node):
        self.stack1.append(node)
    def pop(self):
        if not self.stack1:
            return None
        while self.stack1:
            self.stack2.append(self.stack1.pop())
        res = self.stack2.pop()
        while self.stack2:
            self.stack1.append(self.stack2.pop())
        return res
    def showme(self):
        print self.stack1

queue = Queue()
queue.push(1)
queue.showme()
queue.push(2)
queue.showme()
print queue.pop()
queue.showme()
print queue.pop()

# 实现LRU
# 基于普通dict和list实现, douban和bitdance面试题目
class Memory:

    def __init__(self, size):
        self.size = size
        self.cache = dict()
        self.keys = []

    def set(self, key, value):
        if self.cache.has_key(key):
            self.cache[key] = value
            self.keys.remove(key)
            self.keys.insert(0, key)
        elif len(self.keys) == self.size:
            old_key = self.keys.pop()
            self.cache.pop(old_key)
            self.keys.insert(0, key)
            self.cache[key] = value
        else:
            self.cache[key] = value
            self.keys.insert(0, key)

    def get(self, key):
        if not self.cache.has_key(key):
            return None
        value = self.cache.get(key)
        self.keys.insert(0, key)
        return value

if __name__ == '__main__':
    testMemory = Memory(3)
    testMemory.set('a', 1)
    testMemory.set('b', 2)
    testMemory.set('c', 3)
    testMemory.set('d', 2)
    print testMemory.get('a')

# 求两个有序数组前k大的数, 拓展求m个有序数组前k大的数
def search(l1, l2, n):

    res = []
    i, j = len(l1)-1, len(l2)-1

    while i > -1 and j > -1:
        if l1[i] > l2[j]:
            res.append(l1[i])
            i -= 1
        else:
            res.append(l2[j])
            j -= 1
        if len(res) == n:
            return res

    res = res + l2[:j+1] if i == -1 else res + l1[:i+1]
    return res[:6]


if __name__ == '__main__':
    n = 6
    l1 = [-3, 0, 1, 3, 4, 5, 7]
    l2 = [-2, 1, 3, 3, 5, 6, 9]
    l3 = [-2, 1, 3]
    res1 = search(l1, l2, n)
    res2 = search(l1, l3, n)
    print res1, res2

# 优化有序数组的二分查找:
# 递归解法.
# 这个写法真是错完了!
# 第一, 找到了无论如何都会返回0! 因为seq在变.
# 第二, 怎么能用seq(index)呢? 那你的查找还有什么意义?
def search(seq, key):

    mid = len(seq) // 2
    if seq[mid] == key:
        return seq.index(key)
    if not mid:
        return 'Not Found.'
    if seq[mid] < key:
        return search(seq[:mid], key)
    if seq[mid] > key:
        return search(seq[mid+1:], key)

if __name__ == '__main__':
    key1 = 4
    key2 = 3
    seq = [-1, 0 , 2, 4, 5 ,7, 9]
    print search(seq, key1)
    print search(seq, key2)

# 正确的递归写法:
def search(seq, key, low, high):
    while low <= high:
        mid = (low + high) // 2
        if seq[mid] == key:
            return mid
        if seq[mid] > key:
            return search(seq, key, low, mid-1)
        else:
            return search(seq, key, mid+1, high)
    return 'Not Found.'

# 一般解法
def search(l, key, low, high):
    while low <= high:
        mid = (low + high)//2
        if l[mid] == key:
            return l.index(key)
        if l[mid] > key:
            high = mid - 1
        else:
            low = mid + 1
    return 'NOT FOUND!'

if __name__ == '__main__':
    key = 4
    key1 = 5
    key2 = 9
    l = [-1, 0, 1, 2, 4, 6, 8]
    index = search(l, key, 0, len(l)-1)
    print index

# python实现二叉树的各种遍历和深度, 最短路径和最长路径:
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left 
        self.right = right 

def preTraverse(tree):
    if not tree:
        return None
    print tree.data
    preTraverse(tree.left)
    preTraverse(tree.right)

def midTraverse(tree):
    if not tree:
        return None
    midTraverse(tree.left)
    print tree.data
    midTraverse(tree.right)

def afterTraverse(tree):
    if not tree:
        return None
    afterTraverse(tree.left)
    afterTraverse(tree.right)
    print tree.data

def levelTraverse(tree):
    if not tree:
        return None
    stack = []
    stack.append(tree)
    while stack:
        current = stack.pop()
        print current.data
        if current.left:
            stack.append(current.left)
        if current.right:
            stack.append(current.right)

def deepTraverse(tree):
    if not tree:
        return None
    print tree.data 
    deepTraverse(tree.left)
    deepTraverse(tree.right)

def getDepth(tree):
    if not tree:
        return 0
    return max(getDepth(tree.left), getDepth(tree.right)) + 1

def getMinPath(tree):
    if not tree:
        return 0
    if tree.left and tree.right:
        return min(getMinPath(tree.left), getMinPath(tree.right)) + tree.data
    if tree.left:
        return getMinPath(tree.left) + tree.data
    if tree.right:
        return getMinPath(tree.right) + tree.data
    else:
        return tree.data

def getMaxPath(tree):
    if not tree:
        return 0
    if tree.left and tree.right:
        return max(getMaxPath(tree.left), getMaxPath(tree.right)) + tree.data
    if tree.left:
        return getMaxPath(tree.left) + tree.data
    if tree.right:
        return getMaxPath(tree.right) + tree.data
    else:
        return tree.data

if __name__ == '__main__':
    tree = Node(1, Node(3, Node(7, Node(0)), Node(6)), Node(2, Node(5), Node(4)))
    preTraverse(tree)
    midTraverse(tree)
    afterTraverse(tree)
    levelTraverse(tree)
    deepTraverse(tree)
    print getDepth(tree)
    print getMaxPath(tree)
    print getMinPath(tree)

# 经典的根据先序和中序遍历, 求解后序遍历:
preList = list('DBACEGF')
midList = list('ABCDEFG')
afterList = []

def findAfterLis(preList, midList, afterList):

    if len(preList) == 0:
        return

    if len(preList) == 1:
        afterList.append(preList[0])
        return

    root = preList[0]
    n = midList.index(root)
    findAfterLis(preList[1:n+1], midList[:n], afterList)
    findAfterLis(preList[n+1:], midList[n+1:], afterList)
    afterList.append(root)

findAfterLis(preList, midList, afterList)
print afterList

# 判断两个树是否相同
def isSameTree(p, q):
    if not p  and not q:
        return True
    elif p and q :
        return p.data == q.data and isSameTree(p.left,q.left) and isSameTree(p.right,q.right)
    else:
        return False

# 单链表逆置:
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
link = Node(1, Node(2, Node(3, Node(4, Node(5, Node(6, Node(7, Node(8, Node(9)))))))))

def rev(link):
    pre = link
    cur = link.next
    pre.next = None
    while cur:
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    return pre
 
root = rev(link)
while root:
    print root.data
    root = root.next

# 给定1到n, 按照字典序排序, 求第k大的数字:
# 更优秀的解法是与快速排序结合, 这是使用了插入排序
def lesser(a, b):
    a = list(str(a))
    b = list(str(b))
    i = 0

    while i < len(a) and i < len(b):
        if a[i] < b[i]:
            return True
        if a[i] > b[i]:
            return False
        i += 1

    if len(a) < len(b):
        return True
    else:
        return False

def dicSort(seq):
    for i in range(1, len(seq)):
        for j in range(i, 0, -1):
            if lesser(seq[j], seq[j-1]):
                seq[j], seq[j-1] = seq[j-1], seq[j]
    return seq

if __name__ == '__main__':
    seq = [2, 11, 202, 1, 0, 22, 3]
    seq = dicSort(seq)
    print seq

# 找出一个数组里有且仅有的两个相同的数字:
# 时间复杂度O(n), 空间复杂度O(n)
def findSame(l):

    target = dict()
    for i in range(len(l)):
        if target.get(l[i]):
            return l[i]
        target[l[i]] = 1

    return 'No Same'

if __name__ == '__main__':
    l = [7, 3, 4, 5, 2, 1, 2]
    k = findSame(l)
    print k

# python的OrderDict是如何实现O(1)的:
# 用另外一个字典保存位置信息
import collections
d=collections.OrderedDict()

# 输出1~n的全排列
# for 循环

# 有序数组去重
def delSame(seq):
    k = 1
    for i in range(1, len(seq)):
        if seq[i] != seq[i-1]:
            seq[k] = seq[i]
            k += 1
    return seq[:k]

if __name__ == '__main__':
     seq = [0, 1, 3, 3, 4, 5, 5, 5, 8, 9]
     print delSame(seq)

