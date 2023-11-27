resource "digitalocean_ssh_key" "do_ssh_key" {
    name = "TF SSH Key"
    public_key = file(var.public_key)
}

resource "digitalocean_project" "personal_websites" {
    name = "Personal Websites"
    resources = [
        digitalocean_droplet.cyndaquil.urn,
        digitalocean_domain.srosendahl_com.urn
    ]
}

resource "digitalocean_droplet" "cyndaquil" {
    image = "ubuntu-20-04-x64"
    name = "cyndaquil"
    region = "nyc3"
    size = "s-1vcpu-1gb"

    ssh_keys = [
        digitalocean_ssh_key.do_ssh_key.fingerprint
    ]
}