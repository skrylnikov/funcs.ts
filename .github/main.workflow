workflow "Run Test" {
  on = "push"
  resolves = ["Test"]
}

action "Install dependencies" {
  uses = "actions/npm@main"
  args = "ci"
}

action "Test" {
  uses = "actions/npm@main"
  runs = "test"
  needs = ["Install dependencies"]
}
