---
title: Content Overrides
description: Content Overrides are a way to test/execute changes without modifying source code.
---

Overrides are a way to test/execute changes without modifying source code. Overridden files are saved in a local folder and served from there for subsequent requests.

In order to use this,

- Select a folder on local machine for chrome to save the modified version of files
- Once chosen, edit any file and hit CMD/Ctrl + S to save the file to overrides folder

Once the file is saved, reload the page so that chrome can use the overridden file on page load. This can help you to modify and test code right in production before pushing out a fix.

## Try

1. Open sources tab in devtools
2. In the left pane, choose `Overrides` and select a folder to enable it
3. Navigate to `3-content-overrides.js` file
4. Modify the `Hello from JS` text that is being displayed on button click and save the file (Ctrl/Cmd + S)
5. Click on the button below to check whether your changes were applied
6. Refresh the page and try again to ensure the overrides are saved

{{< button class="updateDOM" >}}Print from JS{{< /button >}}

<div class="container-demo"></div>

<script src="/resources/sources/3-content-overrides.js"></script>

## Preview

{{< youtube yI-id_VukJk >}}