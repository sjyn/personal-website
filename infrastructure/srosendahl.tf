resource "digitalocean_domain" "srosendahl_com" {
    name = "srosendahl.com"
    ip_address = digitalocean_droplet.cyndaquil.ipv4_address
}

resource "digitalocean_record" "srosendahl_www" {
    domain = digitalocean_domain.srosendahl_com.id
    type = "A"
    name = "www"
    value = digitalocean_droplet.cyndaquil.ipv4_address
    ttl = 3600
}
