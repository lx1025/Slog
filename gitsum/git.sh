工作区 add to 版本库 commit to 暂存区

git commit -a -m 'update' 将所有修改放进暂存区,这个命令在涉及文件路径或者文件名改变的前提下格外有用

git diff 查看工作区与当前版本库的差别，commmit至版本库之后显示自然为空

git status 查看目前版本库与origin master的版本对比

git log 查看当前分支的版本日志

git reset --hard b52a8fbeb4300a30fc4157c6323bebce71a720b3 本地版本强制回退,不保存工作区
git reset --soft b52a8fbeb4300a30fc4157c6323bebce71a720b3 本地版本撤销, 保存工作区

合并冲突的最合理规则：
<<<head 表示远端版本
===分割冲突内容
>>>b52a8fbeb4300a30fc4157c6323bebce71a720b3 表示本地版本
先确定保留哪一步分，删除另一部分，删除三行提示

关于git stash
git stash 用于回退工作区,
1.初始化仓库，进行一次提交, 提交到暂存区:
git init xinghanggogogo
cd xinghanggogogo && echo 'hello'> readme
git add . && git commit -m "init"
2.修改工作区内容, 查看diff
echo 'need to be stashed' >> readme
git diff(看到差别)
3.使用stash命令, 保存当前工作区
git stash
git diff(显示没有差别)
4.恢复代码
git stash list
git stash apply stash@{0}
git stash clear 命令用于清空stash-list

关于分支操作, 假定当前在master分支
1.本地创建分支并推送至远端
git checkout -b test or git branch test //从master分支创建test分支，并切换至此
git branch -r //远端分支信息（此时远端还没有test分支）
git push origin test:test(将本地test分支推送到远端)
git branch -r (验证)
2.拉取远端分支至本地:
git fetch //将远端分支fetch到当前主机
git checkout -b test origin/test
或者:
git fetch origin master:test



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

关于fetch:
git fetch：相当于是从远程获取最新版本到本地，不会自动merge
git fetch orgin master:test
git diff test
git merge test

一次实例, 上线后发现代码有误:
服务器运行代码版本回退: make thunder_online commit=e9cbc24aedd0d458d78069902d0adb0eb0bdca05
服务器本地代码强制回退: git reset --hard e9cbc24aedd0d458d78069902d0adb0eb0bdca05

强制拉取, 覆盖本地版本:
git reset --hard
git pull

something
