git commit -a -m 'update' 将所有修改放进版本库,这个命令在涉及文件路径或者文件名改变的前提下格外有用
git diff 查看工作区与当前版本库的差别，commmit至版本库之后显示自然为空
git status 查看目前版本库与origin master的版本对比
git log 查看当前版本库日志

git reset --hard b52a8fbeb4300a30fc4157c6323bebce71a720b3 本地版本强制回退，不保存两次commit之间的更改
git reset --soft b52a8fbeb4300a30fc4157c6323bebce71a720b3 本地版本撤销，保留两次commit之间的更改，再次commit即可

合并冲突的最合理规则：
<<<head 表示远端版本
===分割冲突内容
>>>b52a8fbeb4300a30fc4157c6323bebce71a720b3 表示本地版本
先确定保留哪一步分，删除另一部分，删除三行提示

详解git stash 回退工作区：
初始化仓库，进行一次提交
git init stash-test
cd stash-test && echo 'hello'> readme
git add . && git commit -m "init"
更新工作区，查看diff
echo 'need to be stashed' >> readme

git add readme
git diff
diff --git a/readme b/readme
index ce01362..55d6c28 100644
--- a/readme
+++ b/readme
@@ -1 +1,2 @@
 hello
+need to be stashed
回退工作区, 暂存
git stash
显示已暂存列表
git stash list
stash@{0}: WIP on master: 440e976 init
工作区恢复
git stash pop --index stash@{0}


关于分支操作,假定当前在master分支
local：本地创建分支并推送至远端
git checkout -b test //从master分支创建test分支，并切换至此
或 git branch test //同样能创建分支
git branch -r //远端分支信息（此时远端还没有test分支）
git push origin test:test(将本地test分支推送到远端)
git branch -r (验证)
stage5166：获取远端test分支
git fetch //将远端分支fetch到当前主机
git checkout -b test origin/test

删除本地分支：git branch -d name
删除远端分支：git push origin :name

一个标准的git仓库的配置文件（首先需要添加公钥）
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@github.com:xinghanggogogo/Slog.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[user]
	name = xinghang
	email = xinghang@thunder.com.cn
