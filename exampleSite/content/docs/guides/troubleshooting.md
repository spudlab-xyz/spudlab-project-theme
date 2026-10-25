---
title: Troubleshooting
description: Diagnose common installation, validation, and synchronisation issues.
weight: 20
---

## Command not found

Confirm that your package manager's global binary directory is on `PATH`, then open a new terminal and run `canopy --version`.

## Validation fails

Read the field name in the error and compare the value with the rules in `canopy.yaml`. Required values cannot be empty.

{{< callout type="warning" title="Preserve local records" >}}
Do not delete the `.canopy` directory while diagnosing synchronisation. It contains records that may not have reached the server yet.
{{< /callout >}}

## Still need help?

Capture the command output, operating system, and Canopy version before opening an issue. Remove sensitive field data from logs.
