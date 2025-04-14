/** @type {Special.Item[]} */
const globalItemRemovals = [
  'megacells:mega_interface',
  'megacells:cable_mega_interface',
  'megacells:mega_pattern_provider',
  'megacells:cable_mega_pattern_provider',
  'megacells:mega_crafting_accelerator',
  'bigger_ae2:advanced_item_cell_housing',
  'bigger_ae2:quantum_item_storage_cell',
  'bigger_ae2:digital_singularity_item_storage_cell',
  'bigger_ae2:quantum_flux_storage_cell',
  'chisel:chisel',
  'ae2:spatial_anchor',
  'mekanism:upgrade_anchor',
  'mekanism:dimensional_stabilizer',
  'pneumaticcraft:chunkloader_upgrade',
  'industrialforegoing:infinity_nuke',
  'utilitarian:tiny_coal',
  'utilitarian:tiny_charcoal',
  'create:copycat_step',
  'create:copycat_panel',
  'mffs:anti_personnel_module',
  'mffs:confiscation_module',
];

const disabledItems = [];
ServerEvents.recipes((event) => {
  /** @type {Special.RecipeId[]} */

  const id = [
    'appflux:inscriber/crush_diamond',
    'appflux:inscriber/crush_emerald',
    'modern_industrialization:electric_age/machine/assembler/replicator',
    'mffs:steel_compound',
    'mffs:steel_ingot',
    'industrialforegoing:laser_drill_ore/raw_materials/iridium',
    'modern_industrialization:materials/uranium/blast_furnace/dust',
    'supplementaries:sus_gravel',
    'supplementaries:sus_sand',
  ];

  /** @type {Special.Item[]} */
  const output = [];

  id.forEach(id => {
    event.remove({ id: id });
  });

  output.forEach(output => {
    event.remove({ output: output });
  });

  globalItemRemovals.forEach(output => {
    event.remove({ output: output });
  });

  disabledItems.forEach((item) => {
    event.remove(item.id);
  });
});

/**
 * Disable item for better alternatives. Works the same way as globalItemRemovals.
 * @param {$Item_} item - Item to disable.
 * @param {String} alt - [OPTIONAL] Preferred alternative item name.
 */
const disableItem = (item, alt) => {
  if (disabledItems.some((disabled) => disabled.id === item)) {
    console.warn(`Item ${item} is already disabled.`);
    return;
  }
  if (alt) disabledItems.push({ id: item, alt: alt });
  else disabledItems.push({ id: item, alt: null });
};