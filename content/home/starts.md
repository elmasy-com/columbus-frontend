---
title: "Starts Endpoint"
weight: 1
---

Returns a list of all known Second Level Domains thats start with the given domain in a JSON array or a newline delimetered string.

**This endpoint returns 1809 domains that starts with *"reddit"* in less than 4 seconds.**

URL: `/api/starts/{domain}`

The `domain` parameter must be at least five character long, valid Second Level Domain (eg.: `example`). 

Read the documentation [here](https://columbus.elmasy.com/swagger/#/domain/get_api_starts__domain_).

Example:

```bash
$ curl "https://columbus.elmasy.com/api/starts/reddit"
["reddit", "redditmedia", "redditstatistic", ...]

$ curl -H "Accept: text/plain" "https://columbus.elmasy.com/api/starts/reddit"
reddit
redditmedia
redditstatistic
...
```