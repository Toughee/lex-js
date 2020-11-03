/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!yy.options.captureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1) => { __ = _1 }],
[0,4,(_1,_2,_3,_4) => { 
      __ = {rules: _3};

      if (_1[0]) {
        __.macros = _1[0];
      }

      if (_1[1]) {
        __.startConditions = _1[1];
      }

      if (_4 && _4.trim() !== '') {
        __.moduleInclude = _4;
      }

      if (yy.options) {
        __.options = yy.options;
      }

      delete yy.options;
      delete yy.actionInclude;
     }],
[1,1,(_1) => { __ = null }],
[1,2,(_1,_2) => { __ = null }],
[1,3,(_1,_2,_3) => { __ = _2 }],
[2,2,(_1,_2) => { 

      __ = _2;

      if ('length' in _1) {
        __[0] = __[0] || {};
        __[0][_1[0]] = _1[1];
      } else {
        __[1] = __[1] || {};
        for (var name in _1) {
          __[1][name] = _1[name];
        }
      } }],
[2,0,() => { __ = [null, null] }],
[3,2,(_1,_2) => { __ = [_1, _2] }],
[3,2,(_1,_2) => { __ = _2; }],
[3,2,(_1,_2) => { __ = _2 }],
[4,1,(_1) => { __ = {}; __[_1] = 0 }],
[4,2,(_1,_2) => { __ = _1; __[_2] = 0 }],
[5,1,(_1) => { __ = {}; __[_1] = 1 }],
[5,2,(_1,_2) => { __ = _1; __[_2] = 1 }],
[6,1,(_1) => { __ = [_1]; }],
[6,2,(_1,_2) => { __ = _1; __.push(_2) }],
[7,3,(_1,_2,_3) => { __ = _1 ? [_1, _2, _3] : [_2, _3] }],
[8,3,(_1,_2,_3) => { __ = _2 }],
[8,1,(_1) => { __ = _1; }],
[9,0,() => { __ = '' }],
[9,1,(_1) => { __ = _1 }],
[9,5,(_1,_2,_3,_4,_5) => { __ = _1 + _2 + _3 + _4 + _5 }],
[9,4,(_1,_2,_3,_4) => { __ = _1 + _2 + _3 + _4; }],
[10,1,(_1) => { __ = yytext }],
[10,2,(_1,_2) => { __ = _1 + _2 }],
[11,3,(_1,_2,_3) => { __ = _2 }],
[11,3,(_1,_2,_3) => { __ = ['*'] }],
[11,0],
[12,1,(_1) => { __ = [_1] }],
[12,3,(_1,_2,_3) => { __ = _1; __.push(_3) }],
[13,1,(_1) => { __ = _1; }],
[14,3,(_1,_2,_3) => { __ = _1 + '|' + _3 }],
[14,2,(_1,_2) => { __ = _1 + '|' }],
[14,1,(_1) => { __ = _1 }],
[14,0,() => { __ = '' }],
[15,2,(_1,_2) => { __ = _1 + _2 }],
[15,1,(_1) => { __ = _1 }],
[16,3,(_1,_2,_3) => { __ = '(' + _2 + ')' }],
[16,3,(_1,_2,_3) => { __ = _1 + _2 + ')' }],
[16,2,(_1,_2) => { __ = _1 + '+' }],
[16,2,(_1,_2) => { __ = _1 + '*' }],
[16,2,(_1,_2) => { __ = _1 + '?' }],
[16,2,(_1,_2) => { __ = '(?=' + _2 + ')' }],
[16,2,(_1,_2) => { __ = '(?!' + _2 + ')' }],
[16,1,(_1) => { __ = _1 }],
[16,2,(_1,_2) => { __ = _1 + _2 }],
[16,1,(_1) => { __ = _1 }],
[16,1,(_1) => { __ = '.' }],
[16,1,(_1) => { __ = '^' }],
[16,1,(_1) => { __ = '$' }],
[16,1,(_1) => { __ = _1 }],
[16,1,(_1) => { __ = _1 }],
[17,1,(_1) => { __ = _1 }],
[18,1,(_1) => { __ = yytext }],
[19,1,(_1) => { __ = yytext }],
[20,1,(_1) => { __ = yytext }],
[21,1,(_1) => { __ = prepareString(yytext.slice(1, -1)) }],
[21,1,(_1) => { __ = _1 }]];

/**
 * Encoded tokens map.
 */
const tokens = {"%%":"22","EOF":"23","CODE":"24","NAME":"25","START_INC":"26","START_EXC":"27","START_COND":"28","{":"29","}":"30","ACTION":"31","ACTION_BODY":"32","<":"33",">":"34","*":"35",",":"36","|":"37","(":"38",")":"39","SPECIAL_GROUP":"40","+":"41","?":"42","/":"43","/!":"44",".":"45","^":"46","$":"54","NAME_BRACE":"48","ANY_GROUP_REGEX":"49","ESCAPE_CHAR":"50","RANGE_REGEX":"51","STRING_LIT":"52","CHARACTER_LIT":"53"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":1,"2":2,"3":3,"22":"r6","25":"s4","26":"s5","27":"s6"},{"54":"acc"},{"22":"s7"},{"2":72,"3":3,"22":"r6","25":"s4","26":"s5","27":"s6"},{"13":73,"14":20,"15":21,"16":22,"17":27,"18":28,"19":33,"21":32,"22":"r34","25":"r34","26":"r34","27":"r34","37":"r34","38":"s23","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"4":74,"28":"s75"},{"5":77,"28":"s78"},{"6":8,"7":9,"11":10,"29":"r27","31":"r27","33":"s11","38":"r27","40":"r27","43":"r27","44":"r27","45":"r27","46":"r27","48":"r27","49":"r27","50":"r27","52":"r27","53":"r27","54":"r27"},{"1":12,"7":13,"11":10,"22":"s15","23":"s14","29":"r27","31":"r27","33":"s11","38":"r27","40":"r27","43":"r27","44":"r27","45":"r27","46":"r27","48":"r27","49":"r27","50":"r27","52":"r27","53":"r27","54":"r27"},{"22":"r14","23":"r14","29":"r14","31":"r14","33":"r14","38":"r14","40":"r14","43":"r14","44":"r14","45":"r14","46":"r14","48":"r14","49":"r14","50":"r14","52":"r14","53":"r14","54":"r14"},{"13":19,"14":20,"15":21,"16":22,"17":27,"18":28,"19":33,"21":32,"29":"r34","31":"r34","37":"r34","38":"s23","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"12":65,"25":"s67","35":"s66"},{"54":"r1"},{"22":"r15","23":"r15","29":"r15","31":"r15","33":"r15","38":"r15","40":"r15","43":"r15","44":"r15","45":"r15","46":"r15","48":"r15","49":"r15","50":"r15","52":"r15","53":"r15","54":"r15"},{"54":"r2"},{"23":"s16","24":"s17"},{"54":"r3"},{"23":"s18"},{"54":"r4"},{"8":39,"29":"s40","31":"s41"},{"22":"r30","25":"r30","26":"r30","27":"r30","29":"r30","31":"r30","37":"s51"},{"16":53,"17":27,"18":28,"19":33,"21":32,"22":"r33","25":"r33","26":"r33","27":"r33","29":"r33","31":"r33","37":"r33","38":"s23","39":"r33","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"20":57,"22":"r36","25":"r36","26":"r36","27":"r36","29":"r36","31":"r36","35":"s55","37":"r36","38":"r36","39":"r36","40":"r36","41":"s54","42":"s56","43":"r36","44":"r36","45":"r36","46":"r36","48":"r36","49":"r36","50":"r36","51":"s58","52":"r36","53":"r36","54":"r36"},{"14":59,"15":21,"16":22,"17":27,"18":28,"19":33,"21":32,"37":"r34","38":"s23","39":"r34","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"14":61,"15":21,"16":22,"17":27,"18":28,"19":33,"21":32,"37":"r34","38":"s23","39":"r34","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"16":63,"17":27,"18":28,"19":33,"21":32,"38":"s23","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"16":64,"17":27,"18":28,"19":33,"21":32,"38":"s23","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"22":"r44","25":"r44","26":"r44","27":"r44","29":"r44","31":"r44","35":"r44","37":"r44","38":"r44","39":"r44","40":"r44","41":"r44","42":"r44","43":"r44","44":"r44","45":"r44","46":"r44","48":"r44","49":"r44","50":"r44","51":"r44","52":"r44","53":"r44","54":"r44"},{"22":"r46","25":"r46","26":"r46","27":"r46","29":"r46","31":"r46","35":"r46","37":"r46","38":"r46","39":"r46","40":"r46","41":"r46","42":"r46","43":"r46","44":"r46","45":"r46","46":"r46","48":"r46","49":"r46","50":"r46","51":"r46","52":"r46","53":"r46","54":"r46"},{"22":"r47","25":"r47","26":"r47","27":"r47","29":"r47","31":"r47","35":"r47","37":"r47","38":"r47","39":"r47","40":"r47","41":"r47","42":"r47","43":"r47","44":"r47","45":"r47","46":"r47","48":"r47","49":"r47","50":"r47","51":"r47","52":"r47","53":"r47","54":"r47"},{"22":"r48","25":"r48","26":"r48","27":"r48","29":"r48","31":"r48","35":"r48","37":"r48","38":"r48","39":"r48","40":"r48","41":"r48","42":"r48","43":"r48","44":"r48","45":"r48","46":"r48","48":"r48","49":"r48","50":"r48","51":"r48","52":"r48","53":"r48","54":"r48"},{"22":"r49","25":"r49","26":"r49","27":"r49","29":"r49","31":"r49","35":"r49","37":"r49","38":"r49","39":"r49","40":"r49","41":"r49","42":"r49","43":"r49","44":"r49","45":"r49","46":"r49","48":"r49","49":"r49","50":"r49","51":"r49","52":"r49","53":"r49","54":"r49"},{"22":"r50","25":"r50","26":"r50","27":"r50","29":"r50","31":"r50","35":"r50","37":"r50","38":"r50","39":"r50","40":"r50","41":"r50","42":"r50","43":"r50","44":"r50","45":"r50","46":"r50","48":"r50","49":"r50","50":"r50","51":"r50","52":"r50","53":"r50","54":"r50"},{"22":"r51","25":"r51","26":"r51","27":"r51","29":"r51","31":"r51","35":"r51","37":"r51","38":"r51","39":"r51","40":"r51","41":"r51","42":"r51","43":"r51","44":"r51","45":"r51","46":"r51","48":"r51","49":"r51","50":"r51","51":"r51","52":"r51","53":"r51","54":"r51"},{"22":"r52","25":"r52","26":"r52","27":"r52","29":"r52","31":"r52","35":"r52","37":"r52","38":"r52","39":"r52","40":"r52","41":"r52","42":"r52","43":"r52","44":"r52","45":"r52","46":"r52","48":"r52","49":"r52","50":"r52","51":"r52","52":"r52","53":"r52","54":"r52"},{"22":"r53","25":"r53","26":"r53","27":"r53","29":"r53","31":"r53","35":"r53","37":"r53","38":"r53","39":"r53","40":"r53","41":"r53","42":"r53","43":"r53","44":"r53","45":"r53","46":"r53","48":"r53","49":"r53","50":"r53","51":"r53","52":"r53","53":"r53","54":"r53"},{"22":"r56","25":"r56","26":"r56","27":"r56","29":"r56","31":"r56","35":"r56","37":"r56","38":"r56","39":"r56","40":"r56","41":"r56","42":"r56","43":"r56","44":"r56","45":"r56","46":"r56","48":"r56","49":"r56","50":"r56","51":"r56","52":"r56","53":"r56","54":"r56"},{"22":"r57","25":"r57","26":"r57","27":"r57","29":"r57","31":"r57","35":"r57","37":"r57","38":"r57","39":"r57","40":"r57","41":"r57","42":"r57","43":"r57","44":"r57","45":"r57","46":"r57","48":"r57","49":"r57","50":"r57","51":"r57","52":"r57","53":"r57","54":"r57"},{"22":"r54","25":"r54","26":"r54","27":"r54","29":"r54","31":"r54","35":"r54","37":"r54","38":"r54","39":"r54","40":"r54","41":"r54","42":"r54","43":"r54","44":"r54","45":"r54","46":"r54","48":"r54","49":"r54","50":"r54","51":"r54","52":"r54","53":"r54","54":"r54"},{"22":"r16","23":"r16","29":"r16","31":"r16","33":"r16","38":"r16","40":"r16","43":"r16","44":"r16","45":"r16","46":"r16","48":"r16","49":"r16","50":"r16","52":"r16","53":"r16","54":"r16"},{"9":42,"10":43,"29":"r19","30":"r19","32":"s44"},{"22":"r18","23":"r18","29":"r18","31":"r18","33":"r18","38":"r18","40":"r18","43":"r18","44":"r18","45":"r18","46":"r18","48":"r18","49":"r18","50":"r18","52":"r18","53":"r18","54":"r18"},{"29":"s46","30":"s45"},{"29":"r20","30":"r20","32":"s50"},{"29":"r23","30":"r23","32":"r23"},{"22":"r17","23":"r17","29":"r17","31":"r17","33":"r17","38":"r17","40":"r17","43":"r17","44":"r17","45":"r17","46":"r17","48":"r17","49":"r17","50":"r17","52":"r17","53":"r17","54":"r17"},{"9":47,"10":43,"29":"r19","30":"r19","32":"s44"},{"29":"s46","30":"s48"},{"10":49,"29":"r22","30":"r22","32":"s44"},{"29":"r21","30":"r21","32":"s50"},{"29":"r24","30":"r24","32":"r24"},{"15":52,"16":22,"17":27,"18":28,"19":33,"21":32,"22":"r32","25":"r32","26":"r32","27":"r32","29":"r32","31":"r32","37":"r32","38":"s23","39":"r32","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"16":53,"17":27,"18":28,"19":33,"21":32,"22":"r31","25":"r31","26":"r31","27":"r31","29":"r31","31":"r31","37":"r31","38":"s23","39":"r31","40":"s24","43":"s25","44":"s26","45":"s29","46":"s30","48":"s34","49":"s35","50":"s38","52":"s36","53":"s37","54":"s31"},{"20":57,"22":"r35","25":"r35","26":"r35","27":"r35","29":"r35","31":"r35","35":"s55","37":"r35","38":"r35","39":"r35","40":"r35","41":"s54","42":"s56","43":"r35","44":"r35","45":"r35","46":"r35","48":"r35","49":"r35","50":"r35","51":"s58","52":"r35","53":"r35","54":"r35"},{"22":"r39","25":"r39","26":"r39","27":"r39","29":"r39","31":"r39","35":"r39","37":"r39","38":"r39","39":"r39","40":"r39","41":"r39","42":"r39","43":"r39","44":"r39","45":"r39","46":"r39","48":"r39","49":"r39","50":"r39","51":"r39","52":"r39","53":"r39","54":"r39"},{"22":"r40","25":"r40","26":"r40","27":"r40","29":"r40","31":"r40","35":"r40","37":"r40","38":"r40","39":"r40","40":"r40","41":"r40","42":"r40","43":"r40","44":"r40","45":"r40","46":"r40","48":"r40","49":"r40","50":"r40","51":"r40","52":"r40","53":"r40","54":"r40"},{"22":"r41","25":"r41","26":"r41","27":"r41","29":"r41","31":"r41","35":"r41","37":"r41","38":"r41","39":"r41","40":"r41","41":"r41","42":"r41","43":"r41","44":"r41","45":"r41","46":"r41","48":"r41","49":"r41","50":"r41","51":"r41","52":"r41","53":"r41","54":"r41"},{"22":"r45","25":"r45","26":"r45","27":"r45","29":"r45","31":"r45","35":"r45","37":"r45","38":"r45","39":"r45","40":"r45","41":"r45","42":"r45","43":"r45","44":"r45","45":"r45","46":"r45","48":"r45","49":"r45","50":"r45","51":"r45","52":"r45","53":"r45","54":"r45"},{"22":"r55","25":"r55","26":"r55","27":"r55","29":"r55","31":"r55","35":"r55","37":"r55","38":"r55","39":"r55","40":"r55","41":"r55","42":"r55","43":"r55","44":"r55","45":"r55","46":"r55","48":"r55","49":"r55","50":"r55","51":"r55","52":"r55","53":"r55","54":"r55"},{"37":"s51","39":"s60"},{"22":"r37","25":"r37","26":"r37","27":"r37","29":"r37","31":"r37","35":"r37","37":"r37","38":"r37","39":"r37","40":"r37","41":"r37","42":"r37","43":"r37","44":"r37","45":"r37","46":"r37","48":"r37","49":"r37","50":"r37","51":"r37","52":"r37","53":"r37","54":"r37"},{"37":"s51","39":"s62"},{"22":"r38","25":"r38","26":"r38","27":"r38","29":"r38","31":"r38","35":"r38","37":"r38","38":"r38","39":"r38","40":"r38","41":"r38","42":"r38","43":"r38","44":"r38","45":"r38","46":"r38","48":"r38","49":"r38","50":"r38","51":"r38","52":"r38","53":"r38","54":"r38"},{"20":57,"22":"r42","25":"r42","26":"r42","27":"r42","29":"r42","31":"r42","35":"s55","37":"r42","38":"r42","39":"r42","40":"r42","41":"s54","42":"s56","43":"r42","44":"r42","45":"r42","46":"r42","48":"r42","49":"r42","50":"r42","51":"s58","52":"r42","53":"r42","54":"r42"},{"20":57,"22":"r43","25":"r43","26":"r43","27":"r43","29":"r43","31":"r43","35":"s55","37":"r43","38":"r43","39":"r43","40":"r43","41":"s54","42":"s56","43":"r43","44":"r43","45":"r43","46":"r43","48":"r43","49":"r43","50":"r43","51":"s58","52":"r43","53":"r43","54":"r43"},{"34":"s68","36":"s69"},{"34":"s71"},{"34":"r28","36":"r28"},{"29":"r25","31":"r25","38":"r25","40":"r25","43":"r25","44":"r25","45":"r25","46":"r25","48":"r25","49":"r25","50":"r25","52":"r25","53":"r25","54":"r25"},{"25":"s70"},{"34":"r29","36":"r29"},{"29":"r26","31":"r26","38":"r26","40":"r26","43":"r26","44":"r26","45":"r26","46":"r26","48":"r26","49":"r26","50":"r26","52":"r26","53":"r26","54":"r26"},{"22":"r5"},{"22":"r7","25":"r7","26":"r7","27":"r7"},{"22":"r8","25":"r8","26":"r8","27":"r8","28":"s76"},{"22":"r10","25":"r10","26":"r10","27":"r10","28":"r10"},{"22":"r11","25":"r11","26":"r11","27":"r11","28":"r11"},{"22":"r9","25":"r9","26":"r9","27":"r9","28":"s79"},{"22":"r12","25":"r12","26":"r12","27":"r12","28":"r12"},{"22":"r13","25":"r13","26":"r13","27":"r13","28":"r13"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^$/, function() { return 'EOF' }],
[/^\/\*(.|\n|\r)*?\*\//, function() { return 'ACTION_BODY' }],
[/^\/\/.*/, function() { return 'ACTION_BODY' }],
[/^\/[^ \/]*?['"{}'][^ ]*?\//, function() { return 'ACTION_BODY' }],
[/^"(\\\\|\\"|[^"])*"/, function() { return 'ACTION_BODY' }],
[/^'(\\\\|\\'|[^'])*'/, function() { return 'ACTION_BODY' }],
[/^[\/"'][^{}\/"']+/, function() { return 'ACTION_BODY' }],
[/^[^{}\/"']+/, function() { return 'ACTION_BODY' }],
[/^\{/, function() { yy.depth++; return '{' }],
[/^\}/, function() { yy.depth == 0 ? this.begin('trail') : yy.depth--; return '}' }],
[/^[a-zA-Z_][a-zA-Z0-9_-]*/, function() { return 'NAME' }],
[/^>/, function() { this.popState(); return '>' }],
[/^,/, function() { return ',' }],
[/^\*/, function() { return '*' }],
[/^(?:\r?\n)+/, function() { /* */ }],
[/^\s+(?:\r?\n)+/, function() { /* */ }],
[/^\s+/, function() { this.begin('indented') }],
[/^%%/, function() { this.begin('code'); return '%%' }],
[/^[a-zA-Z0-9_]+/, function() { return 'CHARACTER_LIT' }],
[/^[a-zA-Z_][a-zA-Z0-9_-]*/, function() { yy.options[yytext] = true }],
[/^(?:\r?\n)+/, function() { this.begin('INITIAL') }],
[/^\s+(?:\r?\n)+/, function() { this.begin('INITIAL') }],
[/^\s+/, function() { /* empty */ }],
[/^[a-zA-Z_][a-zA-Z0-9_-]*/, function() { return 'START_COND' }],
[/^(?:\r?\n)+/, function() { this.begin('INITIAL') }],
[/^\s+(?:\r?\n)+/, function() { this.begin('INITIAL') }],
[/^\s+/, function() { /* empty */ }],
[/^.*(?:\r?\n)+/, function() { this.begin('rules') }],
[/^\{/, function() { yy.depth = 0; this.begin('action'); return '{' }],
[/^%\{(.|(?:\r?\n))*?%\}/, function() { this.begin('trail'); yytext = yytext.slice(2, -2); return 'ACTION' }],
[/^%\{(.|(?:\r?\n))*?%\}/, function() { yytext = yytext.slice(2, -2); return 'ACTION' }],
[/^.+/, function() { this.begin('rules'); return 'ACTION' }],
[/^.+/, function() { this.begin('rules'); return 'ACTION' }],
[/^\/\*(.|\n|\r)*?\*\//, function() { /* ignore */ }],
[/^\/\/.*/, function() { /* ignore */ }],
[/^(?:\r?\n)+/, function() { /* */ }],
[/^\s+/, function() { /* */ }],
[/^[a-zA-Z_][a-zA-Z0-9_-]*/, function() { return 'NAME' }],
[/^"(\\\\|\\"|[^"])*"/, function() { yytext = yytext.replace(/\\"/g, '"'); return 'STRING_LIT' }],
[/^'(\\\\|\\'|[^'])*'/, function() { yytext = yytext.replace(/\\'/g, "'"); return 'STRING_LIT' }],
[/^\|/, function() { return '|' }],
[/^\[(\\\\|\\\]|[^\]])*\]/, function() { return 'ANY_GROUP_REGEX' }],
[/^\(\?:/, function() { return 'SPECIAL_GROUP' }],
[/^\(\?=/, function() { return 'SPECIAL_GROUP' }],
[/^\(\?!/, function() { return 'SPECIAL_GROUP' }],
[/^\(/, function() { return '(' }],
[/^\)/, function() { return ')' }],
[/^\+/, function() { return '+' }],
[/^\*/, function() { return '*' }],
[/^\?/, function() { return '?' }],
[/^\^/, function() { return '^' }],
[/^,/, function() { return ',' }],
[/^</, function() { this.begin('conditions'); return '<' }],
[/^\/!/, function() { return '/!' }],
[/^\//, function() { return '/' }],
[/^\\([0-7]{1,3}|[rfntvsSbBwWdD\\*+()$\{\}|[\]\/.^?]|c[A-Z]|x[0-9A-F]{2}|u[a-fA-F0-9]{4})/, function() { return 'ESCAPE_CHAR' }],
[/^\\./, function() { yytext = yytext.replace(/^\\/g,''); return 'ESCAPE_CHAR' }],
[/^\$/, function() { return '$' }],
[/^\./, function() { return '.' }],
[/^%options\b/, function() { yy.options = {}; this.begin('options') }],
[/^%s\b/, function() { this.begin('start_condition'); return 'START_INC' }],
[/^%x\b/, function() { this.begin('start_condition'); return 'START_EXC' }],
[/^%%/, function() { this.begin('rules'); return '%%' }],
[/^\{\d+(,\s?\d+|,)?\}/, function() { return 'RANGE_REGEX' }],
[/^\{[a-zA-Z_][a-zA-Z0-9_-]*\}/, function() { return 'NAME_BRACE' }],
[/^\{/, function() { return '{' }],
[/^\}/, function() { return '}' }],
[/^./, function() { /* ignore bad characters */ }],
[/^(.|(?:\r?\n))+/, function() { return 'CODE' }]];
const lexRulesByConditions = {"INITIAL":[0,30,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"indented":[0,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"trail":[0,27,30,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"rules":[0,14,15,16,17,18,30,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"code":[0,68],"start_condition":[0,23,24,25,26],"options":[0,19,20,21,22],"conditions":[0,10,11,12,13],"action":[0,1,2,3,4,5,6,7,8,9]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this.onToken(this._toToken(this._tokensQueue.shift()));
    }

    if (!this.hasMoreTokens()) {
      return this.onToken(EOF_TOKEN);
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this.onToken(this._toToken(token, yytext));
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },

  /**
   * Allows analyzing, and transforming token. Default implementation
   * just passes the token through.
   */
  onToken(token) {
    return token;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Global parsing options. Some options can be shadowed per
 * each `parse` call, if the optations are passed.
 *
 * Initalized to the `captureLocations` which is passed
 * from the generator. Other options can be added at runtime.
 */
yy.options = {
  captureLocations: false,
};

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets global parsing options.
   */
  setOptions(options) {
    yy.options = options;
    return this;
  },

  /**
   * Returns parsing options.
   */
  getOptions() {
    return yy.options;
  },

  /**
   * Parses a string.
   */
  parse(string, parseOptions) {
    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    /**
     * If parse options are passed, override global parse options for
     * this call, and later restore global options.
     */
    let globalOptions = yy.options;
    if (parseOptions) {
      yy.options = Object.assign({}, yy.options, parseOptions);
    }

    /**
     * Allow callers to do setup work based on the
     * parsing string, and passed options.
     */
    yyparse.onParseBegin(string, tokenizer, yy.options);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        // Restore options.
        yy.options = globalOptions;
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        yy.options = globalOptions;
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (yy.options.captureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        shiftedToken = this.onShift(token);

        stack.push(
          {symbol: tokens[shiftedToken.type], semanticValue: shiftedToken.value, loc},
          Number(entry.slice(1))
        );

        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && yy.options.captureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          // Restore options.
          yy.options = globalOptions;
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yy.options = globalOptions;
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();

        // Restore options.
        yy.options = globalOptions;
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string, tokenizer, options) {},
  onParseEnd(parsed) {},

  /**
   * Allows analyzing, and transforming shifted token. Default implementation
   * just passes the token through.
   */
  onShift(token) {
    return token;
  },
};



    function encodeRE(string) {
      return string
        .replace(/([.*+?^$\{\}()|[\]\/\\])/g, '\\$1')
        .replace(/\\\\u([a-fA-F0-9]{4})/g,'\\u$1');
    }

    function prepareString(string) {
      // unescape slashes
      string = string.replace(/\\\\/g, '\\');
      string = encodeRE(string);
      return string;
    }

  

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;