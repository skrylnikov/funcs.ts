workflow "New workflow" {
  on = "push"
  resolves = ["Build"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "ci"
}

action "Build" {
  uses = "actions/npm@e7aaefe"
  runs = "run build"
  needs = ["Install dependencies"]
}
