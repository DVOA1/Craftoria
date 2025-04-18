ServerEvents.tags('item', e => {
  /**
   * Blacklist for both Replicator Mk I and Mk II.
   * @type {$Ingredient_[]}
   */
  const replicatorBlacklist = [
    /^.*creative./,

    'ae2:quantum_entangled_singularity',
    'ae2wtlib:wireless_universal_terminal',
    'extendedae:package',
    /^extendedae:.*_cell$/,

    'mekanism:pellet_antimatter',

    /^modern_industrialization:quantum_.*/,
    'modern_industrialization:replicator',
    'modern_industrialization:replicator_1',
    'modern_industrialization:helium_plasma_bucket',
    'modern_industrialization:uu_matter_bucket',
    'modern_industrialization:singularity',
    'modern_industrialization:nuke',
    /^extended_industrialization:nano_quantum_.*/,

    'gag:time_sand_pouch',

    /^sophisticated(storage|backpacks):.*(shulker|barrel|chest|backpack)/,
    'sophisticatedstorageinmotion:storage_minecart',

    '#create:packages',

    /^industrialforegoing:infinity_.*/,

    'shrink:shrink_bottle',

    /^craftoria:infinity_.*/,

    /^sophisticatedstorageinmotion.*/,

    'supplementaries:sack',
    'supplementaries:safe',
    '#supplementaries:presents',
    '#supplementaries:trapped_presents',
    'supplementaries:jar',
  ];

  /**
   * Blacklist for Replicator Mk II.
   * @type {$Ingredient_[]}
   */
  const replicator_2_blacklist = [
    /storage_cell/,
    /fe_.*_cell/,
    /portable_.*_cell/,
    'ae2:view_cell',
    'ae2:wireless_crafting_terminal',
    'megacells:bulk_item_cell',
    'megacells:radioactive_chemical_cell',
    /^enderdrives:.*_disk/,

    /^pneumaticcraft:.*_(tank|chest)$/,
    /^pneumaticcraft:.*drone/,
    'pneumaticcraft:liquid_hopper',

    /^functionalstorage/,

    'industrialforegoing:mob_imprisonment_tool',

    /^mekanism:.*_(chest|tank|barrel)/,
    /^mekanism:.*_bin$/,
    /^mekanism:qio_drive/,
    /^mekanism:(basic|advanced|elite|ultimate)_.*_factory/,
    /^mekanism:.*_energy_cube$/,
    'mekanism:cardboard_box',
    'mekanism:qio_dashboard',
    'mekanism:portable_qio_dashboard',
    'mekanism:enrichment_chamber',
    'mekanism:crusher',
    'mekanism:purification_chamber',
    'mekanism:chemical_injection_chamber',
    'mekanism:chemical_washer',
    'mekanism:chemical_crystallizer',
    'mekanism:combiner',
    'mekanism:metallurgic_infuser',
    'mekanism:osmium_compressor',
    'mekanism:energized_smelter',
    'mekanism:digital_miner',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:precision_sawmill',
    'mekanism:rotary_condensentrator',
    'mekanism:seismic_vibrator',
    'mekanism:solar_neutron_activator',
    'mekanism:nutritional_liquifier',
    'mekanism:formulaic_assemblicator',
    'mekanism:oredictionificator',
    'mekanism:laser_tractor_beam',
    'mekanism:chemical_oxidizer',
    'mekanism:chemical_infuser',
    'mekanism:pigment_extractor',
    'mekanism:pigment_mixer',
    'mekanism:painting_machine',
    'mekanism:security_desk',
    'mekanism:electric_pump',
    'mekanism:fluidic_plenisher',
    'mekanism:electrolytic_separator',
    'mekanism:isotopic_centrifuge',
    'mekanism:resistive_heater',
    'mekanism:fuelwood_heater',
    'mekanism:modification_station',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:teleporter',
    'mekanism:gauge_dropper',
    'mekanism:robit',
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:gas_burning_generator',

    /^mekanism_extras:.*_(chest|tank|barrel)/,
    /^mekanism_extras:.*_bin$/,
    /^mekanism_extras:qio_drive/,
    /^mekanism_extras:.*_energy_cube$/,
    'mekanism_extras:advanced_electric_pump',

    /^occultism:storage_stabilizer_/,
    'occultism:storage_controller',
    'occultism:soul_gem',
    'occultism:soul_shard',
    'occultism:familiar_ring',
    'occultism:satchel',
    'occultism:ritual_satchel_t1',
    'occultism:ritual_satchel_t2',

    'ars_nouveau:mob_jar',
    'ars_nouveau:source_jar',
    'ars_elemental:curio_bag',
    'ars_elemental:caster_bag',
    'ars_additions:handy_haversack',

    'integrateddynamics:energy_battery',

    'justdirethings:creaturecatcher',
    'justdirethings:inventory_holder',
    'justdirethings:fluid_canister',
    'justdirethings:fuel_canister',
    'justdirethings:pocket_generator',
    'justdirethings:experienceholder',

    'apothic_enchanting:library',
    'apothic_enchanting:ender_library',

    '@tankstorage',
    '@bankstorage',

    'mob_grinding_utils:tank',
    'mob_grinding_utils:tank_sink',
    'mob_grinding_utils:jumbo_tank',

    'framedblocks:framed_tank',

    'occultism:storage_controller_stabilized',
  ].concat(replicatorBlacklist);

  /**
   * Blacklist for Replicator Mk I.
   * @type {$Ingredient_[]}
   */
  const replicator_1_blacklist = [
    /_bucket$/,

    // These make no sense to replicate, as they rely on having NBT data, which Replicator Mk I doesn't support, and I don't want to risk them causing issues.
    'tankstorage:tank_link',
    'bankstorage:bank_link',
    'minecraft:enchanted_book',
    'minecraft:tipped_arrow',
    'minecraft:ominous_bottle',
    'minecraft:potion',
    'minecraft:splash_potion',
    'minecraft:lingering_potion',
    'apotheosis:gem',
    'apotheosis:potion_charm',
    'ae2:facade',
    'reliquary:mob_charm',
    'reliquary:mob_charm_fragment',
    'reliquary:tipped_arrow',
    'reliquary:potion_essence',
    'reliquary:potion',
    'reliquary:splash_potion',
    'reliquary:lingering_potion',
    'irons_spellbooks:scroll',
    'hostilenetworks:data_model',
    'hostilenetworks:prediction',
  ].concat(replicatorBlacklist);

  /** @type {$Ingredient_[]} */
  const replicator_2_exclusions = [
    /^functionalstorage:.*(upgrade|downgrade|tool|controller)/,
    /^mekanism:dynamic_(tank|valve)/,
    'industrialforegoing:infinity_charger',
    'mekanism:scuba_tank',
    /_radioactive_waste_barrel$/,
    'tankstorage:tank_dock',
    'tankstorage:tank_link',
    'bankstorage:bank_dock',
    'bankstorage:bank_link',
    'modern_industrialization:quantum_circuit',
    'modern_industrialization:quantum_circuit_board',
    'modern_industrialization:quantum_machine_casing',
  ];

  /** @type {$Ingredient_[]} */
  const replicator_1_exclusions = [
    'modern_industrialization:quantum_circuit',
    'modern_industrialization:quantum_circuit_board',
    'modern_industrialization:quantum_machine_casing',

    'extendedae:void_cell',
  ];

  e.add('modern_industrialization:replicator_blacklist', replicator_2_blacklist).remove(replicator_2_exclusions);
  e.add('craftoria:replicator_1_blacklist', replicator_1_blacklist).remove(replicator_1_exclusions);
});
