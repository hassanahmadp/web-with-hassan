type Project = {
  name: string
  completed: boolean
  featured: boolean
  designCredit: {
    name: string
    link: string
  }
  link: string
  repo?: string
  cover: string
  styles?: { [name: string]: string }
}
