# Make sure you made a `chmod +x ./shortcuts.sh`
# Then run `source ./shortcuts.sh` and use the shortcuts

# When a branch has been merged, checkout master, pull and delete the branch
function merged() {
  branchName="$(git rev-parse --abbrev-ref HEAD)"
  git checkout master
  git pull
  git branch -d $branchName
}

# Push to upstream of the same branchname
function push() {
  branchName="$(git rev-parse --abbrev-ref HEAD)"
  git push --set-upstream origin $branchName
}

# Commit
function c() {
  npm run commit
}

# Commit everything
function ca() {
  git add .
  c
}

# Commit everything and push
function cap() {
  ca
  push
}
