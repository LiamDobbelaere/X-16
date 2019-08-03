// Generated from D:/GitHub/X-16/compiler\Light.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LightListener = require('./LightListener').LightListener;
var grammarFileName = "Light.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00034\u01f5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0003\u0002\u0005\u0002\u008a\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u0092\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0096",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u009b\n\u0005",
    "\r\u0005\u000e\u0005\u009c\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0005\t\u00ad\n\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b5\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00cf\n\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00d3\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e1",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e6\n\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00ef\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00f8",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u010c\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u011f\n\u000f\f\u000f\u000e",
    "\u000f\u0122\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u0129\n\u0010\f\u0010\u000e\u0010\u012c\u000b",
    "\u0010\u0003\u0010\u0005\u0010\u012f\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u013d\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0007\u001b\u0151\n\u001b\f\u001b\u000e\u001b\u0154\u000b\u001b",
    "\u0003\u001c\u0003\u001c\u0007\u001c\u0158\n\u001c\f\u001c\u000e\u001c",
    "\u015b\u000b\u001c\u0003\u001c\u0005\u001c\u015e\n\u001c\u0003\u001c",
    "\u0007\u001c\u0161\n\u001c\f\u001c\u000e\u001c\u0164\u000b\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0006\u001f\u016e\n\u001f\r\u001f\u000e\u001f\u016f",
    "\u0003\u001f\u0003\u001f\u0007\u001f\u0174\n\u001f\f\u001f\u000e\u001f",
    "\u0177\u000b\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0005,\u0196\n,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u0007",
    "2\u01a7\n2\f2\u000e2\u01aa\u000b2\u00052\u01ac\n2\u00032\u00052\u01af",
    "\n2\u00032\u00032\u00033\u00033\u00034\u00054\u01b6\n4\u00034\u0003",
    "4\u00034\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u00038\u0003",
    "8\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003=\u0003",
    "=\u0003=\u0003=\u0003=\u0007=\u01d1\n=\f=\u000e=\u01d4\u000b=\u0005",
    "=\u01d6\n=\u0003=\u0003=\u0003>\u0003>\u0003?\u0005?\u01dd\n?\u0003",
    "?\u0003?\u0003?\u0007?\u01e2\n?\f?\u000e?\u01e5\u000b?\u0003@\u0003",
    "@\u0003@\u0005@\u01ea\n@\u0003A\u0005A\u01ed\nA\u0003B\u0003B\u0003",
    "C\u0003C\u0003D\u0003D\u0003D\u0002\u0003\u001cE\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0002",
    "\u0003\u0003\u0002/1\u0002\u01ef\u0002\u0089\u0003\u0002\u0002\u0002",
    "\u0004\u0091\u0003\u0002\u0002\u0002\u0006\u0093\u0003\u0002\u0002\u0002",
    "\b\u009a\u0003\u0002\u0002\u0002\n\u009e\u0003\u0002\u0002\u0002\f\u00a1",
    "\u0003\u0002\u0002\u0002\u000e\u00a5\u0003\u0002\u0002\u0002\u0010\u00a9",
    "\u0003\u0002\u0002\u0002\u0012\u00ae\u0003\u0002\u0002\u0002\u0014\u00b0",
    "\u0003\u0002\u0002\u0002\u0016\u00b6\u0003\u0002\u0002\u0002\u0018\u00ba",
    "\u0003\u0002\u0002\u0002\u001a\u00bd\u0003\u0002\u0002\u0002\u001c\u00e0",
    "\u0003\u0002\u0002\u0002\u001e\u0123\u0003\u0002\u0002\u0002 \u0130",
    "\u0003\u0002\u0002\u0002\"\u0133\u0003\u0002\u0002\u0002$\u0135\u0003",
    "\u0002\u0002\u0002&\u013c\u0003\u0002\u0002\u0002(\u013e\u0003\u0002",
    "\u0002\u0002*\u0140\u0003\u0002\u0002\u0002,\u0142\u0003\u0002\u0002",
    "\u0002.\u0146\u0003\u0002\u0002\u00020\u0148\u0003\u0002\u0002\u0002",
    "2\u014a\u0003\u0002\u0002\u00024\u014c\u0003\u0002\u0002\u00026\u0155",
    "\u0003\u0002\u0002\u00028\u0167\u0003\u0002\u0002\u0002:\u0169\u0003",
    "\u0002\u0002\u0002<\u016b\u0003\u0002\u0002\u0002>\u0178\u0003\u0002",
    "\u0002\u0002@\u017a\u0003\u0002\u0002\u0002B\u017c\u0003\u0002\u0002",
    "\u0002D\u017e\u0003\u0002\u0002\u0002F\u0180\u0003\u0002\u0002\u0002",
    "H\u0182\u0003\u0002\u0002\u0002J\u0184\u0003\u0002\u0002\u0002L\u0186",
    "\u0003\u0002\u0002\u0002N\u0188\u0003\u0002\u0002\u0002P\u018a\u0003",
    "\u0002\u0002\u0002R\u018c\u0003\u0002\u0002\u0002T\u018e\u0003\u0002",
    "\u0002\u0002V\u0195\u0003\u0002\u0002\u0002X\u0197\u0003\u0002\u0002",
    "\u0002Z\u0199\u0003\u0002\u0002\u0002\\\u019b\u0003\u0002\u0002\u0002",
    "^\u019d\u0003\u0002\u0002\u0002`\u019f\u0003\u0002\u0002\u0002b\u01a1",
    "\u0003\u0002\u0002\u0002d\u01b2\u0003\u0002\u0002\u0002f\u01b5\u0003",
    "\u0002\u0002\u0002h\u01bb\u0003\u0002\u0002\u0002j\u01bd\u0003\u0002",
    "\u0002\u0002l\u01bf\u0003\u0002\u0002\u0002n\u01c1\u0003\u0002\u0002",
    "\u0002p\u01c3\u0003\u0002\u0002\u0002r\u01c5\u0003\u0002\u0002\u0002",
    "t\u01c7\u0003\u0002\u0002\u0002v\u01c9\u0003\u0002\u0002\u0002x\u01cb",
    "\u0003\u0002\u0002\u0002z\u01d9\u0003\u0002\u0002\u0002|\u01dc\u0003",
    "\u0002\u0002\u0002~\u01e6\u0003\u0002\u0002\u0002\u0080\u01ec\u0003",
    "\u0002\u0002\u0002\u0082\u01ee\u0003\u0002\u0002\u0002\u0084\u01f0\u0003",
    "\u0002\u0002\u0002\u0086\u01f2\u0003\u0002\u0002\u0002\u0088\u008a\u0005",
    "\b\u0005\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u0003\u0003\u0002\u0002\u0002\u008b\u0092\u0005",
    "\u0006\u0004\u0002\u008c\u0092\u0005\u000e\b\u0002\u008d\u0092\u0005",
    "\u001a\u000e\u0002\u008e\u0092\u0005\u0014\u000b\u0002\u008f\u0092\u0005",
    "\n\u0006\u0002\u0090\u0092\u0005\f\u0007\u0002\u0091\u008b\u0003\u0002",
    "\u0002\u0002\u0091\u008c\u0003\u0002\u0002\u0002\u0091\u008d\u0003\u0002",
    "\u0002\u0002\u0091\u008e\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0005\u0003\u0002",
    "\u0002\u0002\u0093\u0095\u0007 \u0002\u0002\u0094\u0096\u0005\b\u0005",
    "\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0007!\u0002",
    "\u0002\u0098\u0007\u0003\u0002\u0002\u0002\u0099\u009b\u0005\u0004\u0003",
    "\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d\t\u0003\u0002\u0002\u0002\u009e\u009f\u0005\u001c\u000f",
    "\u0002\u009f\u00a0\u0007-\u0002\u0002\u00a0\u000b\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0007\u0019\u0002\u0002\u00a2\u00a3\u0005\u001c\u000f",
    "\u0002\u00a3\u00a4\u0007-\u0002\u0002\u00a4\r\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0005\u0012\n\u0002\u00a6\u00a7\u0005\u0010\t\u0002\u00a7",
    "\u00a8\u0007-\u0002\u0002\u00a8\u000f\u0003\u0002\u0002\u0002\u00a9",
    "\u00ac\u0007+\u0002\u0002\u00aa\u00ab\u0007\'\u0002\u0002\u00ab\u00ad",
    "\u0005\u001c\u000f\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u0011\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007\u0014\u0002\u0002\u00af\u0013\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u0007\u0015\u0002\u0002\u00b1\u00b2\u0005\u0016\f\u0002\u00b2\u00b4",
    "\u0005\u0004\u0003\u0002\u00b3\u00b5\u0005\u0018\r\u0002\u00b4\u00b3",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u0015",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\"\u0002\u0002\u00b7\u00b8",
    "\u0005\u001c\u000f\u0002\u00b8\u00b9\u0007#\u0002\u0002\u00b9\u0017",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0016\u0002\u0002\u00bb\u00bc",
    "\u0005\u0004\u0003\u0002\u00bc\u0019\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0007\u0017\u0002\u0002\u00be\u00bf\u0007+\u0002\u0002\u00bf\u00c0",
    "\u0007\"\u0002\u0002\u00c0\u00c1\u0005|?\u0002\u00c1\u00c2\u0007#\u0002",
    "\u0002\u00c2\u00c3\u0007 \u0002\u0002\u00c3\u00c4\u0005\u0080A\u0002",
    "\u00c4\u00c5\u0007!\u0002\u0002\u00c5\u001b\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\b\u000f\u0001\u0002\u00c7\u00e1\u0005\u0082B\u0002\u00c8",
    "\u00e1\u00056\u001c\u0002\u00c9\u00e1\u0005b2\u0002\u00ca\u00e1\u0005",
    "\u001e\u0010\u0002\u00cb\u00cc\u0007)\u0002\u0002\u00cc\u00ce\u0005",
    "\u001c\u000f\u0002\u00cd\u00cf\u0005x=\u0002\u00ce\u00cd\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00e1\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0007\u0017\u0002\u0002\u00d1\u00d3\u0007+",
    "\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002",
    "\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5\u0005(",
    "\u0015\u0002\u00d5\u00d6\u0005|?\u0002\u00d6\u00d7\u0005*\u0016\u0002",
    "\u00d7\u00d8\u0007 \u0002\u0002\u00d8\u00d9\u0005\u0080A\u0002\u00d9",
    "\u00da\u0007!\u0002\u0002\u00da\u00e1\u0003\u0002\u0002\u0002\u00db",
    "\u00e1\u0005T+\u0002\u00dc\u00dd\u0005&\u0014\u0002\u00dd\u00de\u0005",
    "$\u0013\u0002\u00de\u00df\u0005,\u0017\u0002\u00df\u00e1\u0003\u0002",
    "\u0002\u0002\u00e0\u00c6\u0003\u0002\u0002\u0002\u00e0\u00c8\u0003\u0002",
    "\u0002\u0002\u00e0\u00c9\u0003\u0002\u0002\u0002\u00e0\u00ca\u0003\u0002",
    "\u0002\u0002\u00e0\u00cb\u0003\u0002\u0002\u0002\u00e0\u00d0\u0003\u0002",
    "\u0002\u0002\u00e0\u00db\u0003\u0002\u0002\u0002\u00e0\u00dc\u0003\u0002",
    "\u0002\u0002\u00e1\u0120\u0003\u0002\u0002\u0002\u00e2\u00e5\f\u000b",
    "\u0002\u0002\u00e3\u00e6\u0005\u0084C\u0002\u00e4\u00e6\u0005\u0086",
    "D\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002",
    "\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0005\u001c",
    "\u000f\f\u00e8\u011f\u0003\u0002\u0002\u0002\u00e9\u00ee\f\n\u0002\u0002",
    "\u00ea\u00ef\u0005p9\u0002\u00eb\u00ef\u0005r:\u0002\u00ec\u00ef\u0005",
    "t;\u0002\u00ed\u00ef\u0005v<\u0002\u00ee\u00ea\u0003\u0002\u0002\u0002",
    "\u00ee\u00eb\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002",
    "\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0005\u001c\u000f\u000b\u00f1\u011f\u0003\u0002\u0002\u0002",
    "\u00f2\u00f7\f\t\u0002\u0002\u00f3\u00f8\u0005n8\u0002\u00f4\u00f8\u0005",
    "J&\u0002\u00f5\u00f8\u0005L\'\u0002\u00f6\u00f8\u0005N(\u0002\u00f7",
    "\u00f3\u0003\u0002\u0002\u0002\u00f7\u00f4\u0003\u0002\u0002\u0002\u00f7",
    "\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0005\u001c\u000f\n\u00fa",
    "\u011f\u0003\u0002\u0002\u0002\u00fb\u00fc\f\b\u0002\u0002\u00fc\u00fd",
    "\u0005F$\u0002\u00fd\u00fe\u0005\u001c\u000f\t\u00fe\u011f\u0003\u0002",
    "\u0002\u0002\u00ff\u0100\f\u0007\u0002\u0002\u0100\u0101\u0005H%\u0002",
    "\u0101\u0102\u0005\u001c\u000f\b\u0102\u011f\u0003\u0002\u0002\u0002",
    "\u0103\u0104\f\u0006\u0002\u0002\u0104\u0105\u0005P)\u0002\u0105\u0106",
    "\u0005\u001c\u000f\u0007\u0106\u011f\u0003\u0002\u0002\u0002\u0107\u010b",
    "\f\u0005\u0002\u0002\u0108\u010c\u0005@!\u0002\u0109\u010c\u0005B\"",
    "\u0002\u010a\u010c\u0005D#\u0002\u010b\u0108\u0003\u0002\u0002\u0002",
    "\u010b\u0109\u0003\u0002\u0002\u0002\u010b\u010a\u0003\u0002\u0002\u0002",
    "\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0005\u001c\u000f\u0006",
    "\u010e\u011f\u0003\u0002\u0002\u0002\u010f\u0110\f\u0004\u0002\u0002",
    "\u0110\u0111\u0005V,\u0002\u0111\u0112\u0005\u001c\u000f\u0005\u0112",
    "\u011f\u0003\u0002\u0002\u0002\u0113\u0114\f\u000f\u0002\u0002\u0114",
    "\u0115\u00058\u001d\u0002\u0115\u0116\u00054\u001b\u0002\u0116\u0117",
    "\u0005:\u001e\u0002\u0117\u011f\u0003\u0002\u0002\u0002\u0118\u0119",
    "\f\r\u0002\u0002\u0119\u011a\u0005R*\u0002\u011a\u011b\u0005T+\u0002",
    "\u011b\u011f\u0003\u0002\u0002\u0002\u011c\u011d\f\f\u0002\u0002\u011d",
    "\u011f\u0005x=\u0002\u011e\u00e2\u0003\u0002\u0002\u0002\u011e\u00e9",
    "\u0003\u0002\u0002\u0002\u011e\u00f2\u0003\u0002\u0002\u0002\u011e\u00fb",
    "\u0003\u0002\u0002\u0002\u011e\u00ff\u0003\u0002\u0002\u0002\u011e\u0103",
    "\u0003\u0002\u0002\u0002\u011e\u0107\u0003\u0002\u0002\u0002\u011e\u010f",
    "\u0003\u0002\u0002\u0002\u011e\u0113\u0003\u0002\u0002\u0002\u011e\u0118",
    "\u0003\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0122",
    "\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0003\u0002\u0002\u0002\u0121\u001d\u0003\u0002\u0002\u0002\u0122\u0120",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u0007\u001a\u0002\u0002\u0124\u012a",
    "\u0005\"\u0012\u0002\u0125\u0126\u00052\u001a\u0002\u0126\u0127\u0005",
    "\"\u0012\u0002\u0127\u0129\u0003\u0002\u0002\u0002\u0128\u0125\u0003",
    "\u0002\u0002\u0002\u0129\u012c\u0003\u0002\u0002\u0002\u012a\u0128\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012e\u0003",
    "\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d\u012f\u0005",
    " \u0011\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012e\u012f\u0003",
    "\u0002\u0002\u0002\u012f\u001f\u0003\u0002\u0002\u0002\u0130\u0131\u0007",
    "*\u0002\u0002\u0131\u0132\u0005\u001c\u000f\u0002\u0132!\u0003\u0002",
    "\u0002\u0002\u0133\u0134\u0005\u001c\u000f\u0002\u0134#\u0003\u0002",
    "\u0002\u0002\u0135\u0136\u0007\u001f\u0002\u0002\u0136%\u0003\u0002",
    "\u0002\u0002\u0137\u013d\u0007+\u0002\u0002\u0138\u0139\u0005(\u0015",
    "\u0002\u0139\u013a\u0005|?\u0002\u013a\u013b\u0005*\u0016\u0002\u013b",
    "\u013d\u0003\u0002\u0002\u0002\u013c\u0137\u0003\u0002\u0002\u0002\u013c",
    "\u0138\u0003\u0002\u0002\u0002\u013d\'\u0003\u0002\u0002\u0002\u013e",
    "\u013f\u0007\"\u0002\u0002\u013f)\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0007#\u0002\u0002\u0141+\u0003\u0002\u0002\u0002\u0142\u0143\u0007",
    " \u0002\u0002\u0143\u0144\u0005\u0080A\u0002\u0144\u0145\u0007!\u0002",
    "\u0002\u0145-\u0003\u0002\u0002\u0002\u0146\u0147\u0007 \u0002\u0002",
    "\u0147/\u0003\u0002\u0002\u0002\u0148\u0149\u0007!\u0002\u0002\u0149",
    "1\u0003\u0002\u0002\u0002\u014a\u014b\u0007,\u0002\u0002\u014b3\u0003",
    "\u0002\u0002\u0002\u014c\u0152\u0005\u001c\u000f\u0002\u014d\u014e\u0005",
    "z>\u0002\u014e\u014f\u0005\u001c\u000f\u0002\u014f\u0151\u0003\u0002",
    "\u0002\u0002\u0150\u014d\u0003\u0002\u0002\u0002\u0151\u0154\u0003\u0002",
    "\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002",
    "\u0002\u0002\u01535\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002",
    "\u0002\u0002\u0155\u0159\u00058\u001d\u0002\u0156\u0158\u0005> \u0002",
    "\u0157\u0156\u0003\u0002\u0002\u0002\u0158\u015b\u0003\u0002\u0002\u0002",
    "\u0159\u0157\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002",
    "\u015a\u015d\u0003\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002",
    "\u015c\u015e\u0005<\u001f\u0002\u015d\u015c\u0003\u0002\u0002\u0002",
    "\u015d\u015e\u0003\u0002\u0002\u0002\u015e\u0162\u0003\u0002\u0002\u0002",
    "\u015f\u0161\u0005> \u0002\u0160\u015f\u0003\u0002\u0002\u0002\u0161",
    "\u0164\u0003\u0002\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162",
    "\u0163\u0003\u0002\u0002\u0002\u0163\u0165\u0003\u0002\u0002\u0002\u0164",
    "\u0162\u0003\u0002\u0002\u0002\u0165\u0166\u0005:\u001e\u0002\u0166",
    "7\u0003\u0002\u0002\u0002\u0167\u0168\u0007$\u0002\u0002\u01689\u0003",
    "\u0002\u0002\u0002\u0169\u016a\u0007%\u0002\u0002\u016a;\u0003\u0002",
    "\u0002\u0002\u016b\u0175\u0005\u001c\u000f\u0002\u016c\u016e\u0005>",
    " \u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002",
    "\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002",
    "\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u0172\u0005\u001c",
    "\u000f\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173\u016d\u0003\u0002",
    "\u0002\u0002\u0174\u0177\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002",
    "\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176=\u0003\u0002",
    "\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0178\u0179\u0007,",
    "\u0002\u0002\u0179?\u0003\u0002\u0002\u0002\u017a\u017b\u0007\u000b",
    "\u0002\u0002\u017bA\u0003\u0002\u0002\u0002\u017c\u017d\u0007\f\u0002",
    "\u0002\u017dC\u0003\u0002\u0002\u0002\u017e\u017f\u0007\r\u0002\u0002",
    "\u017fE\u0003\u0002\u0002\u0002\u0180\u0181\u0007\t\u0002\u0002\u0181",
    "G\u0003\u0002\u0002\u0002\u0182\u0183\u0007\n\u0002\u0002\u0183I\u0003",
    "\u0002\u0002\u0002\u0184\u0185\u0007\u0006\u0002\u0002\u0185K\u0003",
    "\u0002\u0002\u0002\u0186\u0187\u0007\u0007\u0002\u0002\u0187M\u0003",
    "\u0002\u0002\u0002\u0188\u0189\u0007\b\u0002\u0002\u0189O\u0003\u0002",
    "\u0002\u0002\u018a\u018b\u0007\'\u0002\u0002\u018bQ\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u0007(\u0002\u0002\u018dS\u0003\u0002\u0002\u0002",
    "\u018e\u018f\u0007+\u0002\u0002\u018fU\u0003\u0002\u0002\u0002\u0190",
    "\u0196\u0005X-\u0002\u0191\u0196\u0005Z.\u0002\u0192\u0196\u0005\\/",
    "\u0002\u0193\u0196\u0005^0\u0002\u0194\u0196\u0005`1\u0002\u0195\u0190",
    "\u0003\u0002\u0002\u0002\u0195\u0191\u0003\u0002\u0002\u0002\u0195\u0192",
    "\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0194",
    "\u0003\u0002\u0002\u0002\u0196W\u0003\u0002\u0002\u0002\u0197\u0198",
    "\u0007\u000e\u0002\u0002\u0198Y\u0003\u0002\u0002\u0002\u0199\u019a",
    "\u0007\u000f\u0002\u0002\u019a[\u0003\u0002\u0002\u0002\u019b\u019c",
    "\u0007\u0010\u0002\u0002\u019c]\u0003\u0002\u0002\u0002\u019d\u019e",
    "\u0007\u0011\u0002\u0002\u019e_\u0003\u0002\u0002\u0002\u019f\u01a0",
    "\u0007\u0012\u0002\u0002\u01a0a\u0003\u0002\u0002\u0002\u01a1\u01ab",
    "\u0007 \u0002\u0002\u01a2\u01a8\u0005f4\u0002\u01a3\u01a4\u0005d3\u0002",
    "\u01a4\u01a5\u0005f4\u0002\u01a5\u01a7\u0003\u0002\u0002\u0002\u01a6",
    "\u01a3\u0003\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002\u01a8",
    "\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9",
    "\u01ac\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01ab",
    "\u01a2\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002\u01ac",
    "\u01ae\u0003\u0002\u0002\u0002\u01ad\u01af\u0007,\u0002\u0002\u01ae",
    "\u01ad\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af",
    "\u01b0\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007!\u0002\u0002\u01b1",
    "c\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007,\u0002\u0002\u01b3e\u0003",
    "\u0002\u0002\u0002\u01b4\u01b6\u0005h5\u0002\u01b5\u01b4\u0003\u0002",
    "\u0002\u0002\u01b5\u01b6\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002",
    "\u0002\u0002\u01b7\u01b8\u0005l7\u0002\u01b8\u01b9\u0005j6\u0002\u01b9",
    "\u01ba\u0005\u001c\u000f\u0002\u01bag\u0003\u0002\u0002\u0002\u01bb",
    "\u01bc\u0007&\u0002\u0002\u01bci\u0003\u0002\u0002\u0002\u01bd\u01be",
    "\u0007.\u0002\u0002\u01bek\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007",
    "+\u0002\u0002\u01c0m\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007\u0005",
    "\u0002\u0002\u01c2o\u0003\u0002\u0002\u0002\u01c3\u01c4\u0007\u001d",
    "\u0002\u0002\u01c4q\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007\u001e",
    "\u0002\u0002\u01c6s\u0003\u0002\u0002\u0002\u01c7\u01c8\u0007\u001b",
    "\u0002\u0002\u01c8u\u0003\u0002\u0002\u0002\u01c9\u01ca\u0007\u001c",
    "\u0002\u0002\u01caw\u0003\u0002\u0002\u0002\u01cb\u01d5\u0007\"\u0002",
    "\u0002\u01cc\u01d2\u0005\u001c\u000f\u0002\u01cd\u01ce\u0005z>\u0002",
    "\u01ce\u01cf\u0005\u001c\u000f\u0002\u01cf\u01d1\u0003\u0002\u0002\u0002",
    "\u01d0\u01cd\u0003\u0002\u0002\u0002\u01d1\u01d4\u0003\u0002\u0002\u0002",
    "\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2\u01d3\u0003\u0002\u0002\u0002",
    "\u01d3\u01d6\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002\u0002\u0002",
    "\u01d5\u01cc\u0003\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002",
    "\u01d6\u01d7\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007#\u0002\u0002",
    "\u01d8y\u0003\u0002\u0002\u0002\u01d9\u01da\u0007,\u0002\u0002\u01da",
    "{\u0003\u0002\u0002\u0002\u01db\u01dd\u0005~@\u0002\u01dc\u01db\u0003",
    "\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd\u01e3\u0003",
    "\u0002\u0002\u0002\u01de\u01df\u0005z>\u0002\u01df\u01e0\u0005~@\u0002",
    "\u01e0\u01e2\u0003\u0002\u0002\u0002\u01e1\u01de\u0003\u0002\u0002\u0002",
    "\u01e2\u01e5\u0003\u0002\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002",
    "\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4}\u0003\u0002\u0002\u0002",
    "\u01e5\u01e3\u0003\u0002\u0002\u0002\u01e6\u01e9\u0007+\u0002\u0002",
    "\u01e7\u01e8\u0007\'\u0002\u0002\u01e8\u01ea\u0005\u001c\u000f\u0002",
    "\u01e9\u01e7\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002",
    "\u01ea\u007f\u0003\u0002\u0002\u0002\u01eb\u01ed\u0005\b\u0005\u0002",
    "\u01ec\u01eb\u0003\u0002\u0002\u0002\u01ec\u01ed\u0003\u0002\u0002\u0002",
    "\u01ed\u0081\u0003\u0002\u0002\u0002\u01ee\u01ef\t\u0002\u0002\u0002",
    "\u01ef\u0083\u0003\u0002\u0002\u0002\u01f0\u01f1\u0007\u0003\u0002\u0002",
    "\u01f1\u0085\u0003\u0002\u0002\u0002\u01f2\u01f3\u0007\u0004\u0002\u0002",
    "\u01f3\u0087\u0003\u0002\u0002\u0002%\u0089\u0091\u0095\u009c\u00ac",
    "\u00b4\u00ce\u00d2\u00e0\u00e5\u00ee\u00f7\u010b\u011e\u0120\u012a\u012e",
    "\u013c\u0152\u0159\u015d\u0162\u016f\u0175\u0195\u01a8\u01ab\u01ae\u01b5",
    "\u01d2\u01d5\u01dc\u01e3\u01e9\u01ec"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'=='", "'!='", "'==='", "'!=='", 
                     "'&&'", "'||'", "'*'", "'/'", "'%'", "'*='", "'/='", 
                     "'%='", "'+='", "'-='", "'mut'", "'let'", "'if'", "'else'", 
                     "'func'", "'impure'", "'return'", "'array'", "'<='", 
                     "'>='", "'<'", "'>'", "'=>'", "'{'", "'}'", "'('", 
                     "')'", "'['", "']'", "'!'", "'='", "'.'", "'new'", 
                     "'default'", null, "','", "';'", "':'", "'true'" ];

var symbolicNames = [ null, "Add", "Sub", "Equal", "NotEqual", "EqualStrict", 
                      "NotEqualStrict", "LogicalAnd", "LogicalOr", "Multiply", 
                      "Divide", "Modulo", "MultiplyAssign", "DivideAssign", 
                      "ModuloAssign", "AddAssign", "SubAssign", "Mut", "Let", 
                      "If", "Else", "Function", "Impure", "Return", "Array", 
                      "LessOrEql", "GreaterOrEql", "Less", "Greater", "ArrowFunctionArrow", 
                      "BlockOpen", "BlockClose", "ParameterListOpen", "ParameterListClose", 
                      "ArrayLiteralOpen", "ArrayLiteralClose", "FreezeMarker", 
                      "Assign", "MemberDot", "New", "Default", "Identifier", 
                      "ParameterSeparator", "Terminator", "PropertyAssignSymbol", 
                      "Boolean", "String", "Number", "Whitespace", "MultiLineComment", 
                      "SingleLineComment" ];

var ruleNames =  [ "source", "statement", "block", "statements", "expressionStatement", 
                   "returnStatement", "variableStatement", "variableDeclaration", 
                   "varModifier", "ifStatement", "ifConditionList", "elseStatement", 
                   "functionDeclaration", "singleExpression", "arrayInitializer", 
                   "defaultArrayInitValue", "arrayInitializerArg", "arrowFunctionArrow", 
                   "arrowFunctionParameters", "parameterListOpen", "parameterListClose", 
                   "arrowFunctionBody", "openBlock", "closeBlock", "aiParameterSeparator", 
                   "expressionSequence", "arrayLiteral", "arrayLiteralOpen", 
                   "arrayLiteralClose", "elementList", "elementListSeparator", 
                   "multiply", "divide", "modulo", "logicalAnd", "logicalOr", 
                   "notEqual", "equalStrict", "notEqualStrict", "assign", 
                   "memberDot", "identifierName", "assignmentOperator", 
                   "multiplyAssign", "divideAssign", "moduloAssign", "addAssign", 
                   "subAssign", "objectLiteral", "propertySeparator", "propertyAssignment", 
                   "freezeMarker", "propertyAssignSymbol", "propertyName", 
                   "equal", "less", "greater", "lessOrEql", "greaterOrEql", 
                   "arguments", "parameterSeparator", "formalParameterList", 
                   "formalParameterArg", "functionBody", "literal", "add", 
                   "sub" ];

function LightParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LightParser.prototype = Object.create(antlr4.Parser.prototype);
LightParser.prototype.constructor = LightParser;

Object.defineProperty(LightParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LightParser.EOF = antlr4.Token.EOF;
LightParser.Add = 1;
LightParser.Sub = 2;
LightParser.Equal = 3;
LightParser.NotEqual = 4;
LightParser.EqualStrict = 5;
LightParser.NotEqualStrict = 6;
LightParser.LogicalAnd = 7;
LightParser.LogicalOr = 8;
LightParser.Multiply = 9;
LightParser.Divide = 10;
LightParser.Modulo = 11;
LightParser.MultiplyAssign = 12;
LightParser.DivideAssign = 13;
LightParser.ModuloAssign = 14;
LightParser.AddAssign = 15;
LightParser.SubAssign = 16;
LightParser.Mut = 17;
LightParser.Let = 18;
LightParser.If = 19;
LightParser.Else = 20;
LightParser.Function = 21;
LightParser.Impure = 22;
LightParser.Return = 23;
LightParser.Array = 24;
LightParser.LessOrEql = 25;
LightParser.GreaterOrEql = 26;
LightParser.Less = 27;
LightParser.Greater = 28;
LightParser.ArrowFunctionArrow = 29;
LightParser.BlockOpen = 30;
LightParser.BlockClose = 31;
LightParser.ParameterListOpen = 32;
LightParser.ParameterListClose = 33;
LightParser.ArrayLiteralOpen = 34;
LightParser.ArrayLiteralClose = 35;
LightParser.FreezeMarker = 36;
LightParser.Assign = 37;
LightParser.MemberDot = 38;
LightParser.New = 39;
LightParser.Default = 40;
LightParser.Identifier = 41;
LightParser.ParameterSeparator = 42;
LightParser.Terminator = 43;
LightParser.PropertyAssignSymbol = 44;
LightParser.Boolean = 45;
LightParser.String = 46;
LightParser.Number = 47;
LightParser.Whitespace = 48;
LightParser.MultiLineComment = 49;
LightParser.SingleLineComment = 50;

LightParser.RULE_source = 0;
LightParser.RULE_statement = 1;
LightParser.RULE_block = 2;
LightParser.RULE_statements = 3;
LightParser.RULE_expressionStatement = 4;
LightParser.RULE_returnStatement = 5;
LightParser.RULE_variableStatement = 6;
LightParser.RULE_variableDeclaration = 7;
LightParser.RULE_varModifier = 8;
LightParser.RULE_ifStatement = 9;
LightParser.RULE_ifConditionList = 10;
LightParser.RULE_elseStatement = 11;
LightParser.RULE_functionDeclaration = 12;
LightParser.RULE_singleExpression = 13;
LightParser.RULE_arrayInitializer = 14;
LightParser.RULE_defaultArrayInitValue = 15;
LightParser.RULE_arrayInitializerArg = 16;
LightParser.RULE_arrowFunctionArrow = 17;
LightParser.RULE_arrowFunctionParameters = 18;
LightParser.RULE_parameterListOpen = 19;
LightParser.RULE_parameterListClose = 20;
LightParser.RULE_arrowFunctionBody = 21;
LightParser.RULE_openBlock = 22;
LightParser.RULE_closeBlock = 23;
LightParser.RULE_aiParameterSeparator = 24;
LightParser.RULE_expressionSequence = 25;
LightParser.RULE_arrayLiteral = 26;
LightParser.RULE_arrayLiteralOpen = 27;
LightParser.RULE_arrayLiteralClose = 28;
LightParser.RULE_elementList = 29;
LightParser.RULE_elementListSeparator = 30;
LightParser.RULE_multiply = 31;
LightParser.RULE_divide = 32;
LightParser.RULE_modulo = 33;
LightParser.RULE_logicalAnd = 34;
LightParser.RULE_logicalOr = 35;
LightParser.RULE_notEqual = 36;
LightParser.RULE_equalStrict = 37;
LightParser.RULE_notEqualStrict = 38;
LightParser.RULE_assign = 39;
LightParser.RULE_memberDot = 40;
LightParser.RULE_identifierName = 41;
LightParser.RULE_assignmentOperator = 42;
LightParser.RULE_multiplyAssign = 43;
LightParser.RULE_divideAssign = 44;
LightParser.RULE_moduloAssign = 45;
LightParser.RULE_addAssign = 46;
LightParser.RULE_subAssign = 47;
LightParser.RULE_objectLiteral = 48;
LightParser.RULE_propertySeparator = 49;
LightParser.RULE_propertyAssignment = 50;
LightParser.RULE_freezeMarker = 51;
LightParser.RULE_propertyAssignSymbol = 52;
LightParser.RULE_propertyName = 53;
LightParser.RULE_equal = 54;
LightParser.RULE_less = 55;
LightParser.RULE_greater = 56;
LightParser.RULE_lessOrEql = 57;
LightParser.RULE_greaterOrEql = 58;
LightParser.RULE_arguments = 59;
LightParser.RULE_parameterSeparator = 60;
LightParser.RULE_formalParameterList = 61;
LightParser.RULE_formalParameterArg = 62;
LightParser.RULE_functionBody = 63;
LightParser.RULE_literal = 64;
LightParser.RULE_add = 65;
LightParser.RULE_sub = 66;


function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitSource(this);
	}
};




LightParser.SourceContext = SourceContext;

LightParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LightParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (LightParser.Let - 18)) | (1 << (LightParser.If - 18)) | (1 << (LightParser.Function - 18)) | (1 << (LightParser.Return - 18)) | (1 << (LightParser.Array - 18)) | (1 << (LightParser.BlockOpen - 18)) | (1 << (LightParser.ParameterListOpen - 18)) | (1 << (LightParser.ArrayLiteralOpen - 18)) | (1 << (LightParser.New - 18)) | (1 << (LightParser.Identifier - 18)) | (1 << (LightParser.Boolean - 18)) | (1 << (LightParser.String - 18)) | (1 << (LightParser.Number - 18)))) !== 0)) {
            this.state = 134;
            this.statements();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitStatement(this);
	}
};




LightParser.StatementContext = StatementContext;

LightParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LightParser.RULE_statement);
    try {
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.variableStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 139;
            this.functionDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 140;
            this.ifStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 141;
            this.expressionStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 142;
            this.returnStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

BlockContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

BlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitBlock(this);
	}
};




LightParser.BlockContext = BlockContext;

LightParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LightParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(LightParser.BlockOpen);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (LightParser.Let - 18)) | (1 << (LightParser.If - 18)) | (1 << (LightParser.Function - 18)) | (1 << (LightParser.Return - 18)) | (1 << (LightParser.Array - 18)) | (1 << (LightParser.BlockOpen - 18)) | (1 << (LightParser.ParameterListOpen - 18)) | (1 << (LightParser.ArrayLiteralOpen - 18)) | (1 << (LightParser.New - 18)) | (1 << (LightParser.Identifier - 18)) | (1 << (LightParser.Boolean - 18)) | (1 << (LightParser.String - 18)) | (1 << (LightParser.Number - 18)))) !== 0)) {
            this.state = 146;
            this.statements();
        }

        this.state = 149;
        this.match(LightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitStatements(this);
	}
};




LightParser.StatementsContext = StatementsContext;

LightParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LightParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this.statement();
            this.state = 154; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (LightParser.Let - 18)) | (1 << (LightParser.If - 18)) | (1 << (LightParser.Function - 18)) | (1 << (LightParser.Return - 18)) | (1 << (LightParser.Array - 18)) | (1 << (LightParser.BlockOpen - 18)) | (1 << (LightParser.ParameterListOpen - 18)) | (1 << (LightParser.ArrayLiteralOpen - 18)) | (1 << (LightParser.New - 18)) | (1 << (LightParser.Identifier - 18)) | (1 << (LightParser.Boolean - 18)) | (1 << (LightParser.String - 18)) | (1 << (LightParser.Number - 18)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ExpressionStatementContext.prototype.Terminator = function() {
    return this.getToken(LightParser.Terminator, 0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitExpressionStatement(this);
	}
};




LightParser.ExpressionStatementContext = ExpressionStatementContext;

LightParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LightParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.singleExpression(0);
        this.state = 157;
        this.match(LightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(LightParser.Return, 0);
};

ReturnStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ReturnStatementContext.prototype.Terminator = function() {
    return this.getToken(LightParser.Terminator, 0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitReturnStatement(this);
	}
};




LightParser.ReturnStatementContext = ReturnStatementContext;

LightParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LightParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(LightParser.Return);
        this.state = 160;
        this.singleExpression(0);
        this.state = 161;
        this.match(LightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.varModifier = function() {
    return this.getTypedRuleContext(VarModifierContext,0);
};

VariableStatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

VariableStatementContext.prototype.Terminator = function() {
    return this.getToken(LightParser.Terminator, 0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitVariableStatement(this);
	}
};




LightParser.VariableStatementContext = VariableStatementContext;

LightParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LightParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.varModifier();
        this.state = 164;
        this.variableDeclaration();
        this.state = 165;
        this.match(LightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

VariableDeclarationContext.prototype.Assign = function() {
    return this.getToken(LightParser.Assign, 0);
};

VariableDeclarationContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitVariableDeclaration(this);
	}
};




LightParser.VariableDeclarationContext = VariableDeclarationContext;

LightParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LightParser.RULE_variableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(LightParser.Identifier);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.Assign) {
            this.state = 168;
            this.match(LightParser.Assign);
            this.state = 169;
            this.singleExpression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_varModifier;
    return this;
}

VarModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarModifierContext.prototype.constructor = VarModifierContext;

VarModifierContext.prototype.Let = function() {
    return this.getToken(LightParser.Let, 0);
};

VarModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterVarModifier(this);
	}
};

VarModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitVarModifier(this);
	}
};




LightParser.VarModifierContext = VarModifierContext;

LightParser.prototype.varModifier = function() {

    var localctx = new VarModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LightParser.RULE_varModifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(LightParser.Let);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(LightParser.If, 0);
};

IfStatementContext.prototype.ifConditionList = function() {
    return this.getTypedRuleContext(IfConditionListContext,0);
};

IfStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IfStatementContext.prototype.elseStatement = function() {
    return this.getTypedRuleContext(ElseStatementContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitIfStatement(this);
	}
};




LightParser.IfStatementContext = IfStatementContext;

LightParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LightParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(LightParser.If);
        this.state = 175;
        this.ifConditionList();
        this.state = 176;
        this.statement();
        this.state = 178;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 177;
            this.elseStatement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfConditionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_ifConditionList;
    return this;
}

IfConditionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfConditionListContext.prototype.constructor = IfConditionListContext;

IfConditionListContext.prototype.ParameterListOpen = function() {
    return this.getToken(LightParser.ParameterListOpen, 0);
};

IfConditionListContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

IfConditionListContext.prototype.ParameterListClose = function() {
    return this.getToken(LightParser.ParameterListClose, 0);
};

IfConditionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterIfConditionList(this);
	}
};

IfConditionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitIfConditionList(this);
	}
};




LightParser.IfConditionListContext = IfConditionListContext;

LightParser.prototype.ifConditionList = function() {

    var localctx = new IfConditionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LightParser.RULE_ifConditionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(LightParser.ParameterListOpen);
        this.state = 181;
        this.singleExpression(0);
        this.state = 182;
        this.match(LightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_elseStatement;
    return this;
}

ElseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatementContext.prototype.constructor = ElseStatementContext;

ElseStatementContext.prototype.Else = function() {
    return this.getToken(LightParser.Else, 0);
};

ElseStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ElseStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterElseStatement(this);
	}
};

ElseStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitElseStatement(this);
	}
};




LightParser.ElseStatementContext = ElseStatementContext;

LightParser.prototype.elseStatement = function() {

    var localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LightParser.RULE_elseStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(LightParser.Else);
        this.state = 185;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(LightParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.ParameterListOpen = function() {
    return this.getToken(LightParser.ParameterListOpen, 0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionDeclarationContext.prototype.ParameterListClose = function() {
    return this.getToken(LightParser.ParameterListClose, 0);
};

FunctionDeclarationContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




LightParser.FunctionDeclarationContext = FunctionDeclarationContext;

LightParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LightParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(LightParser.Function);
        this.state = 188;
        this.match(LightParser.Identifier);
        this.state = 189;
        this.match(LightParser.ParameterListOpen);
        this.state = 190;
        this.formalParameterList();
        this.state = 191;
        this.match(LightParser.ParameterListClose);
        this.state = 192;
        this.match(LightParser.BlockOpen);
        this.state = 193;
        this.functionBody();
        this.state = 194;
        this.match(LightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SingleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_singleExpression;
    return this;
}

SingleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExpressionContext.prototype.constructor = SingleExpressionContext;


 
SingleExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AdditiveExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

LightParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AdditiveExpressionContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

AdditiveExpressionContext.prototype.sub = function() {
    return this.getTypedRuleContext(SubContext,0);
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAdditiveExpression(this);
	}
};


function RelationalExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

LightParser.RelationalExpressionContext = RelationalExpressionContext;

RelationalExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.less = function() {
    return this.getTypedRuleContext(LessContext,0);
};

RelationalExpressionContext.prototype.greater = function() {
    return this.getTypedRuleContext(GreaterContext,0);
};

RelationalExpressionContext.prototype.lessOrEql = function() {
    return this.getTypedRuleContext(LessOrEqlContext,0);
};

RelationalExpressionContext.prototype.greaterOrEql = function() {
    return this.getTypedRuleContext(GreaterOrEqlContext,0);
};
RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitRelationalExpression(this);
	}
};


function LogicalAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalAndExpressionContext.prototype.constructor = LogicalAndExpressionContext;

LightParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

LogicalAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalAndExpressionContext.prototype.logicalAnd = function() {
    return this.getTypedRuleContext(LogicalAndContext,0);
};
LogicalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLogicalAndExpression(this);
	}
};


function ObjectLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ObjectLiteralExpressionContext.prototype.constructor = ObjectLiteralExpressionContext;

LightParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitObjectLiteralExpression(this);
	}
};


function NewExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

LightParser.NewExpressionContext = NewExpressionContext;

NewExpressionContext.prototype.New = function() {
    return this.getToken(LightParser.New, 0);
};

NewExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

NewExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitNewExpression(this);
	}
};


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

LightParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLiteralExpression(this);
	}
};


function LogicalOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalOrExpressionContext.prototype.constructor = LogicalOrExpressionContext;

LightParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

LogicalOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalOrExpressionContext.prototype.logicalOr = function() {
    return this.getTypedRuleContext(LogicalOrContext,0);
};
LogicalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLogicalOrExpression(this);
	}
};


function ArrayLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayLiteralExpressionContext.prototype.constructor = ArrayLiteralExpressionContext;

LightParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayLiteralExpression(this);
	}
};


function MemberDotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberDotExpressionContext.prototype.constructor = MemberDotExpressionContext;

LightParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.memberDot = function() {
    return this.getTypedRuleContext(MemberDotContext,0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMemberDotExpression(this);
	}
};


function MemberIndexExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberIndexExpressionContext.prototype.constructor = MemberIndexExpressionContext;

LightParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.arrayLiteralOpen = function() {
    return this.getTypedRuleContext(ArrayLiteralOpenContext,0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

MemberIndexExpressionContext.prototype.arrayLiteralClose = function() {
    return this.getTypedRuleContext(ArrayLiteralCloseContext,0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMemberIndexExpression(this);
	}
};


function ArrayInitializerExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayInitializerExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayInitializerExpressionContext.prototype.constructor = ArrayInitializerExpressionContext;

LightParser.ArrayInitializerExpressionContext = ArrayInitializerExpressionContext;

ArrayInitializerExpressionContext.prototype.arrayInitializer = function() {
    return this.getTypedRuleContext(ArrayInitializerContext,0);
};
ArrayInitializerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayInitializerExpression(this);
	}
};

ArrayInitializerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayInitializerExpression(this);
	}
};


function IdentifierExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

LightParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitIdentifierExpression(this);
	}
};


function ArgumentsExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgumentsExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArgumentsExpressionContext.prototype.constructor = ArgumentsExpressionContext;

LightParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArgumentsExpression(this);
	}
};


function FunctionExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

LightParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(LightParser.Function, 0);
};

FunctionExpressionContext.prototype.parameterListOpen = function() {
    return this.getTypedRuleContext(ParameterListOpenContext,0);
};

FunctionExpressionContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionExpressionContext.prototype.parameterListClose = function() {
    return this.getTypedRuleContext(ParameterListCloseContext,0);
};

FunctionExpressionContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

FunctionExpressionContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFunctionExpression(this);
	}
};


function AssignmentExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

LightParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AssignmentExpressionContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAssignmentExpression(this);
	}
};


function AssignmentOperatorExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentOperatorExpressionContext.prototype.constructor = AssignmentOperatorExpressionContext;

LightParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

AssignmentOperatorExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AssignmentOperatorExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};
AssignmentOperatorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAssignmentOperatorExpression(this);
	}
};


function ArrowFunctionExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrowFunctionExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrowFunctionExpressionContext.prototype.constructor = ArrowFunctionExpressionContext;

LightParser.ArrowFunctionExpressionContext = ArrowFunctionExpressionContext;

ArrowFunctionExpressionContext.prototype.arrowFunctionParameters = function() {
    return this.getTypedRuleContext(ArrowFunctionParametersContext,0);
};

ArrowFunctionExpressionContext.prototype.arrowFunctionArrow = function() {
    return this.getTypedRuleContext(ArrowFunctionArrowContext,0);
};

ArrowFunctionExpressionContext.prototype.arrowFunctionBody = function() {
    return this.getTypedRuleContext(ArrowFunctionBodyContext,0);
};
ArrowFunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrowFunctionExpression(this);
	}
};

ArrowFunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrowFunctionExpression(this);
	}
};


function EqualityExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

LightParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

EqualityExpressionContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

EqualityExpressionContext.prototype.notEqual = function() {
    return this.getTypedRuleContext(NotEqualContext,0);
};

EqualityExpressionContext.prototype.equalStrict = function() {
    return this.getTypedRuleContext(EqualStrictContext,0);
};

EqualityExpressionContext.prototype.notEqualStrict = function() {
    return this.getTypedRuleContext(NotEqualStrictContext,0);
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitEqualityExpression(this);
	}
};


function MultiplicativeExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

LightParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

MultiplicativeExpressionContext.prototype.multiply = function() {
    return this.getTypedRuleContext(MultiplyContext,0);
};

MultiplicativeExpressionContext.prototype.divide = function() {
    return this.getTypedRuleContext(DivideContext,0);
};

MultiplicativeExpressionContext.prototype.modulo = function() {
    return this.getTypedRuleContext(ModuloContext,0);
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};



LightParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, LightParser.RULE_singleExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 197;
            this.literal();
            break;

        case 2:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 198;
            this.arrayLiteral();
            break;

        case 3:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 199;
            this.objectLiteral();
            break;

        case 4:
            localctx = new ArrayInitializerExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 200;
            this.arrayInitializer();
            break;

        case 5:
            localctx = new NewExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 201;
            this.match(LightParser.New);
            this.state = 202;
            this.singleExpression(0);
            this.state = 204;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 203;
                this.arguments();

            }
            break;

        case 6:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 206;
            this.match(LightParser.Function);
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LightParser.Identifier) {
                this.state = 207;
                this.match(LightParser.Identifier);
            }

            this.state = 210;
            this.parameterListOpen();
            this.state = 211;
            this.formalParameterList();
            this.state = 212;
            this.parameterListClose();
            this.state = 213;
            this.match(LightParser.BlockOpen);
            this.state = 214;
            this.functionBody();
            this.state = 215;
            this.match(LightParser.BlockClose);
            break;

        case 7:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 217;
            this.identifierName();
            break;

        case 8:
            localctx = new ArrowFunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 218;
            this.arrowFunctionParameters();
            this.state = 219;
            this.arrowFunctionArrow();
            this.state = 220;
            this.arrowFunctionBody();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 286;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 284;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 224;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 227;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LightParser.Add:
                        this.state = 225;
                        this.add();
                        break;
                    case LightParser.Sub:
                        this.state = 226;
                        this.sub();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 229;
                    this.singleExpression(10);
                    break;

                case 2:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LightParser.Less:
                        this.state = 232;
                        this.less();
                        break;
                    case LightParser.Greater:
                        this.state = 233;
                        this.greater();
                        break;
                    case LightParser.LessOrEql:
                        this.state = 234;
                        this.lessOrEql();
                        break;
                    case LightParser.GreaterOrEql:
                        this.state = 235;
                        this.greaterOrEql();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 238;
                    this.singleExpression(9);
                    break;

                case 3:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 240;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 245;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LightParser.Equal:
                        this.state = 241;
                        this.equal();
                        break;
                    case LightParser.NotEqual:
                        this.state = 242;
                        this.notEqual();
                        break;
                    case LightParser.EqualStrict:
                        this.state = 243;
                        this.equalStrict();
                        break;
                    case LightParser.NotEqualStrict:
                        this.state = 244;
                        this.notEqualStrict();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 247;
                    this.singleExpression(8);
                    break;

                case 4:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 249;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 250;
                    this.logicalAnd();
                    this.state = 251;
                    this.singleExpression(7);
                    break;

                case 5:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 253;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 254;
                    this.logicalOr();
                    this.state = 255;
                    this.singleExpression(6);
                    break;

                case 6:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 257;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 258;
                    this.assign();
                    this.state = 259;
                    this.singleExpression(5);
                    break;

                case 7:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 261;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 265;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LightParser.Multiply:
                        this.state = 262;
                        this.multiply();
                        break;
                    case LightParser.Divide:
                        this.state = 263;
                        this.divide();
                        break;
                    case LightParser.Modulo:
                        this.state = 264;
                        this.modulo();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 267;
                    this.singleExpression(4);
                    break;

                case 8:
                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 269;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 270;
                    this.assignmentOperator();
                    this.state = 271;
                    this.singleExpression(3);
                    break;

                case 9:
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 273;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 274;
                    this.arrayLiteralOpen();
                    this.state = 275;
                    this.expressionSequence();
                    this.state = 276;
                    this.arrayLiteralClose();
                    break;

                case 10:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 278;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 279;
                    this.memberDot();
                    this.state = 280;
                    this.identifierName();
                    break;

                case 11:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LightParser.RULE_singleExpression);
                    this.state = 282;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 283;
                    this.arguments();
                    break;

                } 
            }
            this.state = 288;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrayInitializer;
    return this;
}

ArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerContext.prototype.constructor = ArrayInitializerContext;

ArrayInitializerContext.prototype.Array = function() {
    return this.getToken(LightParser.Array, 0);
};

ArrayInitializerContext.prototype.arrayInitializerArg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayInitializerArgContext);
    } else {
        return this.getTypedRuleContext(ArrayInitializerArgContext,i);
    }
};

ArrayInitializerContext.prototype.aiParameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AiParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(AiParameterSeparatorContext,i);
    }
};

ArrayInitializerContext.prototype.defaultArrayInitValue = function() {
    return this.getTypedRuleContext(DefaultArrayInitValueContext,0);
};

ArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayInitializer(this);
	}
};




LightParser.ArrayInitializerContext = ArrayInitializerContext;

LightParser.prototype.arrayInitializer = function() {

    var localctx = new ArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LightParser.RULE_arrayInitializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(LightParser.Array);
        this.state = 290;
        this.arrayInitializerArg();
        this.state = 296;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 291;
                this.aiParameterSeparator();
                this.state = 292;
                this.arrayInitializerArg(); 
            }
            this.state = 298;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 300;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 299;
            this.defaultArrayInitValue();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DefaultArrayInitValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_defaultArrayInitValue;
    return this;
}

DefaultArrayInitValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultArrayInitValueContext.prototype.constructor = DefaultArrayInitValueContext;

DefaultArrayInitValueContext.prototype.Default = function() {
    return this.getToken(LightParser.Default, 0);
};

DefaultArrayInitValueContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

DefaultArrayInitValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterDefaultArrayInitValue(this);
	}
};

DefaultArrayInitValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitDefaultArrayInitValue(this);
	}
};




LightParser.DefaultArrayInitValueContext = DefaultArrayInitValueContext;

LightParser.prototype.defaultArrayInitValue = function() {

    var localctx = new DefaultArrayInitValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LightParser.RULE_defaultArrayInitValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(LightParser.Default);
        this.state = 303;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayInitializerArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrayInitializerArg;
    return this;
}

ArrayInitializerArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerArgContext.prototype.constructor = ArrayInitializerArgContext;

ArrayInitializerArgContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArrayInitializerArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayInitializerArg(this);
	}
};

ArrayInitializerArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayInitializerArg(this);
	}
};




LightParser.ArrayInitializerArgContext = ArrayInitializerArgContext;

LightParser.prototype.arrayInitializerArg = function() {

    var localctx = new ArrayInitializerArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LightParser.RULE_arrayInitializerArg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrowFunctionArrowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrowFunctionArrow;
    return this;
}

ArrowFunctionArrowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionArrowContext.prototype.constructor = ArrowFunctionArrowContext;

ArrowFunctionArrowContext.prototype.ArrowFunctionArrow = function() {
    return this.getToken(LightParser.ArrowFunctionArrow, 0);
};

ArrowFunctionArrowContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrowFunctionArrow(this);
	}
};

ArrowFunctionArrowContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrowFunctionArrow(this);
	}
};




LightParser.ArrowFunctionArrowContext = ArrowFunctionArrowContext;

LightParser.prototype.arrowFunctionArrow = function() {

    var localctx = new ArrowFunctionArrowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LightParser.RULE_arrowFunctionArrow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(LightParser.ArrowFunctionArrow);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrowFunctionParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrowFunctionParameters;
    return this;
}

ArrowFunctionParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionParametersContext.prototype.constructor = ArrowFunctionParametersContext;

ArrowFunctionParametersContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

ArrowFunctionParametersContext.prototype.parameterListOpen = function() {
    return this.getTypedRuleContext(ParameterListOpenContext,0);
};

ArrowFunctionParametersContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

ArrowFunctionParametersContext.prototype.parameterListClose = function() {
    return this.getTypedRuleContext(ParameterListCloseContext,0);
};

ArrowFunctionParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrowFunctionParameters(this);
	}
};

ArrowFunctionParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrowFunctionParameters(this);
	}
};




LightParser.ArrowFunctionParametersContext = ArrowFunctionParametersContext;

LightParser.prototype.arrowFunctionParameters = function() {

    var localctx = new ArrowFunctionParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LightParser.RULE_arrowFunctionParameters);
    try {
        this.state = 314;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LightParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 309;
            this.match(LightParser.Identifier);
            break;
        case LightParser.ParameterListOpen:
            this.enterOuterAlt(localctx, 2);
            this.state = 310;
            this.parameterListOpen();
            this.state = 311;
            this.formalParameterList();
            this.state = 312;
            this.parameterListClose();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterListOpenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_parameterListOpen;
    return this;
}

ParameterListOpenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListOpenContext.prototype.constructor = ParameterListOpenContext;

ParameterListOpenContext.prototype.ParameterListOpen = function() {
    return this.getToken(LightParser.ParameterListOpen, 0);
};

ParameterListOpenContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterParameterListOpen(this);
	}
};

ParameterListOpenContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitParameterListOpen(this);
	}
};




LightParser.ParameterListOpenContext = ParameterListOpenContext;

LightParser.prototype.parameterListOpen = function() {

    var localctx = new ParameterListOpenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LightParser.RULE_parameterListOpen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.match(LightParser.ParameterListOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterListCloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_parameterListClose;
    return this;
}

ParameterListCloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListCloseContext.prototype.constructor = ParameterListCloseContext;

ParameterListCloseContext.prototype.ParameterListClose = function() {
    return this.getToken(LightParser.ParameterListClose, 0);
};

ParameterListCloseContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterParameterListClose(this);
	}
};

ParameterListCloseContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitParameterListClose(this);
	}
};




LightParser.ParameterListCloseContext = ParameterListCloseContext;

LightParser.prototype.parameterListClose = function() {

    var localctx = new ParameterListCloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LightParser.RULE_parameterListClose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(LightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrowFunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrowFunctionBody;
    return this;
}

ArrowFunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionBodyContext.prototype.constructor = ArrowFunctionBodyContext;

ArrowFunctionBodyContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

ArrowFunctionBodyContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

ArrowFunctionBodyContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

ArrowFunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrowFunctionBody(this);
	}
};

ArrowFunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrowFunctionBody(this);
	}
};




LightParser.ArrowFunctionBodyContext = ArrowFunctionBodyContext;

LightParser.prototype.arrowFunctionBody = function() {

    var localctx = new ArrowFunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LightParser.RULE_arrowFunctionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(LightParser.BlockOpen);
        this.state = 321;
        this.functionBody();
        this.state = 322;
        this.match(LightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OpenBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_openBlock;
    return this;
}

OpenBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpenBlockContext.prototype.constructor = OpenBlockContext;

OpenBlockContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

OpenBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterOpenBlock(this);
	}
};

OpenBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitOpenBlock(this);
	}
};




LightParser.OpenBlockContext = OpenBlockContext;

LightParser.prototype.openBlock = function() {

    var localctx = new OpenBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LightParser.RULE_openBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(LightParser.BlockOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CloseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_closeBlock;
    return this;
}

CloseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CloseBlockContext.prototype.constructor = CloseBlockContext;

CloseBlockContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

CloseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterCloseBlock(this);
	}
};

CloseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitCloseBlock(this);
	}
};




LightParser.CloseBlockContext = CloseBlockContext;

LightParser.prototype.closeBlock = function() {

    var localctx = new CloseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LightParser.RULE_closeBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.match(LightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AiParameterSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_aiParameterSeparator;
    return this;
}

AiParameterSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AiParameterSeparatorContext.prototype.constructor = AiParameterSeparatorContext;

AiParameterSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(LightParser.ParameterSeparator, 0);
};

AiParameterSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAiParameterSeparator(this);
	}
};

AiParameterSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAiParameterSeparator(this);
	}
};




LightParser.AiParameterSeparatorContext = AiParameterSeparatorContext;

LightParser.prototype.aiParameterSeparator = function() {

    var localctx = new AiParameterSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LightParser.RULE_aiParameterSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.match(LightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_expressionSequence;
    return this;
}

ExpressionSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionSequenceContext.prototype.constructor = ExpressionSequenceContext;

ExpressionSequenceContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ExpressionSequenceContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

ExpressionSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitExpressionSequence(this);
	}
};




LightParser.ExpressionSequenceContext = ExpressionSequenceContext;

LightParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LightParser.RULE_expressionSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.singleExpression(0);
        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LightParser.ParameterSeparator) {
            this.state = 331;
            this.parameterSeparator();
            this.state = 332;
            this.singleExpression(0);
            this.state = 338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.arrayLiteralOpen = function() {
    return this.getTypedRuleContext(ArrayLiteralOpenContext,0);
};

ArrayLiteralContext.prototype.arrayLiteralClose = function() {
    return this.getTypedRuleContext(ArrayLiteralCloseContext,0);
};

ArrayLiteralContext.prototype.elementListSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementListSeparatorContext);
    } else {
        return this.getTypedRuleContext(ElementListSeparatorContext,i);
    }
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayLiteral(this);
	}
};




LightParser.ArrayLiteralContext = ArrayLiteralContext;

LightParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, LightParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.arrayLiteralOpen();
        this.state = 343;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 340;
                this.elementListSeparator(); 
            }
            this.state = 345;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (LightParser.Function - 21)) | (1 << (LightParser.Array - 21)) | (1 << (LightParser.BlockOpen - 21)) | (1 << (LightParser.ParameterListOpen - 21)) | (1 << (LightParser.ArrayLiteralOpen - 21)) | (1 << (LightParser.New - 21)) | (1 << (LightParser.Identifier - 21)) | (1 << (LightParser.Boolean - 21)) | (1 << (LightParser.String - 21)) | (1 << (LightParser.Number - 21)))) !== 0)) {
            this.state = 346;
            this.elementList();
        }

        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LightParser.ParameterSeparator) {
            this.state = 349;
            this.elementListSeparator();
            this.state = 354;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 355;
        this.arrayLiteralClose();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayLiteralOpenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrayLiteralOpen;
    return this;
}

ArrayLiteralOpenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralOpenContext.prototype.constructor = ArrayLiteralOpenContext;

ArrayLiteralOpenContext.prototype.ArrayLiteralOpen = function() {
    return this.getToken(LightParser.ArrayLiteralOpen, 0);
};

ArrayLiteralOpenContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayLiteralOpen(this);
	}
};

ArrayLiteralOpenContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayLiteralOpen(this);
	}
};




LightParser.ArrayLiteralOpenContext = ArrayLiteralOpenContext;

LightParser.prototype.arrayLiteralOpen = function() {

    var localctx = new ArrayLiteralOpenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LightParser.RULE_arrayLiteralOpen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(LightParser.ArrayLiteralOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayLiteralCloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arrayLiteralClose;
    return this;
}

ArrayLiteralCloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralCloseContext.prototype.constructor = ArrayLiteralCloseContext;

ArrayLiteralCloseContext.prototype.ArrayLiteralClose = function() {
    return this.getToken(LightParser.ArrayLiteralClose, 0);
};

ArrayLiteralCloseContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArrayLiteralClose(this);
	}
};

ArrayLiteralCloseContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArrayLiteralClose(this);
	}
};




LightParser.ArrayLiteralCloseContext = ArrayLiteralCloseContext;

LightParser.prototype.arrayLiteralClose = function() {

    var localctx = new ArrayLiteralCloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, LightParser.RULE_arrayLiteralClose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.match(LightParser.ArrayLiteralClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ElementListContext.prototype.elementListSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementListSeparatorContext);
    } else {
        return this.getTypedRuleContext(ElementListSeparatorContext,i);
    }
};

ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitElementList(this);
	}
};




LightParser.ElementListContext = ElementListContext;

LightParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, LightParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.singleExpression(0);
        this.state = 371;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 363; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 362;
                    this.elementListSeparator();
                    this.state = 365; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===LightParser.ParameterSeparator);
                this.state = 367;
                this.singleExpression(0); 
            }
            this.state = 373;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementListSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_elementListSeparator;
    return this;
}

ElementListSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListSeparatorContext.prototype.constructor = ElementListSeparatorContext;

ElementListSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(LightParser.ParameterSeparator, 0);
};

ElementListSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterElementListSeparator(this);
	}
};

ElementListSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitElementListSeparator(this);
	}
};




LightParser.ElementListSeparatorContext = ElementListSeparatorContext;

LightParser.prototype.elementListSeparator = function() {

    var localctx = new ElementListSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, LightParser.RULE_elementListSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(LightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_multiply;
    return this;
}

MultiplyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

MultiplyContext.prototype.Multiply = function() {
    return this.getToken(LightParser.Multiply, 0);
};

MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMultiply(this);
	}
};




LightParser.MultiplyContext = MultiplyContext;

LightParser.prototype.multiply = function() {

    var localctx = new MultiplyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, LightParser.RULE_multiply);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(LightParser.Multiply);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DivideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_divide;
    return this;
}

DivideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideContext.prototype.constructor = DivideContext;

DivideContext.prototype.Divide = function() {
    return this.getToken(LightParser.Divide, 0);
};

DivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterDivide(this);
	}
};

DivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitDivide(this);
	}
};




LightParser.DivideContext = DivideContext;

LightParser.prototype.divide = function() {

    var localctx = new DivideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, LightParser.RULE_divide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(LightParser.Divide);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModuloContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_modulo;
    return this;
}

ModuloContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuloContext.prototype.constructor = ModuloContext;

ModuloContext.prototype.Modulo = function() {
    return this.getToken(LightParser.Modulo, 0);
};

ModuloContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterModulo(this);
	}
};

ModuloContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitModulo(this);
	}
};




LightParser.ModuloContext = ModuloContext;

LightParser.prototype.modulo = function() {

    var localctx = new ModuloContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, LightParser.RULE_modulo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(LightParser.Modulo);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogicalAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_logicalAnd;
    return this;
}

LogicalAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalAndContext.prototype.constructor = LogicalAndContext;

LogicalAndContext.prototype.LogicalAnd = function() {
    return this.getToken(LightParser.LogicalAnd, 0);
};

LogicalAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLogicalAnd(this);
	}
};

LogicalAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLogicalAnd(this);
	}
};




LightParser.LogicalAndContext = LogicalAndContext;

LightParser.prototype.logicalAnd = function() {

    var localctx = new LogicalAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, LightParser.RULE_logicalAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(LightParser.LogicalAnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogicalOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_logicalOr;
    return this;
}

LogicalOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalOrContext.prototype.constructor = LogicalOrContext;

LogicalOrContext.prototype.LogicalOr = function() {
    return this.getToken(LightParser.LogicalOr, 0);
};

LogicalOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLogicalOr(this);
	}
};

LogicalOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLogicalOr(this);
	}
};




LightParser.LogicalOrContext = LogicalOrContext;

LightParser.prototype.logicalOr = function() {

    var localctx = new LogicalOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, LightParser.RULE_logicalOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(LightParser.LogicalOr);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotEqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_notEqual;
    return this;
}

NotEqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotEqualContext.prototype.constructor = NotEqualContext;

NotEqualContext.prototype.NotEqual = function() {
    return this.getToken(LightParser.NotEqual, 0);
};

NotEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterNotEqual(this);
	}
};

NotEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitNotEqual(this);
	}
};




LightParser.NotEqualContext = NotEqualContext;

LightParser.prototype.notEqual = function() {

    var localctx = new NotEqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, LightParser.RULE_notEqual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(LightParser.NotEqual);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EqualStrictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_equalStrict;
    return this;
}

EqualStrictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualStrictContext.prototype.constructor = EqualStrictContext;

EqualStrictContext.prototype.EqualStrict = function() {
    return this.getToken(LightParser.EqualStrict, 0);
};

EqualStrictContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterEqualStrict(this);
	}
};

EqualStrictContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitEqualStrict(this);
	}
};




LightParser.EqualStrictContext = EqualStrictContext;

LightParser.prototype.equalStrict = function() {

    var localctx = new EqualStrictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, LightParser.RULE_equalStrict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(LightParser.EqualStrict);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotEqualStrictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_notEqualStrict;
    return this;
}

NotEqualStrictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotEqualStrictContext.prototype.constructor = NotEqualStrictContext;

NotEqualStrictContext.prototype.NotEqualStrict = function() {
    return this.getToken(LightParser.NotEqualStrict, 0);
};

NotEqualStrictContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterNotEqualStrict(this);
	}
};

NotEqualStrictContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitNotEqualStrict(this);
	}
};




LightParser.NotEqualStrictContext = NotEqualStrictContext;

LightParser.prototype.notEqualStrict = function() {

    var localctx = new NotEqualStrictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, LightParser.RULE_notEqualStrict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(LightParser.NotEqualStrict);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.Assign = function() {
    return this.getToken(LightParser.Assign, 0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAssign(this);
	}
};




LightParser.AssignContext = AssignContext;

LightParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, LightParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(LightParser.Assign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MemberDotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_memberDot;
    return this;
}

MemberDotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberDotContext.prototype.constructor = MemberDotContext;

MemberDotContext.prototype.MemberDot = function() {
    return this.getToken(LightParser.MemberDot, 0);
};

MemberDotContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMemberDot(this);
	}
};

MemberDotContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMemberDot(this);
	}
};




LightParser.MemberDotContext = MemberDotContext;

LightParser.prototype.memberDot = function() {

    var localctx = new MemberDotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, LightParser.RULE_memberDot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(LightParser.MemberDot);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitIdentifierName(this);
	}
};




LightParser.IdentifierNameContext = IdentifierNameContext;

LightParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, LightParser.RULE_identifierName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this.match(LightParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.multiplyAssign = function() {
    return this.getTypedRuleContext(MultiplyAssignContext,0);
};

AssignmentOperatorContext.prototype.divideAssign = function() {
    return this.getTypedRuleContext(DivideAssignContext,0);
};

AssignmentOperatorContext.prototype.moduloAssign = function() {
    return this.getTypedRuleContext(ModuloAssignContext,0);
};

AssignmentOperatorContext.prototype.addAssign = function() {
    return this.getTypedRuleContext(AddAssignContext,0);
};

AssignmentOperatorContext.prototype.subAssign = function() {
    return this.getTypedRuleContext(SubAssignContext,0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAssignmentOperator(this);
	}
};




LightParser.AssignmentOperatorContext = AssignmentOperatorContext;

LightParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, LightParser.RULE_assignmentOperator);
    try {
        this.state = 403;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LightParser.MultiplyAssign:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.multiplyAssign();
            break;
        case LightParser.DivideAssign:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
            this.divideAssign();
            break;
        case LightParser.ModuloAssign:
            this.enterOuterAlt(localctx, 3);
            this.state = 400;
            this.moduloAssign();
            break;
        case LightParser.AddAssign:
            this.enterOuterAlt(localctx, 4);
            this.state = 401;
            this.addAssign();
            break;
        case LightParser.SubAssign:
            this.enterOuterAlt(localctx, 5);
            this.state = 402;
            this.subAssign();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_multiplyAssign;
    return this;
}

MultiplyAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyAssignContext.prototype.constructor = MultiplyAssignContext;

MultiplyAssignContext.prototype.MultiplyAssign = function() {
    return this.getToken(LightParser.MultiplyAssign, 0);
};

MultiplyAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterMultiplyAssign(this);
	}
};

MultiplyAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitMultiplyAssign(this);
	}
};




LightParser.MultiplyAssignContext = MultiplyAssignContext;

LightParser.prototype.multiplyAssign = function() {

    var localctx = new MultiplyAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, LightParser.RULE_multiplyAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.match(LightParser.MultiplyAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DivideAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_divideAssign;
    return this;
}

DivideAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideAssignContext.prototype.constructor = DivideAssignContext;

DivideAssignContext.prototype.DivideAssign = function() {
    return this.getToken(LightParser.DivideAssign, 0);
};

DivideAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterDivideAssign(this);
	}
};

DivideAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitDivideAssign(this);
	}
};




LightParser.DivideAssignContext = DivideAssignContext;

LightParser.prototype.divideAssign = function() {

    var localctx = new DivideAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, LightParser.RULE_divideAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(LightParser.DivideAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModuloAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_moduloAssign;
    return this;
}

ModuloAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuloAssignContext.prototype.constructor = ModuloAssignContext;

ModuloAssignContext.prototype.ModuloAssign = function() {
    return this.getToken(LightParser.ModuloAssign, 0);
};

ModuloAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterModuloAssign(this);
	}
};

ModuloAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitModuloAssign(this);
	}
};




LightParser.ModuloAssignContext = ModuloAssignContext;

LightParser.prototype.moduloAssign = function() {

    var localctx = new ModuloAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, LightParser.RULE_moduloAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(LightParser.ModuloAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_addAssign;
    return this;
}

AddAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddAssignContext.prototype.constructor = AddAssignContext;

AddAssignContext.prototype.AddAssign = function() {
    return this.getToken(LightParser.AddAssign, 0);
};

AddAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAddAssign(this);
	}
};

AddAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAddAssign(this);
	}
};




LightParser.AddAssignContext = AddAssignContext;

LightParser.prototype.addAssign = function() {

    var localctx = new AddAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, LightParser.RULE_addAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(LightParser.AddAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_subAssign;
    return this;
}

SubAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubAssignContext.prototype.constructor = SubAssignContext;

SubAssignContext.prototype.SubAssign = function() {
    return this.getToken(LightParser.SubAssign, 0);
};

SubAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterSubAssign(this);
	}
};

SubAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitSubAssign(this);
	}
};




LightParser.SubAssignContext = SubAssignContext;

LightParser.prototype.subAssign = function() {

    var localctx = new SubAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, LightParser.RULE_subAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.match(LightParser.SubAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.BlockOpen = function() {
    return this.getToken(LightParser.BlockOpen, 0);
};

ObjectLiteralContext.prototype.BlockClose = function() {
    return this.getToken(LightParser.BlockClose, 0);
};

ObjectLiteralContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

ObjectLiteralContext.prototype.ParameterSeparator = function() {
    return this.getToken(LightParser.ParameterSeparator, 0);
};

ObjectLiteralContext.prototype.propertySeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertySeparatorContext);
    } else {
        return this.getTypedRuleContext(PropertySeparatorContext,i);
    }
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitObjectLiteral(this);
	}
};




LightParser.ObjectLiteralContext = ObjectLiteralContext;

LightParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, LightParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.match(LightParser.BlockOpen);
        this.state = 425;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.FreezeMarker || _la===LightParser.Identifier) {
            this.state = 416;
            this.propertyAssignment();
            this.state = 422;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 417;
                    this.propertySeparator();
                    this.state = 418;
                    this.propertyAssignment(); 
                }
                this.state = 424;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
            }

        }

        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.ParameterSeparator) {
            this.state = 427;
            this.match(LightParser.ParameterSeparator);
        }

        this.state = 430;
        this.match(LightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertySeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_propertySeparator;
    return this;
}

PropertySeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySeparatorContext.prototype.constructor = PropertySeparatorContext;

PropertySeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(LightParser.ParameterSeparator, 0);
};

PropertySeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterPropertySeparator(this);
	}
};

PropertySeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitPropertySeparator(this);
	}
};




LightParser.PropertySeparatorContext = PropertySeparatorContext;

LightParser.prototype.propertySeparator = function() {

    var localctx = new PropertySeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, LightParser.RULE_propertySeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.match(LightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;


 
PropertyAssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyExpressionAssignmentContext.prototype.constructor = PropertyExpressionAssignmentContext;

LightParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.propertyAssignSymbol = function() {
    return this.getTypedRuleContext(PropertyAssignSymbolContext,0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

PropertyExpressionAssignmentContext.prototype.freezeMarker = function() {
    return this.getTypedRuleContext(FreezeMarkerContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitPropertyExpressionAssignment(this);
	}
};



LightParser.PropertyAssignmentContext = PropertyAssignmentContext;

LightParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, LightParser.RULE_propertyAssignment);
    var _la = 0; // Token type
    try {
        localctx = new PropertyExpressionAssignmentContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.FreezeMarker) {
            this.state = 434;
            this.freezeMarker();
        }

        this.state = 437;
        this.propertyName();
        this.state = 438;
        this.propertyAssignSymbol();
        this.state = 439;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FreezeMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_freezeMarker;
    return this;
}

FreezeMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FreezeMarkerContext.prototype.constructor = FreezeMarkerContext;

FreezeMarkerContext.prototype.FreezeMarker = function() {
    return this.getToken(LightParser.FreezeMarker, 0);
};

FreezeMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFreezeMarker(this);
	}
};

FreezeMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFreezeMarker(this);
	}
};




LightParser.FreezeMarkerContext = FreezeMarkerContext;

LightParser.prototype.freezeMarker = function() {

    var localctx = new FreezeMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, LightParser.RULE_freezeMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
        this.match(LightParser.FreezeMarker);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyAssignSymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_propertyAssignSymbol;
    return this;
}

PropertyAssignSymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignSymbolContext.prototype.constructor = PropertyAssignSymbolContext;

PropertyAssignSymbolContext.prototype.PropertyAssignSymbol = function() {
    return this.getToken(LightParser.PropertyAssignSymbol, 0);
};

PropertyAssignSymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterPropertyAssignSymbol(this);
	}
};

PropertyAssignSymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitPropertyAssignSymbol(this);
	}
};




LightParser.PropertyAssignSymbolContext = PropertyAssignSymbolContext;

LightParser.prototype.propertyAssignSymbol = function() {

    var localctx = new PropertyAssignSymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, LightParser.RULE_propertyAssignSymbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.match(LightParser.PropertyAssignSymbol);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitPropertyName(this);
	}
};




LightParser.PropertyNameContext = PropertyNameContext;

LightParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, LightParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(LightParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_equal;
    return this;
}

EqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualContext.prototype.constructor = EqualContext;

EqualContext.prototype.Equal = function() {
    return this.getToken(LightParser.Equal, 0);
};

EqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterEqual(this);
	}
};

EqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitEqual(this);
	}
};




LightParser.EqualContext = EqualContext;

LightParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, LightParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        this.match(LightParser.Equal);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_less;
    return this;
}

LessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessContext.prototype.constructor = LessContext;

LessContext.prototype.Less = function() {
    return this.getToken(LightParser.Less, 0);
};

LessContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLess(this);
	}
};

LessContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLess(this);
	}
};




LightParser.LessContext = LessContext;

LightParser.prototype.less = function() {

    var localctx = new LessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, LightParser.RULE_less);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.match(LightParser.Less);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GreaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_greater;
    return this;
}

GreaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterContext.prototype.constructor = GreaterContext;

GreaterContext.prototype.Greater = function() {
    return this.getToken(LightParser.Greater, 0);
};

GreaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterGreater(this);
	}
};

GreaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitGreater(this);
	}
};




LightParser.GreaterContext = GreaterContext;

LightParser.prototype.greater = function() {

    var localctx = new GreaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, LightParser.RULE_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(LightParser.Greater);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LessOrEqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_lessOrEql;
    return this;
}

LessOrEqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessOrEqlContext.prototype.constructor = LessOrEqlContext;

LessOrEqlContext.prototype.LessOrEql = function() {
    return this.getToken(LightParser.LessOrEql, 0);
};

LessOrEqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLessOrEql(this);
	}
};

LessOrEqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLessOrEql(this);
	}
};




LightParser.LessOrEqlContext = LessOrEqlContext;

LightParser.prototype.lessOrEql = function() {

    var localctx = new LessOrEqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, LightParser.RULE_lessOrEql);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.match(LightParser.LessOrEql);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GreaterOrEqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_greaterOrEql;
    return this;
}

GreaterOrEqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterOrEqlContext.prototype.constructor = GreaterOrEqlContext;

GreaterOrEqlContext.prototype.GreaterOrEql = function() {
    return this.getToken(LightParser.GreaterOrEql, 0);
};

GreaterOrEqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterGreaterOrEql(this);
	}
};

GreaterOrEqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitGreaterOrEql(this);
	}
};




LightParser.GreaterOrEqlContext = GreaterOrEqlContext;

LightParser.prototype.greaterOrEql = function() {

    var localctx = new GreaterOrEqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, LightParser.RULE_greaterOrEql);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
        this.match(LightParser.GreaterOrEql);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.ParameterListOpen = function() {
    return this.getToken(LightParser.ParameterListOpen, 0);
};

ArgumentsContext.prototype.ParameterListClose = function() {
    return this.getToken(LightParser.ParameterListClose, 0);
};

ArgumentsContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ArgumentsContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitArguments(this);
	}
};




LightParser.ArgumentsContext = ArgumentsContext;

LightParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, LightParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        this.match(LightParser.ParameterListOpen);
        this.state = 467;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (LightParser.Function - 21)) | (1 << (LightParser.Array - 21)) | (1 << (LightParser.BlockOpen - 21)) | (1 << (LightParser.ParameterListOpen - 21)) | (1 << (LightParser.ArrayLiteralOpen - 21)) | (1 << (LightParser.New - 21)) | (1 << (LightParser.Identifier - 21)) | (1 << (LightParser.Boolean - 21)) | (1 << (LightParser.String - 21)) | (1 << (LightParser.Number - 21)))) !== 0)) {
            this.state = 458;
            this.singleExpression(0);
            this.state = 464;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LightParser.ParameterSeparator) {
                this.state = 459;
                this.parameterSeparator();
                this.state = 460;
                this.singleExpression(0);
                this.state = 466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 469;
        this.match(LightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_parameterSeparator;
    return this;
}

ParameterSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterSeparatorContext.prototype.constructor = ParameterSeparatorContext;

ParameterSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(LightParser.ParameterSeparator, 0);
};

ParameterSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterParameterSeparator(this);
	}
};

ParameterSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitParameterSeparator(this);
	}
};




LightParser.ParameterSeparatorContext = ParameterSeparatorContext;

LightParser.prototype.parameterSeparator = function() {

    var localctx = new ParameterSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, LightParser.RULE_parameterSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(LightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.formalParameterArg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterArgContext);
    } else {
        return this.getTypedRuleContext(FormalParameterArgContext,i);
    }
};

FormalParameterListContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFormalParameterList(this);
	}
};




LightParser.FormalParameterListContext = FormalParameterListContext;

LightParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, LightParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.Identifier) {
            this.state = 473;
            this.formalParameterArg();
        }

        this.state = 481;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LightParser.ParameterSeparator) {
            this.state = 476;
            this.parameterSeparator();
            this.state = 477;
            this.formalParameterArg();
            this.state = 483;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormalParameterArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_formalParameterArg;
    return this;
}

FormalParameterArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterArgContext.prototype.constructor = FormalParameterArgContext;

FormalParameterArgContext.prototype.Identifier = function() {
    return this.getToken(LightParser.Identifier, 0);
};

FormalParameterArgContext.prototype.Assign = function() {
    return this.getToken(LightParser.Assign, 0);
};

FormalParameterArgContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

FormalParameterArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFormalParameterArg(this);
	}
};

FormalParameterArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFormalParameterArg(this);
	}
};




LightParser.FormalParameterArgContext = FormalParameterArgContext;

LightParser.prototype.formalParameterArg = function() {

    var localctx = new FormalParameterArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, LightParser.RULE_formalParameterArg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this.match(LightParser.Identifier);
        this.state = 487;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LightParser.Assign) {
            this.state = 485;
            this.match(LightParser.Assign);
            this.state = 486;
            this.singleExpression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitFunctionBody(this);
	}
};




LightParser.FunctionBodyContext = FunctionBodyContext;

LightParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, LightParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 490;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (LightParser.Let - 18)) | (1 << (LightParser.If - 18)) | (1 << (LightParser.Function - 18)) | (1 << (LightParser.Return - 18)) | (1 << (LightParser.Array - 18)) | (1 << (LightParser.BlockOpen - 18)) | (1 << (LightParser.ParameterListOpen - 18)) | (1 << (LightParser.ArrayLiteralOpen - 18)) | (1 << (LightParser.New - 18)) | (1 << (LightParser.Identifier - 18)) | (1 << (LightParser.Boolean - 18)) | (1 << (LightParser.String - 18)) | (1 << (LightParser.Number - 18)))) !== 0)) {
            this.state = 489;
            this.statements();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.Boolean = function() {
    return this.getToken(LightParser.Boolean, 0);
};

LiteralContext.prototype.String = function() {
    return this.getToken(LightParser.String, 0);
};

LiteralContext.prototype.Number = function() {
    return this.getToken(LightParser.Number, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitLiteral(this);
	}
};




LightParser.LiteralContext = LiteralContext;

LightParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, LightParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 492;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (LightParser.Boolean - 45)) | (1 << (LightParser.String - 45)) | (1 << (LightParser.Number - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_add;
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;

AddContext.prototype.Add = function() {
    return this.getToken(LightParser.Add, 0);
};

AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitAdd(this);
	}
};




LightParser.AddContext = AddContext;

LightParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, LightParser.RULE_add);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.match(LightParser.Add);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LightParser.RULE_sub;
    return this;
}

SubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubContext.prototype.constructor = SubContext;

SubContext.prototype.Sub = function() {
    return this.getToken(LightParser.Sub, 0);
};

SubContext.prototype.enterRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.enterSub(this);
	}
};

SubContext.prototype.exitRule = function(listener) {
    if(listener instanceof LightListener ) {
        listener.exitSub(this);
	}
};




LightParser.SubContext = SubContext;

LightParser.prototype.sub = function() {

    var localctx = new SubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, LightParser.RULE_sub);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.match(LightParser.Sub);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


LightParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 13:
			return this.singleExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LightParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 13);
		case 9:
			return this.precpred(this._ctx, 11);
		case 10:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LightParser = LightParser;
