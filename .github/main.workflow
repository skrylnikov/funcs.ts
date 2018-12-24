workflow "New workflow" {
  on = "push"
  resolves = ["Build"]
}

action "Test" {
  uses = "actions/npm@e7aaefe"
  runs = "test"
}

action "Build" {
  uses = "actions/npm@e7aaefe"
  needs = ["Test"]
  runs = "build"
}
