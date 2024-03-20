# 语法解析生成

pnpm lang

## 语法变更点

`Java8Lexer.g4`：

- 去掉 '-> skip'，不再忽略注释相关的token

```g4
COMMENT: '/*' .*? '*/';

LINE_COMMENT: '//' ~[\r\n]*;
```

`Java8Parser.g4`：

- 新增 comment 语法
```g4
comments
    : ( COMMENT | LINE_COMMENT ) *
    ;
```