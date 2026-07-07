# assets/references/

Read-only clones of **other** repos (chiefly the fairyfox.io hub) live here, pulled on
demand when checking the fairyfox system for updates. They are **git-ignored** —
everything under this folder except this README is excluded (see `.gitignore`) and must
**never** be committed: committing a clone nests repos and bloats history.

Pulling a reference never produces a commit, so it can't trigger anything downstream.
See `notes/reference/cross-project-sync.md`.
