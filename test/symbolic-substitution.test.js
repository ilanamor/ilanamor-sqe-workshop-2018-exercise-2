import assert from 'assert';
import * as subs from '../src/js/symbolic-substitution';


describe('The javascript parser', () => {

    beforeEach(function() {
        // runs before each test in this block
        subs.reset();
    });

    it('general test - if example with numbers', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='function foo(x, y, z) {\n' +
            '    if (x + 1 + y < z) {\n' +
            '        return x + y + z + (0 + 5);\n' +
            '    } else if (x + 1 + y < z * 2) {\n' +
            '        return x + y + z + (0 + x + 5);\n' +
            '    } else {\n' +
            '        return x + y + z + (0 + z + 5);\n' +
            '    }\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('decleration outside a function', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "VariableDeclaration",
                    "declarations": [
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "f"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 55,
                                "raw": "55"
                            }
                        }
                    ],
                    "kind": "let"
                },
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "f"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 7,
                                                "raw": "7"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "z"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='let f = 55;\n' +
            'function foo(x, y, z) {\n' +
            '    return x + y + z + (f + 7);\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('while statement', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "WhileStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 2,
                                                        "raw": "2"
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "z"
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='function foo(x, y, z) {\n' +
            '    while (x + 1 < z) {\n' +
            '        z = (x + 1 + (x + 1 + y)) * 2;\n' +
            '    }\n' +
            '    return z;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('array as argument', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "WhileStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    },
                                                    "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                    }
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 2,
                                                        "raw": "2"
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "property": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,[2,3,4]';
        let res ='function foo(x, y, z) {\n' +
            '    while (x + 1 < z) {\n' +
            '        z[0] = (x + 1 + (x + 1 + y)) * 2;\n' +
            '    }\n' +
            '    return z[2];\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('string as argument', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "VariableDeclaration",
                    "declarations": [
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "f"
                            },
                            "init": null
                        }
                    ],
                    "kind": "let"
                },
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "f"
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "y"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "z"
                                        }
                                    }
                                }
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": null
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Literal",
                                            "value": "test",
                                            "raw": "\"test\""
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "x"
                                        }
                                    }
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "f"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='\'hi\',\'hello\',\'shalom\'';
        let res ='let f;\n' +
            'function foo(x, y, z) {\n' +
            '    f = y + z;\n' +
            '    return \'test\' + x + f;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('update & sequence - no 1', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f"
                                        },
                                        "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "prefix": false
                                    }
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "y"
                                        }
                                    },
                                    "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "UpdateExpression",
                                            "operator": "--",
                                            "argument": {
                                                "type": "Identifier",
                                                "name": "y"
                                            },
                                            "prefix": false
                                        }
                                    },
                                    "alternate": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "SequenceExpression",
                                            "expressions": [
                                                {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                },
                                                {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 6,
                                                        "raw": "6"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='2,4,6';
        let res ='function foo(x, y, z) {\n' +
            '    if (x > y)\n' +
            '        return x++;\n' +
            '    else if (x < y)\n' +
            '        return y--;\n' +
            '    else\n' +
            '        x = 5, y = 6;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('update & sequence - no 2', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f"
                                        },
                                        "init": {
                                            "type": "Identifier",
                                            "name": "x"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "f"
                                    },
                                    "prefix": false
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "f"
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='2,4,6';
        let res ='function foo(x, y, z) {\n' +
            '    return x++;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('Not supported function', () => {
        let parseCode = {
            "type": "NotSupported",
            "id": {
                "type": "Identifier",
                "name": "sample"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": []
            }
        };
        assert.equal(subs.functionRunner(parseCode), null);
    });

    it('if inside if', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "prefix": false
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "--",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "prefix": false
                                }
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "IfStatement",
                                            "test": {
                                                "type": "BinaryExpression",
                                                "operator": "==",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                }
                                            },
                                            "consequent": {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true"
                                                }
                                            },
                                            "alternate": {
                                                "type": "IfStatement",
                                                "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": "<",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    }
                                                },
                                                "consequent": {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "Literal",
                                                        "value": false,
                                                        "raw": "false"
                                                    }
                                                },
                                                "alternate": null
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='function foo(x, y, z) {\n' +
            '    x++;\n' +
            '    z--;\n' +
            '    if (x <= y) {\n' +
            '        if (x == y)\n' +
            '            return true;\n' +
            '        else if (x < y)\n' +
            '            return false;\n' +
            '    } else\n' +
            '        return false;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('2d array - global', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 6,
                                            "raw": "6"
                                        }
                                    },
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "z"
                                        },
                                        "property": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "property": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "c"
                                        }
                                    }
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "z"
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='[4,5],2,[1,2]';
        let res ='function foo(x, y, z) {\n' +
            '    z[x[2]] = 6 + 5;\n' +
            '    return z;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('colors - no 1', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        subs.functionDeclaration(parseCode,args);
        assert.equal(subs.red[0],2);
        assert.equal(subs.green[0],4);
    });

    it('colors - no 2', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                    }
                                },
                                "consequent": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "y"
                                        }
                                    },
                                    "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true"
                                        }
                                    },
                                    "alternate": {
                                        "type": "IfStatement",
                                        "test": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        },
                                        "consequent": {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
                                            }
                                        },
                                        "alternate": null
                                    }
                                },
                                "alternate": null
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='2,2,3';
        subs.functionDeclaration(parseCode,args);
        assert.equal(subs.red[0],3);
        assert.equal(subs.green[0],2);
        assert.equal(subs.green[1],5);
    });

    it('2d array - local', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "m"
                                        },
                                        "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": 2,
                                                    "raw": "2"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "n"
                                        },
                                        "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Literal",
                                                    "value": 4,
                                                    "raw": "4"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "n"
                                            },
                                            "property": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "m"
                                                },
                                                "property": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='function foo(x, y, z) {\n' +
            '    x = x + 5;\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('2d array - local - no 2', () => {
        let parseCode={
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Literal",
                                                    "value": 2,
                                                    "raw": "2"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": 3,
                                                    "raw": "3"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": 4,
                                                    "raw": "4"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5"
                                    }
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "x"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            ],
            "sourceType": "script"
        };
        let args='1,2,3';
        let res ='function foo(x, y, z) {\n' +
            '}';
        assert.equal(subs.functionDeclaration(parseCode,args),res);
    });

    it('calcutate with eval', () => {

        subs.globals.set('x','3')
        assert.equal(subs.calculate('x==3'),'true');
    });

});