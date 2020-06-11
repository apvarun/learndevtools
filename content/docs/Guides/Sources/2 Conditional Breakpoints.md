---
title: Conditional Breakpoints
description: Conditional Breakpoints allow to break at a particular line only if a specific condition is evaluated to be true.
---

These allows to break at a particular line only if a specific condition is evaluated to be true.

The condition can include any variable in code that is available at that particular line. Even the variables inside the closures can be accessed in the condition evaluation.

## Try

1. Open Sources tab with file `2-conditional-breakpoint.js`
2. Right-click on the line number and add a conditional breakpoint inside `dataProcessor()` function
3. Add condition `index > 3` in debugger window
4. Click on the button to trigger a loop. Note that the breakpoint starts hitting only after 1.5 seconds once the value of `index` is 3 or more

{{< button class="process" >}}Start/Restart Processing{{< /button >}}

<div class="error hide">
{{< hint danger >}}
  Array Index Out Of Bound
{{< /hint >}}
</div>

<script src="/assets/sources/2-conditional-breakpoint.js"></script>

## Preview

{{< youtube l6PKY-l6wys >}}
