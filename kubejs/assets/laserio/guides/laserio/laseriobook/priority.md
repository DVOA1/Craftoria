---
navigation:
  title: "Priority"
  icon: "laserio:textures/gui/buttons/modeinserter.png"
  position: 3
  parent: laserio:mechanics.md
---

# Priority

Priority is only available on Inserter Mode.

Priority allows you to control the order upon which inserter cards are operated. By default, Inserter cards operate on a 'nearest first' mode, which means that extractors attempt to insert into the nearest inventory first.

By changing an Inserter Card's priority setting, you can adjust which inventory should be inserted into first. The highest priority inserter will be the first on the list, for example: Priority 10 is higher than 0, which is higher than -10. 

If multiple inventories have the same priority they will be 'Nearest First'.

Left click on this value to increase it by 1. Right click to decrease it. Holding shift will multiply the change amount by 10, while holding control will multiply the change amount by 64.

These can be combined, meaning holding shift+ctrl will multiply by 640.

For example, shift right click will decrement by 10.

