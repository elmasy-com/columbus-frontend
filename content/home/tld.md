---
title: "TLD Endpoint"
weight: 2
---

Returns a list of all known Top Level Domains for the given domain.

**Took around 1 second for this endpoint to return 375 TLD for *google*.**

URL: `/api/tld/{domain}`

The domain parameter must be a valid Second Level Domain (eg.: example).

Learn more about this endpoint in the [documentation](https://columbus.elmasy.com/swagger/#/domain/get_api_tld__domain_).

Example:

```bash
$ curl "https://columbus.elmasy.com/api/tld/google"
["com", "hu", "co", ...]

$ curl -H "Accept: text/plain" "https://columbus.elmasy.com/api/tld/google"
com
hu
co
...
```