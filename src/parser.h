#ifndef PARSER_H
#define PARSER_H
#include "lexer.h"

typedef enum {
    AST_ASSIGN, AST_BINOP, AST_NUMBER, AST_ID, AST_PRINT
} ASTType;

typedef struct AST {
    ASTType type;
    char *name; // for ID or assignment
    int value; // for number
    struct AST *left, *right; // for binop and statement list
    struct AST *expr; // for print or assignment
} AST;

AST *parse(TokenList *tokens);

#endif // PARSER_H