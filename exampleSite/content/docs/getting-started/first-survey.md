---
title: Create your first survey
description: Initialise a survey, add an observation, and inspect the result.
weight: 20
---

## Create a project

Make an empty directory and initialise it:

```sh
mkdir woodland-survey
cd woodland-survey
canopy init
```

The generated `canopy.yaml` file contains your project name and observation fields.

## Record an observation

Use the interactive capture command:

```sh
canopy add
```

Canopy validates the answers locally before writing the record.

## Review your data

Run `canopy list` to review collected observations. You can export them later as CSV or JSON.
