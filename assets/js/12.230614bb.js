(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(t,n,a){"use strict";a.r(n);var e=a(0),v=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("自然语言："),a("br"),t._v("\n文法即文章的书写法规，一般用来指以文字、词语、短句、句子的编排而组成的完整语句和文章的合理性组织。")])]),t._v(" "),a("h2",{attrs:{id:"上下文无关文法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文无关文法"}},[t._v("#")]),t._v(" 上下文无关文法")]),t._v(" "),a("p",[t._v("上下文无关文法就是说这个文法中所有的产生式左边只有一个非终结符，"),a("br"),t._v("\n比如：S -> aSbS -> ab这个文法有两个产生式，每个产生式左边只有一个非终结符S，\n这就是上下文无关文法，因为你只要找到符合产生式右边的串，就可以把它归约为对应的非终结符。")]),t._v(" "),a("p",[t._v("比如：aSb -> aaSbbS -> ab这就是上下文相关文法，因为它的第一个产生式左边有不止一个符号，\n所以你在匹配这个产生式中的S的时候必需确保这个S有正确的“上下文”，也就是左边的a和右边的b，所以叫上下文相关文法。")]),t._v(" "),a("p",[a("code",[t._v("终结符")]),t._v("： 通俗的说就是不能单独出现在推导式左边的符号，也就是说终结符不能再进行推导。"),a("br"),t._v(" "),a("code",[t._v("非终结符")]),t._v("： 不是终结符的都是非终结符。非终结符可理解为一个可拆分元素，而终结符是不可拆\n分的最小元素。")]),t._v(" "),a("p",[t._v("什么是上下文，上下文在哪里？为什么说这个文法上下文无关？")]),t._v(" "),a("p",[t._v("在应用一个产生式进行推导时，前后已经推导出的部分结果就是上下文。\n上下文无关的意思的，只要文法的定义里有某个产生式，不管一个非终结符前后的串是什么，\n就可以应用相应的产生式进行推导。")])])}),[],!1,null,null,null);n.default=v.exports}}]);