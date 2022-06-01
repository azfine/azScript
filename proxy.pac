function FindProxyForURL(url, host) {
     if (isInNet(host, "198.168.3.0", "255.255.0.0"))
     {
         return "DIRECT";
     }
    if (dnsDomainIs(host, ".google.com") 
        || dnsDomainIs(host, ".content.googleapis.com") 
        || dnsDomainIs(host, ".googleusercontent.com") 
        || dnsDomainIs(host, ".ggpht.com") 
        || dnsDomainIs(host, ".youtube.com") 
        || dnsDomainIs(host, ".wikipedia.org") 
        || dnsDomainIs(host, ".wikimedia.org") 
        || dnsDomainIs(host, ".twitter.org") 
        || dnsDomainIs(host, ".githubusercontent.com") 
        || dnsDomainIs(host, "paofu.cloud") 
        || dnsDomainIs(host, ".paofu.cloud")
        || dnsDomainIs(host, ".github.com") 
        || dnsDomainIs(host, ".github.io") 
        || dnsDomainIs(host, ".v2ex.com") 
        || dnsDomainIs(host, ".evernote.com") 
        || dnsDomainIs(host, ".jianguoyun.com")
        || dnsDomainIs(host, ".inoreader.com")
        || dnsDomainIs(host, ".javdb.com")
        || dnsDomainIs(host, ".forestry.io")
       ) {

        return "SOCKS5 router.kikera.top:7893";
    }
    return "DIRECT";
}
