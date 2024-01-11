# Proof of concept
## Visually unifying the Doge webs

This proof of concept demonstrates one way to bring a few of the dogecoin websites together in a more visually uniform way with some consistent navigation and visual cues.

> Please note: This is throwaway code. The path to production would be to develop some parts as web components and other parts as Hugo template modifications.

After completing the setup procedure, you will be able to view the proof of concept by navigating to [https://local.dogecoin.com](https://local.dogecoin.com).

## Set up

**1) Add 3 hostfile entries**
```
echo "127.0.0.1	local.dogecoin.com local.dogecoin.org local.dogecoin.dev" | sudo tee -a /etc/hosts
```

**2) [Install Caddy](https://caddyserver.com/docs/install)** (a webserver tool)

*macos*
```
brew install caddy
```

*Linux (Debian, Ubuntu, Raspbian)*
```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

**3) Modify the Caddyfile**

The following section of the Caddyfile needs to be modified to use an absolute path to this directory.

Change `/Users/potato/dev/poc-dogenav` to wherever you have this project located (ie, `pwd`).

```
:7060 {
	root * /Users/potato/dev/poc-dogenav/
	file_server
}

:7070 {
	root * /Users/potato/dev/poc-dogenav/_org
	file_server
}

:7080 {
	root * /Users/potato/dev/poc-dogenav/_com
	file_server
}
```

## Run

```
caddy run
```

Finally, visit [https://local.dogecoin.com](https://local.dogecoin.com)




