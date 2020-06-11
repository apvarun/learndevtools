---
title: Copy Requests
description: Use DevTools to speedup your API testing
---

DevTools allow to copy the network requests as it is and allow you to test it independently, with or without the browser. In firefox, you can even edit and resend it directly.

Chrome allows to copy the request as a browser fetch API, Node fetch (with cookie) and cURL.

## Try

1. Open Network panel in Dev Tools
2. Click the button below to trigger an API request
3. Right-click on the new request in the network tab and choose `Copy => Copy as fetch`

Fetch API code for triggering the same request will be copied to your clipboard. Try pasting it in your console and running it.

{{< button class="trigger-api" >}}Trigger an API call{{< /button >}}

<script src="/assets/network/1-copy-requests.js"></script>
