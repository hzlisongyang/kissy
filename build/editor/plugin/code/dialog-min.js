/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Sep 28 16:36
*/
KISSY.add("editor/plugin/code/dialog",function(b,f,g){function e(a){this.editor=a}var h='<div class="{prefixCls}code-wrap"><table class="{prefixCls}code-table"><tr><td class="{prefixCls}code-label"><label for="ks-editor-code-type">类型：</label></td><td class="{prefixCls}code-content"><select id="ks-editor-code-type"  class="{prefixCls}code-type">'+b.map([["ActionScript3","as3"],["Bash/Shell","bash"],["C/C++","cpp"],["Css","css"],["CodeFunction","cf"],["C#","c#"],["Delphi","delphi"],["Diff","diff"],
["Erlang","erlang"],["Groovy","groovy"],["Html","html"],["Java","java"],["JavaFx","jfx"],["Javascript","js"],["Perl","pl"],["Php","php"],["Plain Text","plain"],["PowerShell","ps"],["Python","python"],["Ruby","ruby"],["Scala","scala"],["Sql","sql"],["Vb","vb"],["Xml","xml"]],function(a){return'<option value="'+a[1]+'">'+a[0]+"</option>"})+'</select></td></tr><tr><td><label for="ks-editor-code-textarea">代码：</label></td><td><textarea id="ks-editor-code-textarea"  class="{prefixCls}code-textarea {prefixCls}input"></textarea></td></tr></table></div>';
b.augment(e,{initDialog:function(){var a=this.editor.get("prefixCls")+"editor-",c,d;d=this.dialog=new f.Dialog({width:500,mask:!0,autoRender:!0,headerContent:"插入代码",bodyContent:b.substitute(h,{prefixCls:a}),footerContent:b.substitute('<div class="{prefixCls}code-table-action"><a href="javascript:void(\'插入\')" class="{prefixCls}code-insert {prefixCls}button">插入</a><a href="javascript:void(\'取消\')" class="{prefixCls}code-cancel {prefixCls}button">取消</a></td></div>',{prefixCls:a})});c=d.get("el");this.insert=
c.one("."+a+"code-insert");this.cancel=c.one("."+a+"code-cancel");this.type=g.Select.decorate(c.one("."+a+"code-type"),{prefixCls:a+"big-",width:150,menuCfg:{prefixCls:a,height:320,render:d.get("contentEl")}});this.code=c.one("."+a+"code-textarea");this.insert.on("click",this._insert,this);this.cancel.on("click",this.hide,this)},hide:function(){this.dialog.hide()},_insert:function(){var a,c=this.editor;b.trim(a=this.code.val())?(a=b.all(b.substitute('<pre class="prettyprint ks-editor-code brush:{type};toolbar:false;">{code}</pre>',
{type:this.type.get("value"),code:b.escapeHTML(a)}),c.get("document")[0]),c.insertElement(a),this.dialog.hide()):alert("请输入代码!")},show:function(){this.dialog||this.initDialog();this.dialog.show()}});return e},{requires:["../overlay/","menubutton"]});