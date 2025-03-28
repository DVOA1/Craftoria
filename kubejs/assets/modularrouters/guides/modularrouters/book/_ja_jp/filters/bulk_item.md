---
navigation:
  title: "一括アイテムフィルター"
  icon: "modularrouters:bulk_item_filter"
  parent: modularrouters:filters.md
item_ids:
  - modularrouters:bulk_item_filter
---

# 一括アイテムフィルター

このフィルターを使用するとオプションのNBTマッチングを含む最大54個の異なるアイテムの高性能マッチングが可能になります。一括アイテムフィルターはいくつかの方法で構成できます:


- 任意のインベントリに対してフィルターを*スニーク+右クリック*すると、そのインベントリの内容のコピーがフィルターにマージされます。


- フィルターを*右クリック*すると現在フィルター内にあるアイテムを表示するGUIが開きます。ここでフィルターにアイテム(のゴーストコピー)を追加したり、アイテムをクリックして削除したり、赤い**<Color id="dark_red">X</Color>**ボタンを押してフィルターを完全にクリアしたりできます。


- フィルターがルーター内のモジュール内にある場合、フィルターを中クリックするか、フィルター上で**<Color id="dark_red">[$(k:modularrouters.configure)]$(/k:modularrouters.configure)</Color>**を押すことでフィルターのGUIを開くことができます。

モジュールに有効なインベントリがターゲットになっている**場合**、GUIに2つの追加ボタンが表示されます: ターゲットのインベントリのアイテムを*マージ*する緑の**<Color id="dark_green">+</Color>**ボタンと、ターゲットのインベントリのアイテムを*ロード*する(フィルターの現在の内容を上書きする)青い**<Color id="dark_blue">=</Color>**ボタンです。

この最後の構成方法は[送信モジュール](../modules/sender_2.md)と組み合わせてソートシステムを実装する場合に特に便利です。これは実際のインベントリが後で空になった場合でも、一括アイテムフィルターがインベントリに何が入っている必要があるかを記憶するためです。



<Recipe id="modularrouters:bulk_item_filter" />

