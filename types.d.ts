type Project = {
  name: string
  completed: boolean
  designCredit: {
    name: string
    link: string
  }
  link: string
  cover: string
  styles?: { [name: string]: string }
}
