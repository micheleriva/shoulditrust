const blacklist = [
  {
    name: "emergingthreats.net",
    url:  "http://rules.emergingthreats.net/blockrules/compromised-ips.txt"
  },
  {
    name: "blocklist.de",
    url:  "http://www.blocklist.de/lists/bruteforcelogin.txt"
  },
  {
    name: "nothink.org/malware_http",
    url:  "http://www.nothink.org/blacklist/blacklist_malware_http.txt"
  },
  {
    name: "nothink.org/ssh_all",
    url: "http://www.nothink.org/blacklist/blacklist_ssh_all.txt"
  },
  {
    name: "antispam.imp.ch",
    url: "http://antispam.imp.ch/spamlist"
  },
  {
    name: "dshield.org",
    url: "http://www.dshield.org/ipsascii.html?limit=10000"
  },
  {
    name: "malc0de.com",
    url: "http://malc0de.com/bl/IP_Blacklist.txt"
  },
  {
    name: "hosts-file.net",
    url: "http://hosts-file.net/rss.asp"
  }
]

module.exports = blacklist