workflow "New workflow" {
  on = "push"
  resolves = ["run test"]
}

action "run test" {
  uses = "actions/npm@e7aaefe"
  runs = "test"
}
