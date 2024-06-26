import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const tutorial: SimpleTranslationEntries = {
    "intro": `欢迎来到PokéRogue！这是一款以战斗为核心的融合了roguelite元素的宝可梦同人游戏。
    $本游戏未进行商业化，我们没有Pokémon或Pokémon使用的版权资产的所有权。
    $游戏仍在开发中，但已可完整游玩。\n如需报告错误，请使用 Discord 社区。
    $如果游戏运行缓慢，请确保在浏览器设置中打开了“硬件加速”。`,
    
    "accessMenu": `在等待输入时，按 M 或 Escape 键可访问菜单。\n菜单包含设置和各种功能。`,
    
    "menu": `在此菜单中，您可以访问设置。
    $在设置中，您可以更改游戏速度、窗口样式和其他选项。
    $这里还有各种其他功能，请务必全部查看！`,

    "starterSelect": `在此页面中，您可以选择您的初始宝可梦。\n这些是您最初的队伍成员。
    $每个初始宝可梦都有一个费用。您的队伍最多可以拥有\n6 名成员，只要总费用不超过 10。
    $您还可以根据\n您捕获或孵化的变种选择性别、特性和形态。
    $一个物种的个体值是您捕获或孵化的所有宝可梦中最好的，所以尽量获得更多同种宝可梦！`,

    "pokerus": `每天随机 3 个可选的初始宝可梦会有紫色边框。
    $如果您看到您拥有的初始宝可梦带有紫色边框，\n请尝试将其添加到您的队伍中。请务必查看其概况！`,

    "statChange": `只要您的宝可梦没有被召回，属性变化就会在战斗中持续存在。
    $在训练家战斗之前和进入新的宝可梦群落之前，您的宝可梦会被召回。
    $您还可以通过按住 C 或 Shift 键来查看场上宝可梦的能力变化。`,

    "selectItem": `每次战斗后，您都可以选择 3 个随机物品。\n您只能选择其中一个。
    $这些物品包括消耗品、宝可梦携带物品和永久被动道具。
    $大多数非消耗品的效果会以各种方式叠加。
    $某些物品只有在可以使用时才会出现，例如进化物品。
    $您还可以使用转移选项在宝可梦之间转移携带物品。
    $一旦您获得了携带物品，转移选项就会出现在右下角。
    $您可以用金钱购买消耗品，并且随着您游戏的深入，将会有更多种类的消耗品可供选择。
    $请务必在选择随机物品之前购买这些消耗品，因为一旦您选择，游戏就会进入下一场战斗。`,

    "eggGacha": `在此页面中，您可以使用您的兑换券兑换\n宝可梦蛋。
    $蛋需要孵化，并且在每场战斗后都会减少孵化周期。稀有蛋需要更长时间才能孵化。
    $孵化的宝可梦不会被添加到您的队伍中，它们将被添加到您的初始宝可梦中。
    $从蛋中孵化的宝可梦通常比\n野生宝可梦具有更好的个体值。
    $有些宝可梦只能从蛋中获得。
    $有 3 种不同的扭蛋机可供选择，每种扭蛋机都有不同的\n奖励，请选择最适合您的！`,
} as const;