---
title: Configuration
description: Understand project settings, fields, defaults, and validation rules.
weight: 10
---

## Configuration file

Canopy reads `canopy.yaml` from the current project directory. Keep this file in version control so every contributor uses the same schema.

```yaml
project: woodland-survey
fields:
  species:
    type: text
    required: true
  count:
    type: integer
    minimum: 1
```

## Fields

Each field has a type and may define validation. Prefer stable field names because they become column names in exported data.

## Team defaults

Defaults reduce repetitive entry, but contributors can override them for unusual observations. Document why a default exists next to the setting.
