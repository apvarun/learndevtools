---
title: Detecting Element Changes
description: Chrome allows to listen to three specific events that occur to an element in the DOM tree from elements panel.
---

Elements panel, as you know, is the place where you can see the elements that are currently available in the DOM (Document Object Modal).

Chrome allows to listen to three specific events that occur to an element in the DOM tree.

- Add/Update of an attribute value
- Change in the element's children (subtree)
- Removal of node (child elements)

## Try

1. Open the Elements tab in Dev Tools
2. In the list of DOM nodes, select the node on which you need to add listener. In this case, add breakpoint to the `.container-demo` element to detect changes
3. Right-click on the selected node and choose `Break on` option and then the type of event you want to listen to.
4. Once selected, chrome will listen to changes to that particular element and stop JS execution at the line of code which modifies the selected node.
5. Click on the buttons below to trigger changes to the `.container-demo` element

Once the breakpoint is hit, you will get to see all the contextual information and memory snapshot, which can be used in identifying the issue source.

<div>
  {{< button class="changeTree" >}}Change Subtree{{< /button >}}
  {{< button class="changeAttr" >}}Update Attribute{{< /button >}}
  {{< button class="removeElt" >}}Remove Element{{< /button >}}
</div>

<!-- This is the container.  -->
<div class="container-demo"></div>

<script src="/assets/elements/2-detecting-element-updates.js"></script>

## Preview

{{< youtube WfWj3qzwJ1Y >}}
