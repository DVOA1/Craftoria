---
navigation:
  title: "座標ループウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/for_each_coordinate.png"
  parent: pneumaticcraft:widget_flow.md
---

# 座標ループウィジェット

この高度なウィジェットは指定された[エリア](./area.md)内のすべての座標をループします。各座標に対して指定された変数をその座標に設定し、接続された[テキスト](./text.md)ウィジェットに一致する[ラベル](./label.md)にジャンプします。そのルーチンの実行が終了するとこのウィジェットに戻って次の座標を繰り返し(通常はプログラムの最後に到達すると[開始](./start.md)に戻る)ます。

## 中断

*座標ループ*で使用される座標変数を現在のワールドの建築の高さの外側の任意のブロック位置に設定することでループから抜け出すことができます。次回プログラムが*座標ループ*に戻るとこれに気付き、座標のそれ以上の横断をキャンセルします。

*この動作は新しいワールドの高さ機能により、MC1.18+で変更されました。以前は(0,0,0)は無効と見なされていましたが、これは常に疑わしいものでした(奈落のワールド)が今ではさらに疑わしいものになりました。*

*座標ループウィジェット*

![](for_each_coordinate.png)

