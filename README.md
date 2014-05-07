apollo-desktop
==============

Apollo desktop is a restful client that uses atom-shell.

Install
-------

Install atom-shell:

```
mkdir -p ~/bin/atom-shell
cd ~/bin/atom-shell
wget https://github.com/atom/atom-shell/releases/download/v0.12.2/atom-shell-v0.12.2-linux.zip
unzip atom-shell-v0.12.2-linux.zip
mv atom atom-shell
echo "export PATH=$HOME/bin/atom-shell:$PATH" >> ~/.bashrc
source ~/.bashrc
```

Clone the source code:

```
mkdir -p ~/devel
cd ~/devel
git clone https://github.com/wiliamsouza/apollo-desktop.git
cd apollo-desktop
apm install .
node_modules/bower/bin/bower init
atom-shell .
```

`apm` is a atom editor tool.
