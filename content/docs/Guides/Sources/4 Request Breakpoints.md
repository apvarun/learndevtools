---
title: Request Breakpoints
description: Request Breakpoints allow to pause before making a rest API call
---

How many times have you wanted to stop before sending an API call or just try to understand where the API call is initiated and the context at the time? This is a very common need when working with sites that have many API requests.

Luckily, the devtools have a way to debug it.

- In sources panel, there is a section named `XHR/fetch breakpoints`
- Adding URL(s) to this section will pause the execution before a call to those added urls are invoked

PS: URLs doesn't need to be of full length. A part of the URL will also be matched.

## Try

1. Open sources tab in devtools
2. In the right pane, find `XHR/fetch breakpoints` section below breakpoints section
3. Add the URL `demo` to it using the `+` icon
4. Click on the button below initiate an XHR request to the above URL
6. Refresh the page and try again to ensure the overrides are saved

{{< button class="triggerFetch" >}}Trigger XHR{{< /button >}}

<div class="container-demo"></div>

<script src="/resources/sources/4-request-breakpoints.js"></script>
