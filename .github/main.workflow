workflow "Run Test" {
  on = "push"
  resolves = ["Test"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "ci"
}

action "Test" {
  uses = "actions/npm@e7aaefe"
  runs = "test"
  needs = ["Install dependencies"]
}
