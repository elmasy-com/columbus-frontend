---
title: "Lookup Endpint"
weight: 0
---

Returns the subdomains of the given domain in a JSON array or a newline delimetered string (to make scripting easier).

**Took only 0.5 second for this endpoint to return 739 subdomains for *tesla.com*.**

URL: `/api/lookup/{domain}`

The `domain` parameter must be a valid domain (eg.: `tesla.com`). 

The full documentation is can be found [here](https://columbus.elmasy.com/swagger/#/domain/get_api_lookup__domain_).

Example:

```bash
$ curl "https://columbus.elmasy.com/api/lookup/tesla.com"
["www", "mail", "shop", ...]

$ curl -H "Accept: text/plain" "https://columbus.elmasy.com/api/lookup/tesla.com"
www
mail
shop
...
```


